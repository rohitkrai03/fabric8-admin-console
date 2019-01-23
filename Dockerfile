# Builds a Docker to deliver dist/
FROM nginx:latest
COPY dist/fabric8-admin-console /usr/share/nginx/html
