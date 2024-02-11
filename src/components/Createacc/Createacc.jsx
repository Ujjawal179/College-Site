import Link from 'next/link';
import Style from "./Createacc.module.css";
import { Button } from "../Button/Button";
import Input from '../Input/Input';

export function Createacc(){
    return (
        <div className={Style.main}>
            <div className={Style.design}>
                <img className={Style.image} src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className={Style.form}>
                <h1 className= {`font-extrabold text-2xl py-5`} style={{color: "var(--yellow)"}}>Get Onboard!</h1>
                <div className={Style.inputbox}>
                    {/* <span className={Style.title}>Name</span> */}
                    <Input text={"Name..."} type={"text"} />
                    <Input text={"Phone Number..."} type={"tel"}/>
                    <Button text={"Create"}/>
                    {/* <input type="text" className={Style.input} placeholder=''/> */}
                </div>
            </div>
        </div>
    )

}