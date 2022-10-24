import * as React from "react"
// import styles of this component
import "./MasonryBox.module.css"
import { PropTypes } from 'prop-types';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// MasonryBox component
const MasonryBox = ({ data, images, userProf, userName, userAlias }) => {
  return (
    <div className="my-masonry">
      <GatsbyImage style={{ width: "100%" }} image={getImage(images)} />
      <div className="my-masnry-description flex2">
        <div className="my-masnry-user-box flex align-items-center">
          <div className="my-masnry-user-prof">
            <GatsbyImage image={getImage(userProf)} />
          </div>
          <div className="my-masnry-user-prof-desc flex flex-column">
            <h1>{data.title}</h1>
            <h3>{userAlias}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

// validate MasonryBox component
MasonryBox.propTypes = {
  data: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  userProf: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userAlias: PropTypes.string.isRequired,
}

export default MasonryBox