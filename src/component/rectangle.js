import React from 'react';
import style from "../style/style";

function Rectangle() {
// need to add (props)
    // const [mess,setMess]=React.useState("Hello");
    // const [gray, setGray]=React.useState(false);
    //
    // const grayOut = ()=>{
    //     setMess("Goodbye");
    //     setGray(true);
    // };

    return (
        <div style={style.rectangle}>
            {/*<h1>{mess}</h1>*/}
            {/*{gray===false&&<button onClick={grayOut}>{props.clk}</button>}*/}
        </div>
    )
}

export default Rectangle;