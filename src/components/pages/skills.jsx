import React from 'react'
import './skills.scss'
import { motion } from "framer-motion";

function Skills() {


  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const skills = [
    {
      name: 'Styling',
      score: '85',
      color: "orange"
    },
    {
      name: 'Javascript',
      score: '85',
      color: "#ff4484"
    },
    {
      name: 'Angular',
      score: '90',
      color: "violet"
    },
    {
      name: 'React',
      score: '75',
      color: "green"
    },
    {
      name: 'NodeJs',
      score: '65',
      color: "#edd10b"
    },
    {
      name: 'Django',
      score: '50',
      color: "#16d5e8"
    }
  ]

  return (
    <motion.div variants={variants}>
      Skills
      <div>

        <div className="content-container">
          {skills.map((item, index) => (
            <div className="card">
              <div
                className="percent"
                style={{ '--clr': item.color, '--num': item.score + '%' }}
              >
                <div className="dot">🟢</div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className="number">
                  <h2>
                    {item.score}
                    <span>%</span>
                  </h2>
                  <p>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
