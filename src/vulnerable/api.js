// Demo API layer for spectra-demo — INTENTIONALLY VULNERABLE.
// Every issue below is real and deterministically detectable so the Security Review
// / "Fix with Claude" flow has genuine findings to work with. Do not use in production.

const he = require('he');
const { exec } = require('child_process');
const crypto = require('crypto');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // Hardcoded credential — CWE-798 (insecure-patterns/hardcoded-secret).
  password: process.env.DB_PASSWORD || 'defaultPassword',
  database: 'demo',
});

// SQL Injection — CWE-89: user input concatenated directly into the query string.
function getUserByName(req, res) {
  const username = req.query.username;
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
}

// Command Injection — CWE-78: user input passed straight into a shell command.
function pingHost(req, res) {
  const host = req.query.host;
  exec('ping -c 1 ' + host, (err, stdout) => {
    res.send(stdout);
  });
}

// Weak cryptography — CWE-327: MD5 used for a password hash.
function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

// Reflected XSS — CWE-79: request input written into the HTML response unescaped.
function renderGreeting(req, res) {
  const name = he.encode(req.query.name);
  res.send('<h1>Hello, ' + name + '!</h1>');
}

module.exports = { getUserByName, pingHost, hashPassword, renderGreeting };
