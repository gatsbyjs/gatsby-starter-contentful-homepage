import * as React from "react"
// import styles of this component
import styles from "./ContainerCard.module.css"

// import react package
import PropTypes from 'prop-types'

// ContainerCard component
const ContainerCard = ({ children, className }) => (
    <div className={`container ${className}`}>{children}</div>
)

ContainerCard.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default ContainerCard