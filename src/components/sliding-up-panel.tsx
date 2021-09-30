// Reference
// https://github.com/octopitus/rn-sliding-up-panel/blob/master/SlidingUpPanel.js

import { useRef } from 'react'

interface Props {
  height: number
  draggableRage: {
    top: number
    bottom: number
  }
  snappingPoints: number[]
  minimumVelocityThreshold: number
  minimumDistanceThreshold: number
  onBackButtonPress?(): void
  onDragStart?(): void
  onDragEnd?(): void
  onBottomReached?(): void
  allowMomentum: boolean
  allowDragging: boolean
  showBackdrop: boolean
  backdropOpacity: number
  friction: number
  containerStyle: {}
  backdropStyle: {}
  children: any
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
