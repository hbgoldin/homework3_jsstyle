import React from 'react';

function Blockclick(props) {

    // const [border, setBorder]=React.useState(false)
    // const [background, setBackground]=React.useState(false)
    // //
    const blockClick = ()=>{
        // setBackground("blue", "green", "red");
        // setBorder("green", "red", "blue");

    };
    const [borderColor]=React.useState(props.borderColor)
    const [backColor]=React.useState(props.backColor)

    const blockStyle1={
        height:"100px",
        width:"100px",
        borderColor: borderColor,
        borderStyle: "solid",
        borderWidth: "2px",
        backgroundColor:backColor,
    }

    return (
        <div style={blockStyle1} onClick={blockClick}>
        </div>

    )
}

export default Blockclick;