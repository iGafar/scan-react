import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface IAnimatedContainerProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const defaultVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function AnimatedContainer(props: IAnimatedContainerProps) {
  const { 
    children, 
    delay = 0, 
    duration = 0.6, 
    className,
    variants = defaultVariants,
    ...motionProps 
  } = props;

  const customVariants = {
    ...variants,
    visible: {
      ...variants.visible,
      transition: {
        ...variants.visible.transition,
        duration,
        delay,
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={customVariants}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}