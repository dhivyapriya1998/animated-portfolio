import { motion } from "framer-motion"


const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  close: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  }
}

function Links() {
  const items = ["Home", "experience", "Our Expertise", "Service", "DATA + AI", "Projects", "Rewards"]
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, i) => {
        return (
          <motion.a
            href={`#${item}`}
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        )
      })}
    </motion.div>
  )
}

export default Links
