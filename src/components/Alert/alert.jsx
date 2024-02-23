import Link from 'next/link';
import Style from "./alert.module.css";
import { Button } from "../Button/Button";
import { Alerttab } from '../alerttab/alerttab';

export function Alert(){
    return (
        <>
            <div className={Style.main}>
                <span className={Style.head}>
                SwiftSOS - Your Lifeline in Emergencies
                </span>
                <span className={Style.desc}>
                Instantly summon help with SwiftSOS - a powerful app providing real-time assistance in critical situations. Your safety, our priority!!!
                </span>
                <div className={Style.table}>
                    <Alerttab name={"Ujjawal AGrawal"} roll={"23/SE/2023"} loc={"OAT, DTU"} contact={"132648593"} msg={"In a state of emergency, I find myself in immediate danger at [my location]. I am being threatened and urgently need help. The situation is dire, and time is of the essence. Please, anyone who receives this message, contact authorities and send assistance immediately. Your prompt action could make a life-saving difference. #Emergency #SOS"}/>
                    <Alerttab name={"Ujjawal AGrawal"} roll={"23/SE/2023"} loc={"OAT, DTU"} contact={"132648593"} msg={"In a state of emergency, I find myself in immediate danger at [my location]. I am being threatened and urgently need help. The situation is dire, and time is of the essence. Please, anyone who receives this message, contact authorities and send assistance immediately. Your prompt action could make a life-saving difference. #Emergency #SOS"}/>
                    <Alerttab name={"Ujjawal AGrawal"} roll={"23/SE/2023"} loc={"OAT, DTU"} contact={"132648593"} msg={"In a state of emergency, I find myself in immediate danger at [my location]. I am being threatened and urgently need help. The situation is dire, and time is of the essence. Please, anyone who receives this message, contact authorities and send assistance immediately. Your prompt action could make a life-saving difference. #Emergency #SOS"}/>
                    <Alerttab name={"Ujjawal AGrawal"} roll={"23/SE/2023"} loc={"OAT, DTU"} contact={"132648593"} msg={"In a state of emergency, I find myself in immediate danger at [my location]. I am being threatened and urgently need help. The situation is dire, and time is of the essence. Please, anyone who receives this message, contact authorities and send assistance immediately. Your prompt action could make a life-saving difference. #Emergency #SOS"}/>
                    <Alerttab name={"Ujjawal AGrawal"} roll={"23/SE/2023"} loc={"OAT, DTU"} contact={"132648593"} msg={"In a state of emergency, I find myself in immediate danger at [my location]. I am being threatened and urgently need help. The situation is dire, and time is of the essence. Please, anyone who receives this message, contact authorities and send assistance immediately. Your prompt action could make a life-saving difference. #Emergency #SOS"}/>
                </div>
            </div>
        </>
    )

}