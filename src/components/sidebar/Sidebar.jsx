import './sidebar.scss';
import Links from './Links/Links';
import ToggleButton from './ToggleButton/ToggleButton';
import { useState } from 'react';
import { motion } from 'framer-motion';


function Sidebar() {

  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        stiffness: 20,
        type: "spring"
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        stiffness: 400,
        damping: 40,
        type: "spring"
      }
    }
  }
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div >
  )

}
export default Sidebar
