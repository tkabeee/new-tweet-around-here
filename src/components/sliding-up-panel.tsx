// Reference
// https://github.com/octopitus/rn-sliding-up-panel/blob/master/SlidingUpPanel.js

import { useRef } from 'react'

interface Props {
  height: number
  onDragStart?(): void
  onDragEnd?(): void
}

export const SlidingUpPanel = (props: Props) => {
  const { height } = props

  const show = () => {}
  const hide = () => {}
  const scrollIntoView = () => {}

  return (
    <>
      <div></div>
    </>
  )
}
