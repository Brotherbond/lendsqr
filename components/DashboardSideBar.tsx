import { MouseEvent, useEffect, useState } from "react";
import Link, { LinkProps } from "next/link"
import Image from "next/image";
import routes from "@/util/routes";
import sideBarElements from "@/data/sideBar";
import styles from '@/styles/modules/dashboardLayout.module.scss';
import { cloneElement, ReactElement } from "react"
import { useRouter } from "next/router"

type ActiveLinkProps = LinkProps & {
    children: ReactElement
    activeClassName: string
}

const ActiveLink = ({
    children,
    activeClassName,
    ...rest
}: ActiveLinkProps) => {
    const { asPath } = useRouter()
    const childClassName = children.props.className ?? ""
    const newClassName = `${childClassName} ${activeClassName ?? ""}`
    const className = asPath === rest.href ? newClassName.trim() : ""
    console.log(className)

    return <Link {...rest}>{cloneElement(children, { className })}</Link>
}
const DashboardSideBar = (): JSX.Element => {

    return (
        <>
            <div className={`${styles.sideBar}`}>  <aside className=''>
                <nav>
                    <ul className={`${styles.categories}`}>
                        {sideBarElements.map((category) => (
                            <li className='' key={category.name}>
                                <div>{category.name}</div>
                                <ul className=''>
                                    {category.children.map((item) => (
                                        <li key={item.title} className={`${styles.item}`}>
                                            <ActiveLink activeClassName={`${styles.active}`} href={`${item.link}`}>
                                                <div className={`${styles.active}`} ><Image src={item.img} width={15} height={15} alt={item.title} />{item.title}</div>
                                            </ActiveLink>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            </div>
        </>
    )
}
export default DashboardSideBar 