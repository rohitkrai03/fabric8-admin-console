const env = window['AdminConsoleEnv'] || {};

export const environment = {
  production: true,
  adminApiUrl: env.adminApiUrl || 'https://admin-console.api.prod-preview.openshift.io/api/',
  authApiUrl: env.authApiUrl || 'https://auth.prod-preview.openshift.io/api/',
  witApiUrl: env.witApiUrl || 'https://api.prod-preview.openshift.io/api/',
  ssoApiUrl: env.ssoApiUrl || 'https://sso.prod-preview.openshift.io/api/'
};
