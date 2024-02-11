import Link from 'next/link';
import Style from "./attendance.module.css";
import { Button } from "../Button/Button";
import { Attendancebar } from '../attendancebar/attendancebar';

export function Attendance(){
    return (
        <>
            <div className={Style.main}>
                <span className={Style.head}>
                    ATTENDANCE
                </span>
                <span className={Style.desc}>
                    Manage Your Attendance in a simlpified way!!!
                </span>
                <div className={Style.table}>
                    <Attendancebar/>
                </div>
            </div>
        </>
    )

}