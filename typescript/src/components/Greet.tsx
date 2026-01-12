type greetProptype = {
    name : string,
    messgeCount : number,
    isLoggedIn : boolean
}
export const Greet = (props : greetProptype) => {
  return (
    <div className="text-2xl text-center">
    {
        props.isLoggedIn ? <p>Welcome {props.name} !You have {props.messgeCount} unread message</p> : "Welcome Guest"
    }
    </div>
  );
};
