import style from './Navigation.module.css'

import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <nav className={style.navBar}>
            <NavLink
                to='/read-file'
                className={({ isActive, isPending }) =>
                    isActive ? `${style.navLink} ${style.navLinkActive}` : style.navLink
                }
            >
                Read Files
            </NavLink>
            <NavLink
                to='/output'
                className={({ isActive, isPending }) =>
                    isActive ? `${style.navLink} ${style.navLinkActive}` : style.navLink
                }
            >
                Output
            </NavLink>
        </nav>
    )
}

export default Navigation
