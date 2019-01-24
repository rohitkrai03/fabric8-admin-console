window.AdminConsoleEnv = {
  adminApiUrl: '{{ .Env.ADMIN_CONSOLE_API_URL }}',
  authApiUrl: '{{ .Env.AUTH_API_URL }}',
  witApiUrl: '{{ .Env.WIT_API_URL }}',
  ssoApiUrl: '{{ .Env.SSO_API_URL }}'
}
