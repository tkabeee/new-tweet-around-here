interface Props {
  height: number
  onDragStart(): void
  onDragEnd(): void
}

export const SlidingUpPanel = (props: Props) => {
  const { height } = props

  const show = () => {}
  const hide = () => {}

  return (
    <>
      <div></div>
    </>
  )
}
