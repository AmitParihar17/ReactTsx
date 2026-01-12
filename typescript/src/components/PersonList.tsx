type ProductListProp = {
    names :{
        first :string,
        last:string
    }[]
}

export const PersonList = (props:ProductListProp) => {
  return (
    <div>
      { props.names.map(name => (
        <h2 key={name.first}>{name.first}{name.last}</h2>
      ))}
    </div>
  )
}


