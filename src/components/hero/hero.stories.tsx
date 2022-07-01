import * as React from 'react'
import { Hero, Props } from './hero'

export default {
  title: 'Hero',
  component: Hero,
}

export const Primary = (args: Props) => <Hero {...args} />
