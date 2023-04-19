import { Link } from 'react-router-dom';
import './Navbar.css';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Navbar = () => {

    return (
            <div className='navbar'>
                <div className='navbarWrapper'>
                    <div className='left'>
                        <Link to="/" className='text-link'>
                        <span className='logo'>StyleMaker</span>
                        </Link>
                    </div>
                    <div className='menu'>
                        <Link to="/login" className='text-link'>
                            <LoginIcon />
                        </Link>
                        <LogoutIcon />
                        <AssignmentIcon />
                        <Link to="/mypage" className='text-link'>
                            <SettingsIcon />
                        </Link>
                    </div>
                </div>
            </div>
        
    )
}

export default Navbar;