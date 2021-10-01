// Reference
// https://github.com/octopitus/rn-sliding-up-panel/blob/master/SlidingUpPanel.js

import { useEffect, useRef } from 'react'

import * as Constants from '../lib/constants'

interface Props {
  height: number
  draggableRange: {
    top: number
    bottom: number
  }
  snappingPoints?: number[]
  minimumVelocityThreshold?: number
  minimumDistanceThreshold?: number
  onBackButtonPress?(): void
  onDragStart?(): void
  onDragEnd?(): void
  onBottomReached?(): void
  allowMomentum?: boolean
  allowDragging?: boolean
  showBackdrop?: boolean
  backdropOpacity?: number
  friction?: number
  containerStyle?: {}
  backdropStyle?: {}
  children: any
}

const usableHeight: number = 0

export const SlidingUpPanel = ({
  height = usableHeight,
  draggableRange = { top: usableHeight, bottom: 0 },
  snappingPoints = [],
  minimumVelocityThreshold = Constants.DEFAULT_MINIMUM_VELOCITY_THRESHOLD,
  minimumDistanceThreshold = Constants.DEFAULT_MINIMUM_DISTANCE_THRESHOLD,
  onBackButtonPress = () => {},
  onDragStart = () => {},
  onDragEnd = () => {},
  onBottomReached = () => {},
  allowMomentum = true,
  allowDragging = true,
  showBackdrop = true,
  backdropOpacity = 0.75,
  friction = Constants.DEFAULT_FRICTION,
  containerStyle = {},
  backdropStyle = {},
  children,
}: Props) => {
  const show = () => {}

  const hide = () => {
    const { bottom } = draggableRange
    triggerAnimation({ toValue: bottom })
  }

  const scrollIntoView = () => {}

  const { top, bottom } = draggableRange
  // set backdrop ponter-events

  useEffect(() => {
    // update draggableRange
  }, [])

  const triggerAnimation = (options = {}) => {
    // start flick
  }

  const renderBackdrop = () => {
    return <></>
  }

  return (
    <>
      {renderBackdrop}
      <div>{children}</div>
    </>
  )
}
