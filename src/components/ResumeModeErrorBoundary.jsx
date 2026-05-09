import { Component } from 'react';
import { resumeContent } from '../data/resumeContent';

const ui = resumeContent.ui;

export default class ResumeModeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className='section min-h-[60vh] flex items-center justify-center'>
          <div className='max-w-2xl rounded-[1.25rem] border border-[color:var(--dim)] bg-[color:var(--void)] p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.24)]'>
            <div className='section-kicker'>{ui.errorBoundary.title}</div>
            <p className='text-[0.9rem] leading-7 text-[var(--muted)]'>{ui.errorBoundary.message}</p>
            <p className='mt-3 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--gold)]'>
              {ui.errorBoundary.actionHint}
            </p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}