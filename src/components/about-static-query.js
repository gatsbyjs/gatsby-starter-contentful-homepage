import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function ASQ({}) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          newTitle: title
        }
      }
    }
  `)
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
