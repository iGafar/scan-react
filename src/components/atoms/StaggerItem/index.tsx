import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IStaggerItemProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerItem(props: IStaggerItemProps) {
  const { children, className } = props;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}