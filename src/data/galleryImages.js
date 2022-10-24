import { graphql, useStaticQuery } from "gatsby";

function Images({ data }) {
  const imagesA = useStaticQuery(graphql`
{
  allContentfulArtwork(sort: {fields: createdAt, order: DESC}) {
    edges {
      node {
        images {
          gatsbyImageData(placeholder: TRACED_SVG, formats: AUTO)
          title
        }
      }
    }
  }
  contentfulAuthor(email: {eq: "s.lopez@loart.dev"}) {
    alias
    foto {
      gatsbyImageData(
        quality: 5
        placeholder: TRACED_SVG
        aspectRatio: 1.1
        formats: WEBP
      )
    }
    name
  }
}

  `)
  return (imagesA)
}

export default Images()