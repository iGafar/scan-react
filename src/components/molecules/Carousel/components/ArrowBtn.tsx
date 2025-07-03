import { CSSProperties, ReactNode } from 'react';

interface ArrowProps {
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export default function Arrow(props: ArrowProps) {
  const { onClick, className, style, children } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      style={style}
      tabIndex={0}
    >
      {children}
    </button>
  );
}
