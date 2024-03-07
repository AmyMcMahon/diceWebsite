import React, { Component, ErrorInfo, ReactNode } from 'react';

interface MyErrorBoundaryProps {
  children: ReactNode;
}

interface MyErrorBoundaryState {
  hasError: boolean;
}

class MyErrorBoundary extends Component<MyErrorBoundaryProps, MyErrorBoundaryState> {
  constructor(props: MyErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error or handle it in a way that makes sense for your application
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render a fallback UI here
      return <div>Something went wrong!</div>;
    }

    // Render the children components
    return this.props.children;
  }
}

export default MyErrorBoundary;
