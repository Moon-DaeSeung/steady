/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import tw from 'twin.macro'
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
  `)

  return (
    <div css={[tw`min-h-screen flex flex-col items-center `]}>
      <header css={[tw`text-2xl border-b-2 flex justify-center w-full`]}>
        <nav css={[constraint, tw`flex items-center justify-evenly` ]}>
          <Link css={[tw`flex font-bold text-3xl `]} to="/">Blog</Link>
          <ul css={[tw`flex justify-end items-center gap-7 flex-1 m-0 `]}>
            <li css={[tw`m-0`]}>
              <Link to="/about/">About</Link>
            </li>
            <li css={[tw`m-0`]}>
              <Link to="/posts/">Posts</Link>
            </li>
            <li css={[tw`m-0`]}>
              <Link to="/playground/">Playground</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main css={[constraint]}>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout

const constraint = tw`xl:max-width[1280px] w-full h-full p-4` 