import * as React from "react"
import styles from "./BrickLayout.module.css"

const BrickLayout = () => {
  return (
    <div className="brick-layout">
      <div className="brick-column">
        <img src="img/dummy_image/1.jpg" alt="" />
        <img src="img/dummy_image/2.jpg" alt="" />
        <img src="img/dummy_image/3.jpg" alt="" />
      </div>
      <div className="brick-column">
        <img src="img/dummy_image/4.jpg" alt="" />
        <img src="img/dummy_image/5.jpg" alt="" />
        <img src="img/dummy_image/6.jpg" alt="" />
      </div>
      <div className="brick-column">
        <img src="img/dummy_image/7.jpg" alt="" />
        <img src="img/dummy_image/8.jpg" alt="" />
        <img src="img/dummy_image/9.jpg" alt="" />
      </div>
    </div>
  )
}

export default BrickLayout