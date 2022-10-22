import React from "react"
import { Link } from "gatsby"

const NavbarLinks = () => {
  return (
    <>
      <Link className="NavItem">Home</Link>
      <Link className="NavItem">About</Link>
      <Link className="NavItem">Gallery</Link>
      <Link className="NavItem">Projects</Link>
      <Link className="NavItem">Contact</Link>
    </>
  )
}
export default NavbarLinks