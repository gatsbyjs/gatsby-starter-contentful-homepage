import * as React from "react"
// import styles of this component
import styles from "./Nav.module.css"

// import other components
import Button from "../Elements/Button/Button"

// import other react pkg to use
import { HambergerMenu } from "iconsax-react"

// Nav component
const Nav = () => {
    return (
        <nav className="nav flex align-items-center">
            <h1 className="nav-title">Gallery</h1>
            <ul className="flex align-items-center navbar-nav">
                <li className="nav-item active">
                    <a href="" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Wallpapers</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Collections</a>
                </li>
                <li className="nav-item">
                    <a href="" className="nav-link">Artists</a>
                </li>
                <li className="nav-item d-none-1100">
                    <a href="" className="nav-link">Explore</a>
                </li>
                <li className="nav-item d-none-1100">
                    <a href="" className="nav-link">Blog</a>
                </li>
            </ul>
            <div className="flex navbar-buttons">
                <Button theme="transparent">Login</Button>
                <Button theme="matrix">Sign up</Button>
            </div>
            <div className="navbar-responsive-menu">
                <Button theme="transparent">
                    <HambergerMenu size="32" color="var(--white-100)" />
                </Button>
            </div>
        </nav>
    )
}

export default Nav