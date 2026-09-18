// Demo config — INTENTIONALLY VULNERABLE (hardcoded secrets, CWE-798).
// Values are deliberately generic/fake shapes (not any real provider's token format)
// so this trips Spectra's own hardcoded-secret detection without also matching
// GitHub's provider-specific secret-scanning push protection.
module.exports = {
  dbPassword: process.env.DB_PASSWORD || 'Adm1n_Prod_DB_2024_DoNotShare',
  jwtSecret: 'my-super-secret-jwt-signing-key-2024-change-me',
  internalApiKey: 'demo-internal-api-key-8f3d9c2a7b1e4f60',
  sessionSecret: process.env.SESSION_SECRET || 'insecure-static-session-secret-value',
};
