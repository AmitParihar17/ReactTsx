type greetProptype = {
    name : string,
    messgeCount ?: number,
    isLoggedIn : boolean
}
export const Greet = (props : greetProptype) => {
  const {messgeCount = 0} = props
  return (
    <div className="text-2xl text-center">
    {
        props.isLoggedIn ? <p>Welcome {props.name} !You have {messgeCount} unread message</p> : "Welcome Guest"
    }
    </div>
  );
};
