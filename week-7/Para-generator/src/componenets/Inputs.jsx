import "./input.css";

export default function Input(){
    return(
        <div className="container">
            <input type="text"  className="textInput" placeholder="Enter number or word"/>
            <button className="generate">Generate</button>
        </div>
    )
};