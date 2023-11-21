export interface ButtonT {
  title: string
  type: number
  openScreen?: ({ nativeEvent: PressEvent }) => void
}
