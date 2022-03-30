import React from "react";
import { motion } from 'framer-motion';

function AnimatedDiv({ children }) {
    return (
        <motion.div 
               style={{ position: 'absolute' }} 
               initial={{ x: 200, scale: 0.8, opacity: 0 }}
               animate={{ x: 0, opacity: 1, scale: 1 }}
               exit={{ x: -200, opacity: 0, scale: 0.8 }}
          >
              {children}
          </motion.div>
    )
}

export default AnimatedDiv;