import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LendsqrLogo from '@/images/logo.png'
import routes from "@/util/routes";
import styles from '@/styles/modules/defaultLayout.module.scss';


// import Image from "next/image";

const Header = (): JSX.Element => {
    const close: boolean = true
    const [nav, setNav] = useState(close)
    const NavOptions = (e: MouseEvent): void => {
        e.stopPropagation()
        setNav(!nav)
    }
    useEffect(() => {
        const resetHeader = () => setNav(close)
        window.addEventListener('click', resetHeader)
        return () => window.removeEventListener('click', resetHeader)
    }, [close])

    return (
        <>
            <header className={`${styles.header} w100`}>
                <Link href={routes.home} className={`${styles.logo}`}>
                    <Image src={LendsqrLogo} alt="Lendsqr Logo" width={125} />
                </Link>
                <Link href={routes.login} className={`button primary_bg white`} >
                    Login
                </Link>
            </header>
        </>
    )
}
export default Header 