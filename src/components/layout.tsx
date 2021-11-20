/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'twin.macro'
import "./layout.css"

type LayoutProp = {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProp) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)``

  return (
    <div tw='height' >
      <header tw=''>

      </header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>

      </footer>
    </div>
  )
}

export default Layout
