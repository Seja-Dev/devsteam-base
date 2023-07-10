import styles from './navbar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '../logo/logo'

const NavBar = () => {
    return(
        <nav className={styles.navbar}>
            <Logo />
            <input />
            <BsCart4 size = {40}/>
        </nav >
    )
}

export default NavBar