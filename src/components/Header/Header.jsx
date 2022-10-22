import * as React from "react"
// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import something from react packages
import { SearchNormal1 } from "iconsax-react";
import { Setting4 } from "iconsax-react";

// import jsons
import JsonHeader from '../../Jsons/HeaderBoxes.json';

// Header component
const Header = () => {
  return (
    <header className="header flex justify-content-center">
      <ContainerCard className="flex flex-column">
        <div className="blur-circle-shape"></div>

        <Nav />
        <BrickLayout />

        <div className="headings-header flex justify-content-center flex-column ">
          <h2 className="heading-header-title">Be one who change the world 😎🤘</h2>
          <h1 className="heading-header-second-title">
            Artists make The Arts better <br />
            The Arts design the <span>world</span> better
          </h1>

          <div className="search-bar flex align-items-center">
            <SearchNormal1 size="30" color="var(--white-100)" />
            <input type="text" className="search-input" placeholder="Search who can change the world" />
            <button className="search-btn flex justify-content-center align-items-center">
              <Setting4 size="20" color="var(--dark-900)" />
            </button>
          </div>

          <HeaderBoxes titles_numbers={JsonHeader.informations} />
        </div>
      </ContainerCard>
    </header>
  )
}

export default Header