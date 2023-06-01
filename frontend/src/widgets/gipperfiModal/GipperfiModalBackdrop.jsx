import React from "react";
import {motion} from 'framer-motion'
function GipperfiModalBackdrop({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='w-[100%] lg:w-1/2 fixed top-0 left-0 h-[100vh] flex justify-center backdrop-blur-sm z-50'
    >
      {children}
    </motion.div>
  );
}

export default GipperfiModalBackdrop;
