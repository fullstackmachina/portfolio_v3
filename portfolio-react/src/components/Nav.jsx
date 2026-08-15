import {useState} from 'react';
import style from  "./Nav.module.css"

const Nav = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    return(
        <nav >
            <div>Roxanne Perron, Développeuse Fullstack</div>
            <ul className={style.navLinks} >
                <li><a href="#profil">Profil</a></li>
                <li><a href="#stack">Stack</a></li>
                <li><a href="#projet">Projets</a></li>
                <li><a href="#parcours">Parcours</a></li>
                <li><a href="#formation">Formation</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button className={style.hamburger} onClick={() => {setHamburgerMenu(!hamburgerMenu)}}>
            </button>
            {hamburgerMenu && 
            <ul>
                <li><a href="#profil">Profil</a></li>
                <li><a href="#stack">Stack</a></li>
                <li><a href="#projet">Projets</a></li>
                <li><a href="#parcours">Parcours</a></li>
                <li><a href="#formation">Formation</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            }
        </nav>
    )
}


export default Nav; 
