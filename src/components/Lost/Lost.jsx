import Link from "next/link";
import Style from "./Lost.module.css";
import { Button } from "../Button/Button";
import { Losttab } from "../Losttab/Losttab";

export function Lost() {
  return (
    <>
      <div className={Style.main}>
        <span className={Style.head}>Lost & Found</span>
        <span className={Style.desc}>
          Discover and reunite with lost possessions on our Lost and Found Hub –
          a user-friendly platform where you can list missing items or report
          findings.
        </span>
        <div className={Style.table}>
            <Losttab title={"Found a Bottle"} link={"https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} desc={" I misplaced a unique bottle with immense sentimental value. It holds precious memories, and I'm desperately hoping for its safe return. It has distinct features like [describe any unique characteristics]. If found, please contact me at [Your Contact Information]. Reward awaits! 🙏 #LostAndFound #HelpMeFindMyBottle"} location={"OAT, DTU"} time={"2PM"} contact= {"1234567890"}/>
            <Losttab title={"Lost a Headphone"} link={"https://www.boat-lifestyle.com/cdn/shop/products/main3_b6563f96-f1a1-4915-b686-d4e37232ec3c_600x.png?v=1685707922"} desc={"🎧 Lost my beloved Nirvanaa 751 ANC headphones, possibly in [Location/Date]. They're a crucial part of my daily routine, and I'm eager to have them back. These headphones have a sleek design and exceptional sound quality. "} location={"OAT, DTU"} time={"2PM"} contact= {"1234567890"}/>
            <Losttab title={"Found a Nirvana Ion ANC"} link={"https://www.boat-lifestyle.com/cdn/shop/products/main_black_fa1c6ec3-93b7-443e-ae82-d5eeb34258f8_600x.png?v=1641206192"} desc={" I misplaced a unique bottle with immense sentimental value. It holds precious memories, and I'm desperately hoping for its safe return. It has distinct features like [describe any unique characteristics]. If found, please contact me at [Your Contact Information]. Reward awaits! 🙏 #LostAndFound #HelpMeFindMyBottle"} location={"OAT, DTU"} time={"2PM"} contact= {"1234567890"}/>
            <Losttab title={"Find a Bottle"} link={"https://images.unsplash.com/photo-1589365278144-c9e705f843ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} desc={" I misplaced a unique bottle with immense sentimental value. It holds precious memories, and I'm desperately hoping for its safe return. It has distinct features like [describe any unique characteristics]. If found, please contact me at [Your Contact Information]. Reward awaits! 🙏 #LostAndFound #HelpMeFindMyBottle"} location={"OAT, DTU"} time={"2PM"} contact= {"1234567890"}/>
        </div>
      </div>
    </>
  );
}
