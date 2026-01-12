type StatusProps = {
    status : "loading" | "success" | "error"
}

export const Status = (props : StatusProps) => {
    let message ;
    if(props.status === "loading"){
        message = "Loading..."
    } else if(props.status === "success"){
            message = "Data fetched successfully"
    } else if (props.status === "error"){
            message = "Error fetching data"
    }
  return (
    <div>
     <h1 className="text-center text-2xl text-gray-800">Status : {message}</h1>
    </div>
  )
}


