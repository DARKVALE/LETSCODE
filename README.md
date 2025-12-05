# LETSCODE

Prompt-native platform for building production-ready SaaS apps with AI.

## Stack
- **Next.js (App Router)** for marketing + IDE UI
- **Supabase** for auth, metadata, and project activity logs
- **XAI-first LLM orchestration** with pluggable providers
- **Vercel-style preview deploys** per project (no browser-only sandboxes)

## Current prototype
- Landing page describing the experience and live status panel
- High-fidelity IDE mock with file activity, logs, and deploy CTA
- Roadmap + default system prompt panel for LLM handover
- Supabase client helper ready for environment variables

## Running locally
1. Install deps: `npm install`
2. Configure env: set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Start dev server: `npm run dev`

## Next steps
- Wire Supabase auth + database schemas (projects, activity_log, deployments)
- Connect AI orchestrator and streaming file updates
- Add admin dashboard for provider + prompt controls
