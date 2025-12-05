'use client';

import { motion } from 'framer-motion';
import { AiOutlineCode, AiOutlineCloudUpload, AiOutlineRobot } from 'react-icons/ai';
import { FiTerminal } from 'react-icons/fi';
import { MdInsertDriveFile } from 'react-icons/md';
import { useMemo } from 'react';
import styles from './IdeWorkspace.module.css';

const sampleFiles = [
  { name: 'app/page.tsx', status: 'updated' },
  { name: 'components/IdeWorkspace.tsx', status: 'updated' },
  { name: 'lib/supabase.ts', status: 'reading' },
  { name: 'app/api/deploy/route.ts', status: 'writing' }
];

const logs = [
  '[10:21:03] AI planning: scaffold dashboard layout',
  '[10:21:05] Created app/api/deploy/route.ts',
  '[10:21:06] Running build on preview stack',
  '[10:21:07] Deployment: queued on Vercel region iad1'
];

const activities = [
  {
    title: 'Plan: SaaS workspace shell',
    detail: 'Generate IDE chrome, status, and log streams',
    status: 'done'
  },
  {
    title: 'Write files',
    detail: 'Update page.tsx, components, Supabase client',
    status: 'active'
  },
  {
    title: 'Deploy preview',
    detail: 'Push to project sandbox and verify health',
    status: 'pending'
  }
];

const statusColor: Record<string, string> = {
  updated: '#34d399',
  reading: '#fbbf24',
  writing: '#60a5fa'
};

export function IdeWorkspace() {
  const activeFiles = useMemo(() => sampleFiles.map((file) => ({
    ...file,
    dot: statusColor[file.status] ?? '#7c3aed'
  })), []);

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <span className="badge"><AiOutlineRobot /> AI session</span>
          <strong>Current project</strong>
          <p className="subtitle">Next.js + Supabase • Full-stack preview running</p>
        </div>
        <div className={styles.files}>
          {activeFiles.map((file) => (
            <div key={file.name} className={styles.file}>
              <span className={styles.dot} style={{ background: file.dot }} />
              <MdInsertDriveFile />
              <span>{file.name}</span>
              <span className={styles.status}>{file.status}</span>
            </div>
          ))}
        </div>
        <div className={styles.timeline}>
          <div className="section-title">
            <h2>Activity</h2>
            <span>Logging + handover</span>
          </div>
          <div className={styles.activityList}>
            {activities.map((item) => (
              <div key={item.title} className={styles.activity}>
                <span className={styles.activityStatus} data-state={item.status}>•</span>
                <div>
                  <strong>{item.title}</strong>
                  <p className="subtitle">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.toolbar}>
          <div className="badge"><AiOutlineCode /> IDE</div>
          <div className={styles.toolbarActions}>
            <button className="button secondary"><FiTerminal /> Console</button>
            <button className="button"><AiOutlineCloudUpload /> Deploy preview</button>
          </div>
        </div>

        <div className={styles.editorShell}>
          <div className={styles.editorHeader}>
            <div className={styles.tab}>page.tsx</div>
            <div className={styles.tab} data-active>live-ide.tsx</div>
            <div className={styles.tab}>supabase.ts</div>
          </div>
          <div className={styles.codePane}>
            <pre>
              <code>
                {`const { data, error } = await supabase.from('projects').insert({ name: prompt })
if (error) throw new Error(error.message)
console.log('project ready', data)`}
              </code>
            </pre>
          </div>
          <div className={styles.logPane}>
            <div className={styles.logHeader}>
              <div className="badge"><FiTerminal /> Live logs</div>
              <span className="subtitle">Realtime feedback from AI + preview runtime</span>
            </div>
            <div className={styles.logs}>
              {logs.map((log) => (
                <motion.div key={log} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                  <span>{log}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
