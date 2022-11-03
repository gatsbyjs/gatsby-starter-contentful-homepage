import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function LayoutWrap({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          myMeta: title
        }
      }
    }
  `)
  return (
    <>
      {children}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
