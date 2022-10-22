import * as React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"

// import other components to use
import Header from "../components/Header/Header"
import MasonryLayout from "../components/MasonryLayout/MasonryLayout"
import ContainerCard from "../components/ContainerCard/ContainerCard"
import Dropdown from "../components/Elements/Dropdown/Dropdown"

export default function Homepage(props) {
  return (
    <>
      <Navbar />
      <Header />
    </>
  )
}
