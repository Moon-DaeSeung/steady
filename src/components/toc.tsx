import { SerializedStyles } from '@emotion/utils'
import { Link } from 'gatsby'
import React from 'react'
import tw from 'twin.macro'
import {Item} from '../types'

export type TOCProps = {
  items: Item[]
}

type Anchor = {
  url: string,
  title: string,
  depth: number
}

const TOC = ({items}: TOCProps) => {
  const reducer = (depth: number): ((acc: Anchor[], item: Item) => Anchor[]) =>
    (acc: Anchor[], { title, url, items }: Item) => {
      const nested = items || []
      return [...acc, { title, url, depth }, ...nested.reduce(reducer(depth+1), [])]
    }
  const anchors = items.reduce(reducer(0),[])
  const indents = [tw`pl-4`,tw`pl-8`,tw`pl-12`,tw`pl-16`]

  return (
    <aside css={[tw`mb-4 md:w-72 md:absolute md:right[-18rem] md:ml-2`]}>
      <header>
        <h3
          css={[
            tw`background-color[#343434] text-white p-1.5 m-0 rounded-t`,
            indents[0],
          ]}
        >
          On This Page
        </h3>
      </header>
      <ul tw="m-0 text-gray-500 ">
        {anchors.map(({ title, url, depth }, key) => (
          <li
            css={[
              tw`border-2 border-t-0 m-0 p-0.5`,
              indents[depth],
              depth === 0 ? tw`font-bold` : tw`font-normal`,
              key === anchors.length - 1 && tw`rounded-b`,
            ]}
            key={key}
          >
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default TOC

const border = tw`border-b-2`