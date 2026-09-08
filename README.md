# spectra-demo

A minimal Node.js + Jest project wired to Spectra: every pull request runs the
tests, uploads `coverage/lcov.info` to Spectra, and fails CI if the Spectra
overall score is below the threshold.

## Layout

- `src/calculator.js` — the code under test
- `tests/calculator.test.js` — Jest tests
- `.github/workflows/spectra.yml` — CI: test → coverage → Spectra upload + gate

## Run locally

```bash
npm install
npm test        # runs jest --coverage, writes coverage/lcov.info
```

## One-time setup on GitHub (manual)

1. Create an empty repo on GitHub and push this project to it.
2. Install the Spectra GitHub App on the repo (so PR analysis runs).
3. In Spectra, open the repo's settings page, copy the **coverage upload token**.
4. In the GitHub repo: Settings → Secrets and variables → Actions →
   New repository secret → name `SPECTRA_TOKEN`, value = the token.
5. Open a pull request — the "Tests + Spectra" workflow runs automatically.
