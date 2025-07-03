import { motion } from 'framer-motion';
import { CSSProperties, ReactNode } from 'react';

interface IStaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function StaggerContainer(props: IStaggerContainerProps) {
  const { children, staggerDelay = 0.1, className, style } = props;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
