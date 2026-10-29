// Hand-built figures for "The Death of Hierarchical Navigation".
// Ported from the Claude Design export; colours come from the theme tokens.
import type { ReactElement } from 'react';
import type { FigureId } from '../../types';

export const FigureIntentHero = () => (
  <figure
    className="essay-fig-card"
    style={{
      padding: 'clamp(20px,4vw,36px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(24px,4vw,36px)',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '4px 0 8px' }}>
      <div
        style={{
          flex: '0 1 230px',
          minWidth: '0',
          padding: '18px 16px 56px',
          borderRadius: 'var(--radius-lg)',
          background: '#6F7182',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span style={{ marginBottom: '10px', font: '400 10px/1 var(--font-mono)', letterSpacing: '.22em', color: '#E4E5EC' }}>
          SETTINGS
        </span>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            padding: '9px 0',
            borderBottom: '1px solid rgba(255,255,255,.16)',
            font: '400 14px/1.2 var(--font-sans)',
          }}
        >
          <span>Settings</span>
          <span>›</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            padding: '9px 0 9px 14px',
            borderBottom: '1px solid rgba(255,255,255,.16)',
            font: '400 14px/1.2 var(--font-sans)',
          }}
        >
          <span>Workspaces</span>
          <span>›</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            padding: '9px 0 9px 28px',
            borderBottom: '1px solid rgba(255,255,255,.16)',
            font: '400 14px/1.2 var(--font-sans)',
          }}
        >
          <span>Environments</span>
          <span>›</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            padding: '9px 0 9px 42px',
            borderBottom: '1px solid rgba(255,255,255,.16)',
            font: '400 14px/1.2 var(--font-sans)',
          }}
        >
          <span>Roles</span>
          <span>›</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            padding: '9px 0 9px 56px',
            borderBottom: '1px solid rgba(255,255,255,.16)',
            font: '400 14px/1.2 var(--font-sans)',
          }}
        >
          <span>Permissions</span>
          <span>›</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            padding: '9px 0',
            borderBottom: '1px solid rgba(255,255,255,.16)',
            font: '400 14px/1.2 var(--font-sans)',
          }}
        >
          <span>Billing</span>
          <span>›</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            padding: '9px 0',
            borderBottom: '1px solid rgba(255,255,255,.16)',
            font: '400 14px/1.2 var(--font-sans)',
          }}
        >
          <span>Integrations</span>
          <span>›</span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            padding: '9px 0',
            borderBottom: '1px solid rgba(255,255,255,.16)',
            font: '400 14px/1.2 var(--font-sans)',
          }}
        >
          <span>Audit log</span>
          <span>›</span>
        </div>
      </div>
      <div
        style={{
          flex: '0 1 380px',
          minWidth: '250px',
          margin: '64px 0 0 -36px',
          position: 'relative',
          padding: '18px',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--card)',
          boxShadow: '0 24px 48px -12px rgba(0,26,52,.2),0 2px 6px rgba(0,26,52,.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 14px',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
          }}
        >
          <span style={{ color: 'var(--cyan)', fontSize: '14px' }}>✦</span>
          <span style={{ flex: '1', minWidth: '0', font: '400 14px/1.3 var(--font-sans)', color: 'var(--ink)' }}>
            Give Maya edit access to billing
          </span>
          <span
            style={{
              padding: '3px 6px',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              font: '400 10px/1 var(--font-mono)',
              color: 'var(--muted)',
            }}
          >
            ⌘K
          </span>
        </div>
        <span
          style={{ font: '500 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--cyan-text)' }}
        >
          Change · Maya Chen
        </span>
        <div
          style={{
            padding: '12px 14px',
            borderRadius: 'var(--radius)',
            background: 'var(--paper)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) auto auto',
            gap: '8px 14px',
            font: '400 14px/1.3 var(--font-sans)',
            color: 'var(--ink)',
          }}
        >
          <span>Billing</span>
          <s style={{ color: 'var(--muted)' }}>View</s>
          <strong style={{ fontWeight: '600', color: 'var(--violet)' }}>Edit</strong>
          <span>Invoices</span>
          <s style={{ color: 'var(--muted)' }}>None</s>
          <strong style={{ fontWeight: '600', color: 'var(--violet)' }}>View</strong>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              padding: '9px 0',
              borderBottom: '1px solid var(--line)',
              font: '400 14px/1.3 var(--font-sans)',
              color: 'var(--ink)',
            }}
          >
            <span>Notify Maya</span>
            <span
              style={{
                flex: 'none',
                width: '36px',
                height: '20px',
                padding: '2px',
                borderRadius: '999px',
                background: 'var(--violet)',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--card)' }}></span>
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              padding: '9px 0',
              borderBottom: '1px solid var(--line)',
              font: '400 14px/1.3 var(--font-sans)',
              color: 'var(--ink)',
            }}
          >
            <span>Expires in 30 days</span>
            <span
              style={{
                flex: 'none',
                width: '36px',
                height: '20px',
                padding: '2px',
                borderRadius: '999px',
                background: 'var(--line)',
                display: 'flex',
              }}
            >
              <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--card)' }}></span>
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              padding: '9px 0',
              font: '400 14px/1.3 var(--font-sans)',
              color: 'var(--ink)',
            }}
          >
            <span>Log to audit trail</span>
            <span
              style={{
                flex: 'none',
                width: '36px',
                height: '20px',
                padding: '2px',
                borderRadius: '999px',
                background: 'var(--violet)',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--card)' }}></span>
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <span
            style={{
              padding: '10px 16px',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              font: '600 14px/1 var(--font-sans)',
              color: 'var(--ink)',
            }}
          >
            Adjust
          </span>
          <span
            style={{
              padding: '10px 16px',
              borderRadius: 'var(--radius)',
              background: 'var(--violet)',
              font: '600 14px/1 var(--font-sans)',
              color: 'var(--paper)',
            }}
          >
            Approve
          </span>
        </div>
      </div>
    </div>
    <div style={{ paddingTop: '20px', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span style={{ font: '600 11px/1.3 var(--font-mono)', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--violet)' }}>
        The one idea to remember
      </span>
      <p
        style={{
          margin: '0',
          font: 'italic 400 clamp(1.3rem,2.6vw,1.7rem)/1.3 var(--font-display)',
          color: 'var(--ink)',
          textWrap: 'balance',
        }}
      >
        Structure doesn't vanish. It moves behind intent.
      </p>
    </div>
  </figure>
);

export const FigureFlow = () => (
  <figure
    className="essay-fig-card"
    style={{
      padding: 'clamp(20px,4vw,36px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(24px,4vw,32px)',
    }}
  >
    <h4
      style={{
        margin: '0',
        font: '600 clamp(1.4rem,2.8vw,1.9rem)/1.15 var(--font-display)',
        letterSpacing: '-.02em',
        color: 'var(--ink)',
        textWrap: 'balance',
      }}
    >
      Five menus to find one setting, <span style={{ color: 'var(--violet)' }}>or one request to finish the job</span>
    </h4>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 14px' }}>
        <span style={{ font: '600 11px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>
          Before · Navigate the sitemap
        </span>
        <span style={{ font: '400 14px/1.4 var(--font-sans)', color: 'var(--muted)' }}>The user carries the map</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            flex: '1 1 84px',
            padding: '14px 8px',
            textAlign: 'center',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            background: 'var(--paper-2)',
            font: '400 14px/1.2 var(--font-sans)',
            color: 'var(--ink)',
          }}
        >
          Settings
        </span>
        <span style={{ flex: 'none', color: 'var(--cyan)' }}>→</span>
        <span
          style={{
            flex: '1 1 84px',
            padding: '14px 8px',
            textAlign: 'center',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            background: 'var(--paper-2)',
            font: '400 14px/1.2 var(--font-sans)',
            color: 'var(--ink)',
          }}
        >
          Workspaces
        </span>
        <span style={{ flex: 'none', color: 'var(--cyan)' }}>→</span>
        <span
          style={{
            flex: '1 1 84px',
            padding: '14px 8px',
            textAlign: 'center',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            background: 'var(--paper-2)',
            font: '400 14px/1.2 var(--font-sans)',
            color: 'var(--ink)',
          }}
        >
          Environments
        </span>
        <span style={{ flex: 'none', color: 'var(--cyan)' }}>→</span>
        <span
          style={{
            flex: '1 1 84px',
            padding: '14px 8px',
            textAlign: 'center',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            background: 'var(--paper-2)',
            font: '400 14px/1.2 var(--font-sans)',
            color: 'var(--ink)',
          }}
        >
          Roles
        </span>
        <span style={{ flex: 'none', color: 'var(--cyan)' }}>→</span>
        <span
          style={{
            flex: '1 1 84px',
            padding: '14px 8px',
            textAlign: 'center',
            border: '1px dashed var(--muted)',
            borderRadius: 'var(--radius)',
            background: 'var(--card)',
            font: '400 14px/1.2 var(--font-sans)',
            color: 'var(--ink)',
          }}
        >
          Permissions
        </span>
      </div>
      <span style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--muted)' }}>
        Four levels deep before reaching the one setting they came to change.
      </span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '4px 14px' }}>
        <span
          style={{ font: '600 11px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--cyan-text)' }}
        >
          After · State the intent
        </span>
        <span style={{ font: '400 14px/1.4 var(--font-sans)', color: 'var(--muted)' }}>The system carries the map</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
        <div
          style={{
            flex: '1 1 120px',
            alignSelf: 'stretch',
            padding: '14px 16px',
            border: '1px solid color-mix(in srgb,var(--cyan) 20%,transparent)',
            borderRadius: 'var(--radius)',
            background: 'color-mix(in srgb,var(--cyan) 6%,var(--card))',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <span style={{ font: '400 11px/1.3 var(--font-mono)', color: 'var(--cyan-text)' }}>01</span>
          <span style={{ font: '600 17px/1.2 var(--font-display)', color: 'var(--ink)' }}>State the outcome</span>
          <span style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--ink-2)' }}>A hotkey or a short query</span>
        </div>
        <span style={{ flex: 'none', color: 'var(--cyan)' }}>→</span>
        <div
          style={{
            flex: '1 1 120px',
            alignSelf: 'stretch',
            padding: '14px 16px',
            border: '1px solid color-mix(in srgb,var(--cyan) 20%,transparent)',
            borderRadius: 'var(--radius)',
            background: 'color-mix(in srgb,var(--cyan) 6%,var(--card))',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <span style={{ font: '400 11px/1.3 var(--font-mono)', color: 'var(--cyan-text)' }}>02</span>
          <span style={{ font: '600 17px/1.2 var(--font-display)', color: 'var(--ink)' }}>System assembles</span>
          <span style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--ink-2)' }}>Checks permissions, fetches data</span>
        </div>
        <span style={{ flex: 'none', color: 'var(--cyan)' }}>→</span>
        <div
          style={{
            flex: '1 1 120px',
            alignSelf: 'stretch',
            padding: '14px 16px',
            borderRadius: 'var(--radius)',
            background: 'var(--violet)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <span style={{ font: '400 11px/1.3 var(--font-mono)', color: 'color-mix(in srgb,var(--paper) 80%,var(--violet))' }}>03</span>
          <span style={{ font: '600 17px/1.2 var(--font-display)', color: 'var(--paper)' }}>You decide</span>
          <span style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--paper)' }}>Review the diff, approve</span>
        </div>
        <span style={{ flex: 'none', color: 'var(--cyan)' }}>→</span>
        <div
          style={{
            flex: '1 1 120px',
            alignSelf: 'stretch',
            padding: '14px 16px',
            border: '1px solid color-mix(in srgb,var(--cyan) 20%,transparent)',
            borderRadius: 'var(--radius)',
            background: 'color-mix(in srgb,var(--cyan) 6%,var(--card))',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <span style={{ font: '400 11px/1.3 var(--font-mono)', color: 'var(--cyan-text)' }}>04</span>
          <span style={{ font: '600 17px/1.2 var(--font-display)', color: 'var(--ink)' }}>Saved and cleared</span>
          <span style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--ink-2)' }}>The interface goes away</span>
        </div>
      </div>
    </div>
  </figure>
);

export const FigureParadigms = () => (
  <figure
    className="essay-fig-card"
    style={{
      padding: 'clamp(20px,4vw,36px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(24px,4vw,32px)',
    }}
  >
    <h4
      style={{
        margin: '0',
        font: '600 clamp(1.4rem,2.8vw,1.9rem)/1.15 var(--font-display)',
        letterSpacing: '-.02em',
        color: 'var(--ink)',
        textWrap: 'balance',
      }}
    >
      Only the third UI paradigm in computing history, <span style={{ color: 'var(--violet)' }}>and the first to reverse who drives</span>
    </h4>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ font: '900 clamp(2rem,4.4vw,2.6rem)/1 var(--font-display)', color: 'var(--muted)' }}>~1945</span>
          <span style={{ flex: '1', height: '1px', background: 'var(--line)' }}></span>
        </div>
        <div
          style={{
            flex: '1',
            padding: '20px',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <span style={{ marginBottom: '6px', font: '600 19px/1.2 var(--font-display)', color: 'var(--ink)' }}>Batch processing</span>
          <span
            style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--cyan-text)' }}
          >
            Who decides the steps
          </span>
          <span style={{ marginBottom: '6px', font: '400 14px/1.5 var(--font-sans)', color: 'var(--ink-2)' }}>
            The user writes the whole workflow up front
          </span>
          <span
            style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--cyan-text)' }}
          >
            Navigation's role
          </span>
          <span style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--ink-2)' }}>None</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ font: '900 clamp(2rem,4.4vw,2.6rem)/1 var(--font-display)', color: 'var(--muted)' }}>~1964</span>
          <span style={{ flex: '1', height: '1px', background: 'var(--line)' }}></span>
        </div>
        <div
          style={{
            flex: '1',
            padding: '20px',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <span style={{ marginBottom: '6px', font: '600 19px/1.2 var(--font-display)', color: 'var(--ink)' }}>
            Command-based (CLI, then GUI)
          </span>
          <span
            style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--cyan-text)' }}
          >
            Who decides the steps
          </span>
          <span style={{ marginBottom: '6px', font: '400 14px/1.5 var(--font-sans)', color: 'var(--ink-2)' }}>
            The user issues one command at a time
          </span>
          <span
            style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--cyan-text)' }}
          >
            Navigation's role
          </span>
          <span style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--ink-2)' }}>Central: the user must find each command</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ font: '900 clamp(2rem,4.4vw,2.6rem)/1 var(--font-display)', color: 'var(--violet)' }}>2023 →</span>
          <span style={{ flex: '1', height: '1px', background: 'var(--line)' }}></span>
        </div>
        <div
          style={{
            flex: '1',
            padding: '20px',
            border: '1.5px solid var(--violet)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--violet-wash)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <span style={{ marginBottom: '6px', font: '600 19px/1.2 var(--font-display)', color: 'var(--ink)' }}>
            Intent-based outcome specification
          </span>
          <span
            style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--cyan-text)' }}
          >
            Who decides the steps
          </span>
          <span style={{ marginBottom: '6px', font: '400 14px/1.5 var(--font-sans)', color: 'var(--ink-2)' }}>
            The user states the outcome; the system works out the steps
          </span>
          <span
            style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--cyan-text)' }}
          >
            Navigation's role
          </span>
          <span style={{ font: '600 14px/1.5 var(--font-sans)', color: 'var(--violet)' }}>Optional: a fallback and an overview</span>
        </div>
      </div>
    </div>
    <span style={{ font: '400 11px/1.5 var(--font-mono)', color: 'var(--muted)' }}>
      Framework: Jakob Nielsen, “AI Is First New UI Paradigm in 60 Years” (2023)
    </span>
  </figure>
);

export const FigureCanvas = () => (
  <figure
    className="essay-fig-card"
    style={{
      padding: 'clamp(20px,4vw,36px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(24px,4vw,32px)',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h4
        style={{
          margin: '0',
          font: '600 clamp(1.4rem,2.8vw,1.9rem)/1.15 var(--font-display)',
          letterSpacing: '-.02em',
          color: 'var(--ink)',
          textWrap: 'balance',
        }}
      >
        The system finds the path; <span style={{ color: 'var(--violet)' }}>the person only makes the call</span>
      </h4>
      <p style={{ margin: '0', font: '400 15px/1.55 var(--font-sans)', color: 'var(--ink-2)', textWrap: 'pretty' }}>
        Everything before and after the decision is the system’s job. The approve step stays explicit and logged.
      </p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', columnGap: '12px' }}>
      <div
        style={{
          gridColumn: '1',
          gridRow: '1 / 12',
          borderRadius: 'var(--radius-lg)',
          background: 'color-mix(in srgb,var(--muted) 8%,var(--paper))',
        }}
      ></div>
      <div
        style={{
          gridColumn: '2',
          gridRow: '1 / 12',
          borderRadius: 'var(--radius-lg)',
          background: 'color-mix(in srgb,var(--muted) 8%,var(--paper))',
        }}
      ></div>
      <span
        style={{
          gridColumn: '1',
          gridRow: '1',
          padding: '18px 16px 12px',
          font: '600 11px/1.3 var(--font-mono)',
          letterSpacing: '.22em',
          textTransform: 'uppercase',
          color: 'var(--violet)',
        }}
      >
        The person
      </span>
      <span
        style={{
          gridColumn: '2',
          gridRow: '1',
          padding: '18px 16px 12px',
          font: '600 11px/1.3 var(--font-mono)',
          letterSpacing: '.22em',
          textTransform: 'uppercase',
          color: 'var(--cyan-text)',
        }}
      >
        The system
      </span>
      <div
        style={{
          gridColumn: '1',
          gridRow: '2',
          margin: '0 14px',
          padding: '14px 16px',
          border: '1.5px solid var(--violet)',
          borderRadius: 'var(--radius)',
          background: 'var(--violet-wash)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <span style={{ font: '400 11px/1.3 var(--font-mono)', color: 'var(--violet)' }}>01</span>
        <span style={{ font: '600 18px/1.2 var(--font-display)', color: 'var(--ink)' }}>State intent</span>
        <span style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--ink-2)' }}>Hotkey or short query</span>
      </div>
      <div style={{ gridColumn: '1 / -1', gridRow: '3', position: 'relative', height: '32px' }}>
        <div
          style={{
            position: 'absolute',
            left: 'calc(25% - 3px)',
            right: 'calc(25% - 3px)',
            top: '0',
            height: '16px',
            borderLeft: '1.5px solid var(--cyan)',
            borderBottom: '1.5px solid var(--cyan)',
          }}
        ></div>
        <div
          style={{ position: 'absolute', left: 'calc(75% + 2px)', top: '16px', height: '16px', borderLeft: '1.5px solid var(--cyan)' }}
        ></div>
        <span
          style={{
            position: 'absolute',
            left: 'calc(75% + 3px)',
            bottom: '0',
            transform: 'translateX(-50%)',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '7px solid var(--cyan)',
          }}
        ></span>
      </div>
      <div
        style={{
          gridColumn: '2',
          gridRow: '4',
          margin: '0 14px',
          padding: '14px 16px',
          border: '1.5px solid var(--cyan)',
          borderRadius: 'var(--radius)',
          background: 'color-mix(in srgb,var(--cyan) 6%,var(--card))',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <span style={{ font: '400 11px/1.3 var(--font-mono)', color: 'var(--cyan-text)' }}>02</span>
        <span style={{ font: '600 18px/1.2 var(--font-display)', color: 'var(--ink)' }}>Check, fetch</span>
        <span style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--ink-2)' }}>Permissions and the relevant API</span>
      </div>
      <div style={{ gridColumn: '1 / -1', gridRow: '5', position: 'relative', height: '32px' }}>
        <div
          style={{ position: 'absolute', left: 'calc(75% + 2px)', top: '0', height: '32px', borderLeft: '1.5px solid var(--cyan)' }}
        ></div>
        <span
          style={{
            position: 'absolute',
            left: 'calc(75% + 3px)',
            bottom: '0',
            transform: 'translateX(-50%)',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '7px solid var(--cyan)',
          }}
        ></span>
      </div>
      <div
        style={{
          gridColumn: '2',
          gridRow: '6',
          margin: '0 14px',
          padding: '14px 16px',
          border: '1.5px solid var(--cyan)',
          borderRadius: 'var(--radius)',
          background: 'color-mix(in srgb,var(--cyan) 6%,var(--card))',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <span style={{ font: '400 11px/1.3 var(--font-mono)', color: 'var(--cyan-text)' }}>03</span>
        <span style={{ font: '600 18px/1.2 var(--font-display)', color: 'var(--ink)' }}>Build surface</span>
        <span style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--ink-2)' }}>Only the controls this job needs</span>
      </div>
      <div style={{ gridColumn: '1 / -1', gridRow: '7', position: 'relative', height: '32px' }}>
        <div
          style={{
            position: 'absolute',
            left: 'calc(25% - 3px)',
            right: 'calc(25% - 3px)',
            top: '0',
            height: '16px',
            borderRight: '1.5px solid var(--cyan)',
            borderBottom: '1.5px solid var(--cyan)',
          }}
        ></div>
        <div
          style={{ position: 'absolute', left: 'calc(25% - 4px)', top: '16px', height: '16px', borderLeft: '1.5px solid var(--cyan)' }}
        ></div>
        <span
          style={{
            position: 'absolute',
            left: 'calc(25% - 3px)',
            bottom: '0',
            transform: 'translateX(-50%)',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '7px solid var(--cyan)',
          }}
        ></span>
      </div>
      <div
        style={{
          gridColumn: '1',
          gridRow: '8',
          margin: '0 14px',
          padding: '14px 16px',
          borderRadius: 'var(--radius)',
          background: 'var(--violet)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <span style={{ font: '400 11px/1.3 var(--font-mono)', color: 'color-mix(in srgb,var(--paper) 80%,var(--violet))' }}>04</span>
        <span style={{ font: '600 18px/1.2 var(--font-display)', color: 'var(--paper)' }}>Make the call</span>
        <span style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--paper)' }}>Approve, adjust or cancel</span>
      </div>
      <div style={{ gridColumn: '1 / -1', gridRow: '9', position: 'relative', height: '32px' }}>
        <div
          style={{
            position: 'absolute',
            left: 'calc(25% - 3px)',
            right: 'calc(25% - 3px)',
            top: '0',
            height: '16px',
            borderLeft: '1.5px solid var(--cyan)',
            borderBottom: '1.5px solid var(--cyan)',
          }}
        ></div>
        <div
          style={{ position: 'absolute', left: 'calc(75% + 2px)', top: '16px', height: '16px', borderLeft: '1.5px solid var(--cyan)' }}
        ></div>
        <span
          style={{
            position: 'absolute',
            left: 'calc(75% + 3px)',
            bottom: '0',
            transform: 'translateX(-50%)',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '7px solid var(--cyan)',
          }}
        ></span>
      </div>
      <div
        style={{
          gridColumn: '2',
          gridRow: '10',
          margin: '0 14px',
          padding: '14px 16px',
          border: '1.5px solid var(--cyan)',
          borderRadius: 'var(--radius)',
          background: 'color-mix(in srgb,var(--cyan) 6%,var(--card))',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <span style={{ font: '400 11px/1.3 var(--font-mono)', color: 'var(--cyan-text)' }}>05</span>
        <span style={{ font: '600 18px/1.2 var(--font-display)', color: 'var(--ink)' }}>Write, clear</span>
        <span style={{ font: '400 13px/1.4 var(--font-sans)', color: 'var(--ink-2)' }}>Saved; the interface goes away</span>
      </div>
      <div style={{ gridColumn: '1 / -1', gridRow: '11', height: '16px' }}></div>
    </div>
  </figure>
);

export const FigurePatterns = () => (
  <figure
    className="essay-fig-card"
    style={{
      padding: 'clamp(20px,4vw,36px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(24px,4vw,32px)',
    }}
  >
    <h4
      style={{
        margin: '0',
        font: '600 clamp(1.4rem,2.8vw,1.9rem)/1.15 var(--font-display)',
        letterSpacing: '-.02em',
        color: 'var(--ink)',
        textWrap: 'balance',
      }}
    >
      Five patterns already shipping, <span style={{ color: 'var(--violet)' }}>from finding the screen to delegating the job</span>
    </h4>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '20px minmax(0,1fr)', gap: '16px', alignItems: 'center' }}>
        <span style={{ justifySelf: 'center', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--violet)' }}></span>
        <span style={{ font: '500 11px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--violet)' }}>
          Person drives every step
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '20px minmax(0,1fr)', gap: '16px' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <span style={{ position: 'absolute', top: '0', bottom: '0', width: '2px', background: 'var(--violet)' }}></span>
          <span
            style={{
              position: 'relative',
              marginTop: '34px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '2px solid var(--violet)',
              background: 'var(--paper)',
            }}
          ></span>
        </div>
        <div
          style={{
            margin: '8px 0',
            padding: '18px 20px',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))',
            gap: '12px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span
              style={{
                font: '600 10px/1.3 var(--font-mono)',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--cyan-text)',
              }}
            >
              Least shift
            </span>
            <span style={{ font: '600 19px/1.2 var(--font-display)', color: 'var(--ink)' }}>Adaptive disclosure</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{ font: '400 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}
            >
              You
            </span>
            <span style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-2)' }}>
              Use the app as usual; it reshapes around your role
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{ font: '400 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}
            >
              For example
            </span>
            <span style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-2)' }}>Microsoft 365 Copilot</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '20px minmax(0,1fr)', gap: '16px' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <span
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'color-mix(in srgb,var(--violet) 75%,var(--cyan))',
            }}
          ></span>
          <span
            style={{
              position: 'relative',
              marginTop: '34px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '2px solid color-mix(in srgb,var(--violet) 75%,var(--cyan))',
              background: 'var(--paper)',
            }}
          ></span>
        </div>
        <div
          style={{
            margin: '8px 0',
            padding: '18px 20px',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))',
            gap: '12px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span
              style={{
                font: '600 10px/1.3 var(--font-mono)',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--cyan-text)',
              }}
            >
              Start here
            </span>
            <span style={{ font: '600 19px/1.2 var(--font-display)', color: 'var(--ink)' }}>Command palette</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{ font: '400 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}
            >
              You
            </span>
            <span style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-2)' }}>Press Cmd+K and type a few letters</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{ font: '400 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}
            >
              For example
            </span>
            <span style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-2)' }}>Linear, Superhuman, Slack</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '20px minmax(0,1fr)', gap: '16px' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <span
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'color-mix(in srgb,var(--violet) 50%,var(--cyan))',
            }}
          ></span>
          <span
            style={{
              position: 'relative',
              marginTop: '34px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '2px solid color-mix(in srgb,var(--violet) 50%,var(--cyan))',
              background: 'var(--paper)',
            }}
          ></span>
        </div>
        <div
          style={{
            margin: '8px 0',
            padding: '18px 20px',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))',
            gap: '12px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span
              style={{
                font: '600 10px/1.3 var(--font-mono)',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--cyan-text)',
              }}
            >
              In the chat
            </span>
            <span style={{ font: '600 19px/1.2 var(--font-display)', color: 'var(--ink)' }}>Apps inside the assistant</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{ font: '400 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}
            >
              You
            </span>
            <span style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-2)' }}>Ask; a real form or table appears</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{ font: '400 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}
            >
              For example
            </span>
            <span style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-2)' }}>MCP Apps in Claude and ChatGPT</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '20px minmax(0,1fr)', gap: '16px' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <span
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'color-mix(in srgb,var(--violet) 25%,var(--cyan))',
            }}
          ></span>
          <span
            style={{
              position: 'relative',
              marginTop: '34px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: 'var(--violet)',
            }}
          ></span>
        </div>
        <div
          style={{
            margin: '8px 0',
            padding: '18px 20px',
            border: '1.5px solid var(--violet)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--violet-wash)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))',
            gap: '12px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span
              style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--violet)' }}
            >
              The core idea
            </span>
            <span style={{ font: '600 19px/1.2 var(--font-display)', color: 'var(--ink)' }}>Intent canvas</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{ font: '400 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}
            >
              You
            </span>
            <span style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-2)' }}>
              State a goal; get a surface built for that job
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{ font: '400 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}
            >
              For example
            </span>
            <span style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-2)' }}>SAP Joule generative UI</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '20px minmax(0,1fr)', gap: '16px' }}>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <span style={{ position: 'absolute', top: '0', bottom: '0', width: '2px', background: 'var(--cyan)' }}></span>
          <span
            style={{
              position: 'relative',
              marginTop: '34px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '2px solid var(--cyan)',
              background: 'var(--paper)',
            }}
          ></span>
        </div>
        <div
          style={{
            margin: '8px 0',
            padding: '18px 20px',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))',
            gap: '12px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span
              style={{
                font: '600 10px/1.3 var(--font-mono)',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--cyan-text)',
              }}
            >
              No screen
            </span>
            <span style={{ font: '600 19px/1.2 var(--font-display)', color: 'var(--ink)' }}>Agent acts directly</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{ font: '400 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}
            >
              You
            </span>
            <span style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-2)' }}>Delegate the job, then review it</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{ font: '400 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}
            >
              For example
            </span>
            <span style={{ font: '400 14px/1.45 var(--font-sans)', color: 'var(--ink-2)' }}>Agents across CRM and ERP</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '20px minmax(0,1fr)', gap: '16px', alignItems: 'center' }}>
        <span
          style={{
            justifySelf: 'center',
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '9px solid var(--cyan)',
          }}
        ></span>
        <span
          style={{ font: '500 11px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--cyan-text)' }}
        >
          System drives · person approves
        </span>
      </div>
    </div>
    <span style={{ font: '400 11px/1.5 var(--font-mono)', color: 'var(--muted)' }}>
      Ordered by how much of the path the system owns; not to scale.
    </span>
  </figure>
);

export const FigureQuadrant = () => (
  <figure
    className="essay-fig-card"
    style={{
      padding: 'clamp(20px,4vw,36px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'clamp(24px,4vw,32px)',
    }}
  >
    <h4
      style={{
        margin: '0',
        font: '600 clamp(1.4rem,2.8vw,1.9rem)/1.15 var(--font-display)',
        letterSpacing: '-.02em',
        color: 'var(--ink)',
        textWrap: 'balance',
      }}
    >
      Navigation still wins for daily habits; <span style={{ color: 'var(--violet)' }}>intent wins for rare tasks</span>
    </h4>
    <div style={{ display: 'grid', gridTemplateColumns: '20px minmax(0,1fr)', gap: '12px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <span
          style={{ borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderBottom: '8px solid var(--muted)' }}
        ></span>
        <span style={{ flex: '1', width: '1.5px', marginTop: '-10px', background: 'var(--muted)' }}></span>
        <span
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            font: '400 10px/1 var(--font-mono)',
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            whiteSpace: 'nowrap',
          }}
        >
          Stakes and need for audit
        </span>
        <span style={{ flex: '1', width: '1.5px', background: 'var(--muted)' }}></span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: '12px' }}>
        <div
          style={{
            minHeight: '150px',
            padding: 'clamp(16px,2.6vw,24px)',
            border: '1.5px solid var(--violet)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--violet-wash)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <span
            style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--violet)' }}
          >
            Rare · High stakes
          </span>
          <span style={{ font: '600 clamp(1.05rem,2vw,1.3rem)/1.2 var(--font-display)', color: 'var(--ink)' }}>
            Intent canvas, explicit approve
          </span>
          <span style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--ink-2)' }}>
            Role changes, vendor onboarding, pricing exceptions
          </span>
        </div>
        <div
          style={{
            minHeight: '150px',
            padding: 'clamp(16px,2.6vw,24px)',
            border: '1px solid color-mix(in srgb,var(--cyan) 20%,transparent)',
            borderRadius: 'var(--radius-lg)',
            background: 'color-mix(in srgb,var(--cyan) 6%,var(--card))',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <span
            style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--cyan-text)' }}
          >
            Daily · High stakes
          </span>
          <span style={{ font: '600 clamp(1.05rem,2vw,1.3rem)/1.2 var(--font-display)', color: 'var(--ink)' }}>
            Agent drafts, a person approves
          </span>
          <span style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--ink-2)' }}>
            Refunds, invoices, payroll runs. Keep the audit trail explicit
          </span>
        </div>
        <div
          style={{
            minHeight: '150px',
            padding: 'clamp(16px,2.6vw,24px)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--card)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <span style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Rare · Low stakes
          </span>
          <span style={{ font: '600 clamp(1.05rem,2vw,1.3rem)/1.2 var(--font-display)', color: 'var(--ink)' }}>
            Just ask: palette or assistant
          </span>
          <span style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--ink-2)' }}>
            The settings people hunt for, like “unpaid invoices over 30 days”
          </span>
        </div>
        <div
          style={{
            minHeight: '150px',
            padding: 'clamp(16px,2.6vw,24px)',
            borderRadius: 'var(--radius-lg)',
            background: 'color-mix(in srgb,var(--muted) 10%,var(--paper))',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <span style={{ font: '600 10px/1.3 var(--font-mono)', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            Daily · Low stakes
          </span>
          <span style={{ font: '600 clamp(1.05rem,2vw,1.3rem)/1.2 var(--font-display)', color: 'var(--ink)' }}>
            Keep visible navigation
          </span>
          <span style={{ font: '400 14px/1.5 var(--font-sans)', color: 'var(--ink-2)' }}>
            The three-click daily routine. A fixed place beats describing it
          </span>
        </div>
      </div>
      <span></span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ flex: '1', height: '1.5px', background: 'var(--muted)' }}></span>
          <span
            style={{ borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid var(--muted)' }}
          ></span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            font: '400 10px/1.3 var(--font-mono)',
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          <span>Rare</span>
          <span style={{ textAlign: 'center' }}>How often the task happens</span>
          <span>Daily</span>
        </div>
      </div>
    </div>
  </figure>
);

export const figures: Record<FigureId, () => ReactElement> = {
  hero: FigureIntentHero,
  flow: FigureFlow,
  paradigms: FigureParadigms,
  canvas: FigureCanvas,
  patterns: FigurePatterns,
  quadrant: FigureQuadrant,
};
