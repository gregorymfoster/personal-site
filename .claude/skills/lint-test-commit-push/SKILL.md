---
name: lint-test-commit-push
description: Validate and ship code changes by running lint, tests, commit, and push in sequence. Use when the user asks to "commit", "push", "ship", or finalize their changes.
---

# Lint, Test, Commit, and Push

Run these steps in order. Stop immediately if any step fails.

## Step 1: Lint

```bash
npm run lint
```

If lint fails with fixable issues, run `npm run format` first, then re-run lint.

## Step 2: Test

```bash
npm run test
```

All tests must pass before proceeding.

## Step 3: Commit

```bash
git add -A
git commit -m "<message>"
```

Write a clear commit message in imperative mood ("Add feature" not "Added feature"). If the user provided a message, use it. Otherwise, summarize what changed.

## Step 4: Push

```bash
git push
```

If push fails due to upstream changes:

```bash
git pull --rebase
git push
```

Resolve any merge conflicts before pushing again.

## Failure Handling

| Step | If it fails... |
|------|----------------|
| Lint | Run `npm run format`, then retry. Fix remaining issues manually. |
| Test | Fix failing tests. Do not skip or disable tests. |
| Push | Pull with rebase, resolve conflicts, then push. |
