type ContainerProps = {
    styles : React.CSSProperties
}

const Container = (props:ContainerProps) => {
  return (
    <div style={props.styles}>
      <p>Text content goes here</p>
    </div>
  )
}

export default Container
