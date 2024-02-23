import Link from 'next/link';
import Style from "./NavBar.module.css";
import { Button } from "../Button/Button";

export function NavBar(){
    return (
        <div className={Style.nav}>
        <navbar className={Style.navbar}>
            
            <ul className={Style.logo}><span>ClassHUB</span></ul>
            <ul className={Style.navitem}><Link href={`/`}>HOME</Link > </ul>
            <ul className={Style.navitem}><Link href={`/attendance`}>Attendance</Link > </ul>
            <ul className={Style.navitem}><Link href={`/lost`}>Lost-Found</Link > </ul>
            <ul className={Style.navitem}><Link href={`/opportunities`}>Opportunities</Link > </ul>
            <ul className={Style.navitem}> <Link href={`/alert`}>Alerts!</Link > </ul>
            <ul className={Style.signin}> <Link href={`/signin`}> <Button text={"Sign In"}/></Link> </ul>

        </navbar>

        <div><button  className={Style.btn} class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <Link href="/alert">SOS-Alert</Link>
     </button></div>
        </div>
    )

}