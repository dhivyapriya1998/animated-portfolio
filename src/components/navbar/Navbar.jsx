import './Navbar.scss';
import {motion} from 'framer-motion'
import Sidebar from '../sidebar/sidebar';

function Navbar() {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transistion={{duration:0.5}}></motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" srcset=""/>
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" srcset=""/>
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" srcset=""/>
          </a>
          <a href="#">
            <img src="/dribble.png" alt="" srcset=""/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
