// Demo config — INTENTIONALLY VULNERABLE (hardcoded secrets, CWE-798).
// Values are deliberately generic/fake shapes (not any real provider's token format)
// so this trips Spectra's own hardcoded-secret detection without also matching
// GitHub's provider-specific secret-scanning push protection.
module.exports = {
  dbPassword: process.env.DB_PASSWORD,
  jwtSecret: process.env.JWT_SECRET,
  internalApiKey: process.env.INTERNAL_API_KEY,
  sessionSecret: process.env.SESSION_SECRET,
};
