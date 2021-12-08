import { graphql, Link } from "gatsby"
import React from "react"
import tw from "twin.macro"
import Layout from "../../components/layout"
const Posts = ({ data }: { data: any }) => {
  return (
    <Layout>
      <ul css={tw`p-0 m-0`}>
        {data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <Link to={`/posts/${node.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
    </Layout>
  )
}

export default Posts

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        slug
        id
        excerpt(pruneLength: 280)
      }
    }
  }
`
