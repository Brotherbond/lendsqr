import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import routes from "@/util/routes";
import sideBarElements from "@/data/sideBar";
import styles from '@/styles/modules/dashboardLayout.module.scss';


const DashboardSideBar = (): JSX.Element => {

    return (
        <>
            <div className={`${styles.sideBar}`}>  <aside className=''>
                <nav>
                    <ul>
                        {sideBarElements.map((category) => (
                            <li className='' key={category.name}>
                                <div>{category.name}</div>
                                <ul className=''>
                                    {category.children.map((item) => (
                                        <li key={item.title}>
                                            <Link href={item.link}>
                                                <div className="flex_r"><Image src={item.img} width={15} height={15} alt={item.title} />{item.title}</div>
                                            </Link>
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