import './App.css';
import Rectangle from "./component/rectangle";
import Block from "./component/block";
import Blockclick from "./component/blockclick";

function App() {
    return (
        <div>
            <Rectangle/>
            <Rectangle/>
            <Rectangle/>
            <Rectangle/>
            <Block borderColor={"red"} backColor={"yellow"}/>
            <Block borderColor={"orange"} backColor={"navy"}/>
            <Block borderColor={"green"} backColor={"pink"}/>
            <Blockclick/>
            <Blockclick/>
            <Blockclick/>
        </div>
    );

}


export default App;
