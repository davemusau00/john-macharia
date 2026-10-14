# Portfolio CMS usage

The editor is available at `/admin/`. It uses Decap CMS with GitHub as the content store and the editorial workflow, so saving content creates a pull request. The website changes only after that pull request is reviewed and merged.

## First-time setup

1. Deploy `infrastructure/oauth-worker` with Wrangler.
2. Add the GitHub OAuth callback URL as `https://YOUR-OAUTH-WORKER.workers.dev/callback`.
3. Set `GITHUB_CLIENT_ID` in `wrangler.toml` and store the secret with `wrangler secret put GITHUB_CLIENT_SECRET`.
4. Replace `YOUR-OAUTH-WORKER.workers.dev` in `admin/config.yml` with the Worker hostname.
5. Give editors the required access to the repository.

Never commit the OAuth secret or a personal access token.

## Editing and publishing

Open `/admin/`, choose a page or case study, edit the fields, and select **Save**. Decap creates a draft branch and pull request. Review the generated content and build check in GitHub, then merge the pull request to publish it through GitHub Pages.

Keep case-study slugs stable after a page is published. Changing a slug changes the public URL and can break existing links. Use the media picker for images and keep uploads inside `assets/img/uploads`.

## Local validation

Install Ruby and Bundler, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000/`. Validate the changed page, its metadata, images, navigation, and links before merging.

## Recovery and troubleshooting

- A failed build: open the GitHub Actions log, correct the reported YAML, Markdown, or Liquid error, then save the draft again.
- Authentication failure: verify the Worker hostname, GitHub OAuth callback URL, and Worker secret.
- Broken image: confirm the file exists under `assets/img/uploads` and that the CMS field uses the generated path.
- Accidental publication: revert the CMS-generated merge commit in GitHub and allow Pages to rebuild.

The existing hand-authored pages remain the compatibility surface during the migration; template conversion should be verified page by page before removing those files.
