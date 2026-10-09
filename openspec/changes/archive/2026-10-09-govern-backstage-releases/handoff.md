# Governance handoff

Codex established `backstage-specs/meta` as the published default planning branch.
Historical specs main points readers to meta. Product/business contracts, original
brief, engine decision, roadmap, and agent pushback rules are versioned here.

Code `starter`, `develop`, `stage`, and `main` use the same root README with meta
links and branch roles. Generated instructions accompany every checkout. Starter
retains its original implementation; only documentation/governance was updated.
Stage/main bootstrap commit: 720f592. Develop candidate: d0596607 (integration
1464ea2 plus merge of the shared governance bootstrap).

GitHub branch protection was written and read back for develop/stage/main:
required `checks`, strict up-to-date branches, PRs, conversation resolution, no
force pushes or deletion, administrators included. Stage/main require one approval;
develop requires a PR with passing checks but no separate approval. Source route
and acceptance gates run in the checks job. Reviewer judgment is still required;
evidence declarations are not independent attestations of hardware behavior.

Verification: npm ci; npm run check (strict active/accepted/archive validation,
five sync safety tests and generated-instruction drift); workflow regeneration
produced no diff. Four code promotion-policy tests passed; main bootstrap CI passed.
Application build/gameplay/hardware remains separately blocked in the active
integrate-backstage-foundation change. Governance completion does not release it.
