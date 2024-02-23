import Link from 'next/link';
import Style from "./alerttab.module.css";
import { Button } from "../Button/Button";

export function Alerttab({name, roll, msg, contact, loc}){
    return (
        <>
            <div className={Style.col}>
                <div className={Style.detail}>
                    <span>Name: {name}</span>
                    <span>Roll Number: {roll}</span>
                    <span>Contact: {contact}</span>
                    <span>Location: {loc}</span>
                </div>
                <div className={Style.msg}>Message: <br />{msg}</div>

                
            </div>
        </>
    )

}