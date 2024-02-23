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
                    <Attendancebar sub={"Physics"} percent={70}/>
                    <Attendancebar sub={"Chemistry"} percent={80}/>
                    <Attendancebar sub={"Math"} percent={100}/>
                    <Attendancebar sub={"Computer"} percent={60}/>
                    <Attendancebar sub={"Software"} percent={31}/>
                    <Attendancebar sub={"Workshop"} percent={90}/>
                    <Attendancebar sub={"Mechenical"} percent={100}/>


                </div>
            </div>
        </>
    )

}