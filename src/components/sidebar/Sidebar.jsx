import './sidebar.scss';
import Links from './Links/Links';
import ToggleButton from './ToggleButton/ToggleButton';

function Sidebar() {
  return (
    <div className="sidebar">
      sidebar
      <div className="bg">
          <Links />
      </div>
        <ToggleButton />
    </div >
  )
      
}
export default Sidebar
