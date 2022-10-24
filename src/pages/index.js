import * as React from "react"
import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Navbar from "../components/Navbar"
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-react-intl"

import MasonryLayout from "../components/MasonryLayout/MasonryLayout"

import Header from "../components/Header"
// import other components to use

export default function Homepage(props) {
  const intl = useIntl()
  const locale = intl.locale === "es" ? "es-CO" : "en-US"
  const gallery = useStaticQuery(graphql`
{
  allContentfulArtwork(sort: {fields: createdAt, order: DESC}) {
    edges {
      node {
        images {
          prev: gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            resizingBehavior: SCALE
            width: 670
          )
          full: gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            resizingBehavior: SCALE
          )
          file {
            url
            details {
              image {
                height
                width
              }
            }
          }
          size
        }
        id
        node_locale
        slug
        title
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
    allContentfulSlide {
    edges {
      node {
        title
        bg {
          publicUrl
        }
        id
        text {
          text
        }
        node_locale
        hasLink
      }
    }
  }
}

  `)
  const images = gallery.allContentfulArtwork.edges.map((edge) => ({
    id: edge.node.id,
    images: edge.node.images[0].prev,
    width: edge.node.images[0].file.details.image.width, //  / edge.node.images[0].file.details.image.height * 4
    height: edge.node.images[0].file.details.image.height, //  / edge.node.images[0].file.details.image.width * 4
    file: edge.node.images[0].file,
    title: edge.node.title,
    slug: edge.node.slug,
    locale: edge.node.node_locale,
    createdAt: edge.node.createdAt,
    user: {
      image: gallery.contentfulAuthor.foto,
      name: gallery.contentfulAuthor.name,
      alias: gallery.contentfulAuthor.alias,
    },
  }))
  console.log(gallery.allContentfulSlide.edges)
  const slides = gallery.allContentfulSlide.edges.filter((item) => item.node.node_locale === locale)
  console.log(slides);
  return (
    <>
      <Navbar />
      <Header slides={slides} author={gallery.contentfulAuthor} />
      <section className="sec-2">
        <h2 className="center"> My Art Work</h2>
        <br />
        <MasonryLayout images={images.filter((item) => item.locale === locale)} />
      </section>
    </>
  )
}
