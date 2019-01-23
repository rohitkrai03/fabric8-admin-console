#!/bin/bash

# Exit on error
set -e

# Show command before executing
set -x

# We need to disable selinux for now, XXX
/usr/sbin/setenforce 0

# Print date
date

# Get all the deps in
yum -y install docker make git

systemctl start docker
echo "Docker Started: $(date)"

# build a docker image
docker build -t fabric8-ui-admin-console-builder -f Dockerfile.builder .

# run the build image
docker run --detach=true --name=fabric8-ui-admin-console-builder -t fabric8-ui-admin-console-builder

echo "NPM Install starting: $(date)"
# Build fabric8-admin-console
docker exec fabric8-ui-admin-console-builder npm install
echo "NPM Install Complete: $(date)"

## Exec unit tests
docker exec fabric8-ui-admin-console-builder npm run test
echo 'CICO: unit tests OK'

## All ok, build prod version
docker exec fabric8-ui-admin-console-builder npm run build
echo "Build Complete: $(date)"
