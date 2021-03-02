import React from 'react';

function Block(props) {
    // const [mess,setMess]=React.useState("Hello");
    const [borderColor]=React.useState(props.borderColor)
    const [backColor]=React.useState(props.backColor)

    const blockStyle={
        height:"100px",
        width:"100px",
        borderColor: borderColor,
        borderStyle: "solid",
        borderWidth: "2px",
        backgroundColor:backColor,

    }

    return (
        <div style={blockStyle}>
            {/*<h1>{mess}</h1>*/}
            {/*{gray===false&&<button onClick={grayOut}>{props.clk}</button>}*/}
        </div>

    )
}

export default Block;