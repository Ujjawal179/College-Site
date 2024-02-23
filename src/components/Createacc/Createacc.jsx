import Link from 'next/link';
import Style from "./Createacc.module.css";
import { Button } from "../Button/Button";
import Input from '../Input/Input';

export function Createacc(){
    return (
        <div className={Style.main}>
            <div className={Style.design}>
                <img className={Style.image} src="https://img.freepik.com/free-vector/people-creating-social-media-landing-page_52683-38062.jpg?w=740&t=st=1707654484~exp=1707655084~hmac=0d50c337daadd7d397a8177442a9c8f8cbea61507c97f5afaffd80a5a1444c07" alt="" />
            </div>
            <div className={Style.form}>
                <h1 className= {`font-extrabold text-2xl py-5`} style={{color: "var(--yellow)"}}>Get Onboard!</h1>
                <div className={Style.inputbox}>
                    {/* <span className={Style.title}>Name</span> */}
                    <Input text={"Name..."} type={"text"} />
                    <Input text={"Phone Number..."} type={"tel"}/>
                    <Input text={"Roll Number..."} type={"tel"}/>
                    <Input text={"E-mail ID..."} type={"tel"}/>
                    <Button text={"Create"}/>
                    {/* <input type="text" className={Style.input} placeholder=''/> */}
                </div>
            </div>
        </div>
    )

}