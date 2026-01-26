type buttonProps = {
    variants : "primary" | "secondary"
}&React.ComponentProps<'button'>

export const Button = ({variants,children,...rest} : buttonProps) => {
  return (
  <button className={`class-with-${variants}`} {...rest}>{children}</button>
  )
}


