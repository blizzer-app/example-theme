import * as React from 'react'
import { FunctionComponent } from 'react'

export interface Props {
  heading: string
  subheading: string
  text: string
}

export const Hero: FunctionComponent<Props> = ({
  heading = 'Lorem Ipsum dollor met',
  subheading = 'Lorem Ipsum dollor met',
  text = 'Lorem Ipsum dollor met',
}) => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-bold">{heading}</h1>
        <h2 className="text-2xl font-semibold">{subheading}</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
