import Link from 'next/link';
import Style from "./attendancebar.module.css";
import { Button } from "../Button/Button";

export function Attendancebar(){
    return (
        <>
            <div className={Style.col}>
                <span className={Style.title}>
                    Physics
                </span>
                <div className={Style.bar}>
                    <div className="prog"></div>

                </div>
                
            </div>
        </>
    )

}