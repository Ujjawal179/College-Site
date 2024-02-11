import Style from "./Input.module.css";

function Input({ text, type}) {
    return ( 
        <input type="text" className={Style.input} placeholder={`${text}`} type={`${type}`} /> 
     );
}

export default Input;