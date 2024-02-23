import Link from "next/link";
import Style from "./attendancebar.module.css";
import { Button } from "../Button/Button";

export function Attendancebar({sub, percent}) {
  return (
    <>
      <div className={Style.col}>
        <div className={Style.top}>
          <span className={Style.title}>{sub}</span>
          <span className={Style.teacher}>( Dr. Rahul Katariya )</span>
        </div>
        <div className={Style.bar}>
          <div className={Style.prog} style={{width : `${percent}%`}}>{percent}%</div>
        </div>
      </div>
    </>
  );
}
