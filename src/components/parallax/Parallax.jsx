import './Parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Experience from '../pages/experience';

function Parallax({ type }) {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const YText = useTransform(scrollYProgress, [0, 1], ['0%', '500%'])
  const YBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="parallax"
      ref={ref}
      style={{
        background:
          type === 'services'
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradient(180deg,#111132,#505064)"
      }}
    >
      <motion.h1 className="space" style={{ y: YText }}>
        {
          type === "services" ? "Education & Experience" : "What We Did?"
        }
      </motion.h1>
      <div className="space">
        {type === "services" && <Experience />}
      </div>

      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: YBg, backgroundImage: `url(${type === 'services' ? '/planets.png' : '/sun.png'})` }} className="planets"></motion.div>
      <motion.div style={{ x: YBg }} className="stars"></motion.div>

    </div>
  )
}

export default Parallax
