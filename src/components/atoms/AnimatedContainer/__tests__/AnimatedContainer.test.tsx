import { render, screen } from '@testing-library/react';
import AnimatedContainer from '../index';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('AnimatedContainer Component', () => {
  it('renders children correctly', () => {
    render(
      <AnimatedContainer>
        <div>Test content</div>
      </AnimatedContainer>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <AnimatedContainer className="custom-class">
        <div>Test content</div>
      </AnimatedContainer>
    );

    const container = screen.getByText('Test content').parentElement;
    expect(container).toHaveClass('custom-class');
  });
});