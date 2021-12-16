import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { S } from "styles"

import EnLayout from "layouts/en"
import { HeroSimple } from "components"

const BlogPostLayout = ({ data: { mdx } }) => {
  return (
    <EnLayout>
      <MDXProvider
        components={{
          h1: S.H1,
          h2: S.H2,
          h3: S.H3,
        }}
      >
        <HeroSimple title={mdx.frontmatter.title} />
        <main>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </main>
      </MDXProvider>
    </EnLayout>
  )
}

export default BlogPostLayout

export const query = graphql`
  query BlogPostQuery($postId: String) {
    mdx(id: { eq: $postId }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

// import { Link } from "gatsby"

// const shortcodes = { Link } // Provide common components here

// import { Chart, Pullquote } from "./ui"
// import { Message } from "theme-ui"

// const shortcodes = { Chart, Pullquote, Message }

// export default function Layout({ children }) {
//   return <MDXProvider components={shortcodes}>{children}</MDXProvider>
// }