import { render, screen } from '@testing-library/react';
import Title from '../index';

describe('Title Component', () => {
  it('renders title content correctly', () => {
    render(<Title level={1}>Test title</Title>);
    expect(screen.getByText('Test title')).toBeInTheDocument();
  });

  it('renders correct HTML element based on level', () => {
    render(<Title level={2}>H2 Title</Title>);
    const titleElement = screen.getByRole('heading', { level: 2 });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H2');
  });

  it('applies correct font size for different levels', () => {
    render(<Title level={1}>H1 Title</Title>);
    const titleElement = screen.getByText('H1 Title');
    expect(titleElement).toHaveStyle('font-size: 60px');
  });

  it('applies custom className', () => {
    render(<Title level={3} className="custom-title">Custom Title</Title>);
    const titleElement = screen.getByText('Custom Title');
    expect(titleElement).toHaveClass('custom-title');
  });

  it('applies margin bottom when mb prop is provided', () => {
    render(<Title level={4} mb={30}>Title with margin</Title>);
    const titleElement = screen.getByText('Title with margin');
    expect(titleElement).toHaveStyle('margin-bottom: 30px');
  });
});