import styles from './Roadmap.module.css';

const roadmap = [
  {
    title: 'Authentication + tenancy',
    detail: 'Supabase auth, per-user orgs, secure project isolation',
    eta: 'in-progress'
  },
  {
    title: 'AI co-creation IDE',
    detail: 'Live file updates, status indicators, deploy controls',
    eta: 'alpha'
  },
  {
    title: 'Deployable previews',
    detail: 'Spin Vercel builds per project with build/deploy signals',
    eta: 'alpha'
  },
  {
    title: 'Admin + billing',
    detail: 'User/project control, LLM provider switching, Stripe billing',
    eta: 'planned'
  }
];

export function Roadmap() {
  return (
    <section className="card">
      <div className="section-title">
        <h2>Roadmap to v1</h2>
        <span>Focused on reliability + UX</span>
      </div>
      <div className={styles.list}>
        {roadmap.map((item) => (
          <div key={item.title} className={styles.row}>
            <div>
              <strong>{item.title}</strong>
              <p className="subtitle">{item.detail}</p>
            </div>
            <span className={styles.eta}>{item.eta}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
