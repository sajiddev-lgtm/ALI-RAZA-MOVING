import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught application error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#0F172A', color: '#F8FAFC', minHeight: '100vh', fontFamily: 'sans-serif' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto', background: '#1E293B', padding: '32px', borderRadius: '16px', border: '1px solid #334155' }}>
            <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#EAB308', marginBottom: '12px' }}>
              Ali Raza International Trade SPC
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '14px', marginBottom: '20px' }}>
              An unexpected render error occurred. Please refresh or click the button below to recover.
            </p>
            <pre style={{ background: '#0F172A', padding: '16px', borderRadius: '8px', fontSize: '12px', overflowX: 'auto', color: '#F1F5F9', marginBottom: '24px' }}>
              {this.state.error?.message || 'Unknown error'}
            </pre>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
              style={{ background: '#EAB308', color: '#0F172A', fontWeight: 'bold', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
            >
              Reset Cache & Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

