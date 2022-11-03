import React from "react"

import LayoutWrap from "./src/components/layout-wrap"

export const wrapPageElement = ({ element, props }) => {
  return <LayoutWrap {...props}>{element}</LayoutWrap>
}
