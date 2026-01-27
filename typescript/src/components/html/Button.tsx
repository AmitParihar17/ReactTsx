type buttonProps = {
    variants : "primary" | "secondary",
    children : string,
}&Omit<React.ComponentProps<'button'>,"children">

export const Button = ({variants,children,...rest} : buttonProps) => {
  return (
  <button className={`class-with-${variants}`} {...rest}>{children}</button>
  )
}


