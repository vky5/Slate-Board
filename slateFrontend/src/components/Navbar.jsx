import logo from '../../assets/logo.png'
import Sign from './Sign';

import './style/navbar.css';

function Navbar() {
  return (
    <div>
      <div className="header">
        <div className="setter">
            <img src={logo} className='logo'/>
            <div>
                <h2>Slate</h2>
                <h2>Board</h2>
            </div>
        </div>
        <Sign/>
      </div>
    </div>
  )
}

export default Navbar;
