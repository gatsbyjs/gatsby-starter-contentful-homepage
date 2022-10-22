import React, { useState, useEffect } from "react"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })
  let navbarClasses = ["navigation"]
  if (scrolled) {
    navbarClasses.push("scrolled")
  }

  return (
    <nav className={navbarClasses.join(" ")}>
      <Logo />
      <div
        className="toggle"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          <div className="hamburger open" />
        ) : (
          <div className="hamburger" />
        )}
      </div>
      {navbarOpen ? (
        <div className="navbox">
          <NavbarLinks />
        </div>
      ) : (
        <div className="navbox open">
          <NavbarLinks />
        </div>
      )}
    </nav>
  )
}

export default Navbar
