import { IdeWorkspace } from '@/components/IdeWorkspace';
import { Roadmap } from '@/components/Roadmap';
import { SystemPrompt } from '@/components/SystemPrompt';

export default function Home() {
  return (
    <main>
      <header className="card" style={{ marginBottom: 18 }}>
        <div className="stack" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p className="badge">Prompt-native SaaS builder</p>
            <h1 style={{ margin: '8px 0 6px' }}>LETSCODE – vibe coding for real software</h1>
            <p className="subtitle" style={{ maxWidth: 720 }}>
              Ship production-ready full-stack apps from prompts. A modern IDE with Supabase auth, deployable previews, and AI that explains every step for fast handover.
            </p>
            <div className="stack" style={{ marginTop: 12 }}>
              <button className="button">Start a project</button>
              <button className="button secondary">View admin</button>
            </div>
          </div>
          <div className="card" style={{ minWidth: 280, maxWidth: 360, background: 'rgba(124,58,237,0.08)' }}>
            <div className="section-title">
              <h2>Live status</h2>
              <span>AI in progress</span>
            </div>
            <ul style={{ paddingLeft: 18, color: 'var(--muted)', lineHeight: 1.6 }}>
              <li>AI coding files with visible diffs</li>
              <li>Deploying preview environment per project</li>
              <li>Supabase auth + metadata logging</li>
              <li>Structured plan for LLM handover</li>
            </ul>
          </div>
        </div>
      </header>

      <IdeWorkspace />

      <div className="grid" style={{ gridTemplateColumns: '1.2fr 1fr', marginTop: 18 }}>
        <Roadmap />
        <SystemPrompt />
      </div>
    </main>
  );
}
