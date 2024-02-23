import Link from "next/link";
import Style from "./Losttab.module.css";
import { Button } from "../Button/Button";

export function Losttab({title, link, desc, location, time, contact}) {
  return (
    <>
      <div className={Style.col}>
        <div >
            <img className={Style.image} src={`${link}`} alt="" />
        </div>

        <div className={Style.content}>
            <span className={Style.title}>{title}</span>
            <br />
            <span className={Style.desc}>{desc}</span>
            <br />
            <div>
            <span className={Style.location}>Location: {location} &emsp; </span>
            <span className={Style.time}>Time: {time} &emsp; </span> 
            <span className={Style.time}>Contact: {contact} &emsp; </span> 
            </div>
        </div>

      </div>
    </>
  );
}
