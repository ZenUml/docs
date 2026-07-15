# Stale HTML Cache Fix

## Problem

Cloudflare Automatic Platform Optimization (APO) caches the Docusaurus HTML independently across edge locations and device variants. After a Cloudflare Pages deployment replaces fingerprinted JavaScript and CSS entry files, stale HTML can reference files that no longer exist. Docusaurus then renders its fallback error because its runtime does not load.

## Design

Disable APO for the static Docusaurus site and purge the existing Cloudflare cache. Add a repository-level defense in `static/_headers`:

- Send `cf-edge-cache: no-cache` for every route so APO cannot cache the site if it is enabled accidentally later.
- Send a one-year immutable browser cache policy for `/assets/*`, whose filenames contain content hashes.
- Leave HTML on Cloudflare Pages' default revalidation policy (`public, max-age=0, must-revalidate`).

Cloudflare Pages' native static-asset cache remains active; only the inappropriate WordPress-oriented APO HTML cache is bypassed.

## Deployment

Build the Docusaurus site and verify that `_headers` is copied to the build root. Push the change to `main` to trigger the existing Cloudflare Pages deployment. Disable APO and purge the zone cache through the configured Cloudflare account.

## Verification

- `/` and representative document routes no longer return `cf-apo-via: tcache` after the purge.
- HTML continues to require revalidation.
- `/assets/*` responses return `Cache-Control: public, max-age=31536000, immutable`.
- Every JavaScript and CSS entry referenced by deployed HTML returns `200`.
- The production homepage loads without the Docusaurus fallback banner.

## Rollback

Remove `static/_headers`, redeploy, and restore the previous Cloudflare APO setting if necessary. Purge the cache after either change so all edge locations adopt the rollback.
