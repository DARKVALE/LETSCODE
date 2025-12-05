import styles from './SystemPrompt.module.css';

const defaultPrompt = `You are LETSCODE, an AI pair-programmer building SaaS apps from prompts.
- Keep Supabase auth + database stable.
- Record every step to the project log for seamless LLM handover.
- Run safe, incremental edits and verify builds before deploy.
- Explain decisions briefly so humans can follow along.`;

const nextSteps = [
  'Wire Supabase auth and workspace sessions',
  'Connect activity log to database tables',
  'Stream deploy/build events from preview hosts',
  'Expose admin toggles for model + prompt presets'
];

export function SystemPrompt() {
  return (
    <section className="card">
      <div className="section-title">
        <h2>Default system instructions</h2>
        <span>Ready for XAI + future LLMs</span>
      </div>
      <div className={styles.content}>
        <textarea readOnly value={defaultPrompt} className={styles.prompt} />
        <div className={styles.next}>
          <h3>Next actions for the AI</h3>
          <ul>
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
