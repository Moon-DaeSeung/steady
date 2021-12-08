import React from 'react'
import Layout from '../../components/layout'
import TOC from '../../components/toc' 
import { MDXProvider } from "@mdx-js/react"
import tw from 'twin.macro'
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {Item} from '../../types'
import { Disqus } from 'gatsby-plugin-disqus';

const components = {
 h2: tw.h2`border-b-2`
}

const PostLayout = ({
  data: {
    mdx: {
      tableOfContents: { items },
      body,
      frontmatter: { title },
      id,
      slug,
    },
  },
}) => {
  return (
    <MDXProvider components={components}>
      <Layout>
        <div css={[tw`flex gap-3`]}>
          <aside css={[tw`w-64 flex-shrink-0 h-40 border-4 mt-20`]}>aa</aside>
          <article>
            <header>
              <h1>{title}</h1>
            </header>
            <section css={[tw`relative`]}>
              <TOC items={items} />
              <MDXRenderer>{body}</MDXRenderer>
            </section>
            <footer css={[tw`flex flex-col mt-28`]}>
              <label css={[tw`border-b-2 p-2`]}>댓글</label>
              <Disqus
                config={{
                  identifier: id,
                  title,
                }}
              />
            </footer>
          </article>
        </div>
      </Layout>
    </MDXProvider>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
      tableOfContents
      id
      slug
    }
  }
`
export default PostLayout
