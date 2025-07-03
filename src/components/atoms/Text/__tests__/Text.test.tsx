import { render, screen } from '@testing-library/react';
import Text from '../index';

describe('Text Component', () => {
  it('renders text content correctly', () => {
    render(<Text>Test text content</Text>);
    expect(screen.getByText('Test text content')).toBeInTheDocument();
  });

  it('applies correct size styling', () => {
    render(<Text size="small">Small text</Text>);
    const textElement = screen.getByText('Small text');
    expect(textElement).toHaveStyle('font-size: 16px');
  });

  it('applies center alignment when textCenter is true', () => {
    render(<Text textCenter>Centered text</Text>);
    const textElement = screen.getByText('Centered text');
    expect(textElement).toHaveStyle('text-align: center');
  });

  it('applies custom className', () => {
    render(<Text className="custom-class">Text with class</Text>);
    const textElement = screen.getByText('Text with class');
    expect(textElement).toHaveClass('custom-class');
  });

  it('applies margin bottom when mb prop is provided', () => {
    render(<Text mb={20}>Text with margin</Text>);
    const textElement = screen.getByText('Text with margin');
    expect(textElement).toHaveStyle('margin-bottom: 20px');
  });
});