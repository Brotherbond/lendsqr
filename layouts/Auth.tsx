
import HTMLHead from '@/components/HTMLHead'
import { DefaultProps } from '@/util/types'
import DefaultHeader from '@/components/DefaultHeader'
import { Children } from 'react';


const Auth = ({ title, children }: DefaultProps): JSX.Element => {
    return <>
        <HTMLHead title={title} />
        <DefaultHeader />
        <main>
            <section className='flex_r'>
                <div className='flex'>
                    {Children.toArray(children)[0]}
                </div>
                <div>
                    <form action="" method="post">
                        {Children.toArray(children)[1]}
                    </form>
                </div>
            </section>
        </main>
    </>
}

export default Auth