import React, {useState} from 'react';

const App = () => {

    const [input, setInput] = useState("")

    return(
        <div>
            <h1>Calculator</h1>
            <h2>{input}</h2>
            <table>
                <tr>
                    <td><button onClick={()=>setInput(input+"+")}>+</button></td>
                    <td><button onClick={()=>setInput(input+"-")}>-</button></td>
                    <td><button onClick={()=>setInput(input+"*")}>*</button></td>
                    <td><button onClick={()=>setInput(input+"/")}>/</button></td>                    
                </tr>
                <tr>
                    <td><button onClick={()=>setInput(input+"1")}>1</button></td>
                    <td><button onClick={()=>setInput(input+"2")}>2</button></td>
                    <td><button onClick={()=>setInput(input+"3")}>3</button></td>
                    <td><button onClick={()=>setInput(input+"4")}>4</button></td>
                </tr>
                <tr>
                    <td><button onClick={()=>setInput(input+"5")}>5</button></td>
                    <td><button onClick={()=>setInput(input+"6")}>6</button></td>
                    <td><button onClick={()=>setInput(input+"7")}>7</button></td>
                    <td><button onClick={()=>setInput(input+"8")}>8</button></td>
                </tr>
                <tr>
                    <td><button onClick={()=>setInput(input+"9")}>9</button></td>
                    <td><button onClick={()=>setInput(input+"0")}>0</button></td>
                    <td><button onClick={()=>setInput(input+"00")}>00</button></td>
                    <td><button onClick={()=>setInput(eval(input))}>=</button></td>
                </tr>
                <tr>
                    <td><button onClick={()=>setInput(input+".")}>.</button></td>
                    <td><button onClick={()=>setInput("")}>C</button></td>
                    <td><button onClick={()=>setInput(input.slice(0,input.length-1))}>{"<"}</button></td>
                </tr>



            </table>
        </div>
    );
};
  
export default App;