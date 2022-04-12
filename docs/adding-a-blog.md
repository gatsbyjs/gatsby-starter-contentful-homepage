# Adding a blog to your homepage starter

The Gatsby Homepage starter includes components for creating a homepage and an _About_ page as well as templates for simple pages like a _Privacy Policy_ page.

It does not include a blog by default, but you can install an optional theme to source blog content from a CMS of your choice.

## Get started

The content for the blog pages is sourced by a [Gatsby Theme][], which you'll need to install in your site.

[gatsby theme]: https://www.gatsbyjs.com/docs/themes/

This homepage starter uses Contentful for its content, but you can choose a different CMS for your blog.
For example, if you've decided to switch to Contentful, but you have an existing blog in a different CMS and want to keep the content separate, you can install the blog theme for that CMS.

Currently, the following blog themes are available to work out-of-the-box with this starter:

- [gatsby-theme-contentful-blog][]
- [gatsby-theme-datocms-blog][]
- [gatsby-theme-wordpress-blog][]

Choose one of these blog themes, install it, and add it to your site's `gatsby-config.js`.

```sh name
npm i gatsby-theme-contentful-blog
```

```js name
// gatsby-config.js
module.exports = {
  plugins: [
    // ...
    // Add the theme to the plugins array
    "gatsby-theme-contentful-blog",
  ],
}
```

### Add content models and content to Contentful

In your Contentful space, add new content models for _Blog Author_ and _Blog Post_.

The _Blog Author_ content model should have the following fields:

- `name`: Short text
- `avatar`: Media (image)

The _Blog Post_ content model should have the following fields:

- `slug`: Unique Short text with the custom validation: `^[a-zA-Z0-9\/_-]*$` - this field is used for the URL path
- `title`: Short text
- `body`: Rich text
- `excerpt`: Long text
- `image`: Media (image)
- `date`: Date & time
- `category`: Short text
- `author`: Reference to `BlogAuthor` (see below)

Once you've set up the content models, navigate to the _Content_ tab and start adding blog posts.

### Environment Variables

If you're using a different CMS in your blog than the one used for the homepage content, be sure to add the required environment variables to your `.env.development` and `.end.production` files.

- WordPress requires:
  - `WPGRAPHQL_URL`
- Contentful requires:
  - `CONTENTFUL_SPACE_ID`
  - `CONTENTFUL_ACCESS_TOKEN`
- DatoCMS requires:
  - `DATOCMS_API_TOKEN`
  - `DATOCMS_ENVIRONMENT`

## Adding templates

These blog themes do not render pages by default. Once a blog theme is added to your site and configured, create two templates in your site to render the blog index page and blog post pages. You will need to add a `src/templates/blog-index.js` file and `src/templates/blog-post.js` file.

```js
// example src/templates/blog-index.js
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Container, Heading, Box, Link } from "../components/ui"

export default function BlogIndex(props) {
  const posts = props.data.allBlogPost.nodes

  return (
    <Layout title="Blog">
      <Container>
        <Box paddingY={4}>
          <Heading as="h1">Blog</Heading>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                {post.image && (
                  <Link to={`/blog/${post.slug}`}>
                    <GatsbyImage
                      alt={post.image.alt}
                      image={getImage(post.image)}
                    />
                  </Link>
                )}
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                <p>{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allBlogPost {
      nodes {
        id
        slug
        title
        excerpt
        image {
          id
          alt
          gatsbyImageData
        }
      }
    }
  }
`
```

```js
// example src/templates/blog-post.js
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Container, Heading, Box } from "../components/ui"

export default function BlogPost(props) {
  const post = props.data.blogPost

  return (
    <Layout {...post} description={post.excerpt}>
      <Container>
        <Box paddingY={4}>
          {post.image && (
            <GatsbyImage alt={post.image.alt} image={getImage(post.image)} />
          )}
          <Heading as="h1">{post.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    blogPost(id: { eq: $id }) {
      id
      slug
      title
      html
      excerpt
      date
      image {
        id
        url
        gatsbyImageData
        alt
      }
    }
  }
`
```

## Using another CMS or data source

If the CMS that you'd like to use for your blog hasn't been built as a theme yet, you can use [gatsby-theme-abstract-blog][] to pull your blog content for other sources.

<!-- TODO: check links after publishing -->

[gatsby-theme-abstract-blog]: https://github.com/gatsbyjs/homepage-starters/tree/main/themes/gatsby-theme-abstract-blog
[gatsby-theme-contentful-blog]: https://github.com/gatsbyjs/homepage-starters/tree/main/themes/gatsby-theme-contentful-blog
[gatsby-theme-datocms-blog]: https://github.com/gatsbyjs/homepage-starters/tree/main/themes/gatsby-theme-datocms-blog
[gatsby-theme-wordpress-blog]: https://github.com/gatsbyjs/homepage-starters/tree/main/themes/gatsby-theme-wordpress-blog
