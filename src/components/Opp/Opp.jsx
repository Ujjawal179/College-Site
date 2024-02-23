import Link from "next/link";
import Style from "./opp.module.css";
import { Button } from "../Button/Button";
import { Losttab } from "../Losttab/Losttab";

export function Opp() {
  return (
    <>
      <div className={Style.main}>
        <span className={Style.head}>Latest Opportunities</span>
        <span className={Style.desc}>
          Discover the latest Opportunities –
          a user-friendly platform where you can find latest Ongoing opportunities.
        </span>
        <div className={Style.table}>
            <Losttab title={"Code Script 2.0"} link={"https://lh3.googleusercontent.com/d/1DVxd2W2dNfXtbznASH3r8FkHiePnf5Vg"} desc={" Guessapalooza is the guesstimate competition that is typically designed to test the participant's ability to make reasonable assumptions and use critical thinking skills to derive a close approximation of the correct answer."} location={"OAT, DTU"} time={"2PM"} contact= {"1234567890"}/>
            <Losttab title={"Pitchfork"} link={"https://lh3.googleusercontent.com/d/1C_ulZwUvcUL0wKlUi2HE-xM42cLw8iR3"} desc={"INVICTUS’24 brings you the start-up incubation challenge “Pitchfork” to channel your thoughts and ideas translate to entrepreneurial ventures.Through intensive collaboration and persuasive presentations to a distinguished panel, participants will refine their critical reasoning skills and nurture their entrepreneurial zeal. "} location={"OAT, DTU"} time={"2PM"} contact= {"1234567890"}/>
            <Losttab title={"Techloop"} link={"https://lh3.googleusercontent.com/d/1SDQWxksaOzga3GpytxdaOLIegeq7tWwZ"} desc={"TechLoop is a Kahoot-based quiz competition where students will be tested on their aptitude and other tech-related knowledge. As the name suggests, the competition will include MCQ type questions from both technical and general mathematical aptitude-based topics."} location={"OAT, DTU"} time={"2PM"} contact= {"1234567890"}/>
            <Losttab title={"PS5 FIFA Fiesta"} link={"https://invictusdtu.in/ps5.png"} desc={" 🎮 Gear up for the ultimate PS5 FIFA Fiesta at INVICTUS'24! 🏆 Join us on 11th & 12th Feb for adrenaline-packed 1v1 knockout battles, blazing-fast gameplay, and a shot at the 10K INR prize pool! Don't miss out, secure your spot now! 💥"} location={"OAT, DTU"} time={"2PM"} contact= {"1234567890"}/>
        </div>
      </div>
    </>
  );
}
