import { motion, useInView } from 'framer-motion';
import { CSSProperties, ReactNode, useRef } from 'react';

interface IFadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
	style?: CSSProperties;
}

export default function FadeInOnScroll(props: IFadeInOnScrollProps) {
  const { 
    children, 
    delay = 0, 
    duration = 0.8, 
    className,
    threshold = 0.3,
		style
  } = props;
  
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    amount: threshold 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
			style={style}
    >
      {children}
    </motion.div>
  );
}