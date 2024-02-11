import Style from "./Button.module.css";

export function Button({text}){
    return (
        <button className={Style.button}>
            {text}
        </button>
    )

}