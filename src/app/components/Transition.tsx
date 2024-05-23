// components/Layout.tsx
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const pageTransition: Variants = {
  
    initial: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.4 } // Transition inside initial
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 } // Transition inside animate
      },
      exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.4 } // Transition inside exit
      }
};

interface LayoutProps {
  children: ReactNode;
}

const Transition: React.FC<LayoutProps> = ({ children }) => {
  const router = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
