import type { NextPage } from 'next'
import Link from 'next/link'
import Default from "@/layouts/Default"


const Custom404: NextPage = () => {
    return (
        <Default title='Error 404'>
            <div className='flex_cr error'>
                <h1 className=''>404 -Page Not Found
                </h1>
                    <p><Link href="/">Let me take you home</Link></p>
            </div>
        </Default>
    )
}




export default Custom404