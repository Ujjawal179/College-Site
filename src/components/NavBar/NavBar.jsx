import Link from 'next/link';
import Style from "./NavBar.module.css";
import { Button } from "../Button/Button";

export function NavBar(){
    return (
        <navbar className={Style.navbar}>
            
            <ul className={Style.logo}><span>LOGO</span></ul>
            <ul className={Style.navitem}><Link href={`/`}>HOME</Link > </ul>
            <ul className={Style.navitem}><Link href={`/contact`}>SHOP</Link > </ul>
            <ul className={Style.navitem}> <Link href={`/contact`}>Contact Us</Link > </ul>
            <ul className={Style.signin}> <Link href={`/signin`}> <Button text={"Sign In"}/></Link> </ul>
        </navbar>
    )

}