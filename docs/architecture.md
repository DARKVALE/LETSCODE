# LETSCODE architecture outline

## Platform goals
- Prompt-driven creation of full-stack SaaS apps with an AI that communicates intent, plan, and status.
- Each user receives an isolated workspace with Supabase authentication and metadata.
- Deploy preview URLs for every project using real infrastructure (e.g., Vercel), not just browser sandboxes.

## High-level components
1. **Web app (Next.js)**
   - Marketing, onboarding, and the live IDE workspace.
   - Uses App Router for modern routing, metadata, and SEO primitives.
   - Client components for real-time file updates, logs, and deployment states.
2. **Supabase**
   - Authentication + RLS for per-user isolation.
   - Tables for projects, activity_log, deployments, prompts, and admin settings.
   - Edge Functions for secure server actions and webhooks (build/deploy events).
3. **AI Orchestrator**
   - Pluggable provider layer (initial: XAI) with the ability to add OpenAI/Anthropic/etc.
   - System prompts stored in Supabase so admins can adjust instructions without redeploying.
   - Streaming responses to drive file writes and UI updates.
4. **Deployment worker**
   - Handles build requests and status polling for external hosts (Vercel, Render, etc.).
   - Emits progress events into Supabase realtime channels consumed by the IDE.

## Data flow
1. User authenticates via Supabase and opens a project workspace.
2. The AI reads the existing project plan + activity log to determine the next step.
3. File edits stream into the IDE: file tree updates, code diff highlights, and console logs.
4. User triggers a preview deploy → deployment worker builds on Vercel → status messages stream back.
5. All actions (AI + user) are appended to `activity_log` for transparent handover.

## Prompts and logging
- Default system prompt lives in Supabase and is injected alongside per-project context.
- Activity log schema: `id`, `project_id`, `actor` (ai|user|system), `action`, `details`, `created_at`.
- Project plan schema: `project_id`, `feature`, `status`, `notes`, `priority`.
- Admin can rotate prompt sets and provider credentials at runtime.

## Security and reliability
- Supabase RLS ensures users only access their own projects/logs/deployments.
- Deployment worker runs with service-role keys and signs status webhooks.
- Rate limiting on generation/deploy triggers to avoid runaway costs.
- All errors surfaced in the IDE console panel with actionable guidance.
