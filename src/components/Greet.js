function Greet(props){
    return  (
        <div>
            <h1>Hi {props.name}</h1>
            {props.chilren}
        </div>
        )
}

export default Greet