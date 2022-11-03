import type { IGatsbyImageData } from "gatsby-plugin-image"

export type IGatsbyImageDataParent<T = never> = T & {
  gatsbyImageData: IGatsbyImageData
}
export type IGatsbyImageParent<T = never> = T & {
  gatsbyImage: IGatsbyImageData
}
export type FileNode = Partial<Node> & {
  childImageSharp?: IGatsbyImageDataParent<Partial<Node>>
}

const isGatsbyImageData = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: IGatsbyImageData | any
): node is IGatsbyImageData =>
  // 🦆 check for a deep prop to be sure this is a valid gatsbyImageData object
  Boolean(node?.images?.fallback?.src)

const isGatsbyImageDataParent = <T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: IGatsbyImageDataParent<T> | any
): node is IGatsbyImageDataParent<T> => Boolean(node?.gatsbyImageData)

const isGatsbyImageParent = <T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: IGatsbyImageParent<T> | any
): node is IGatsbyImageParent<T> => Boolean(node?.gatsbyImage)

export type ImageDataLike =
  | FileNode
  | IGatsbyImageDataParent
  | IGatsbyImageParent
  | IGatsbyImageData

export const getImage = (
  node: ImageDataLike | null
): IGatsbyImageData | undefined => {
  // This checks both for gatsbyImageData and gatsbyImage
  if (isGatsbyImageData(node)) {
    return node
  }
  // gatsbyImageData GraphQL field
  if (isGatsbyImageDataParent(node)) {
    return node.gatsbyImageData
  }
  // gatsbyImage GraphQL field for Gatsby's Image CDN service
  if (isGatsbyImageParent(node)) {
    return node.gatsbyImage
  }
}
