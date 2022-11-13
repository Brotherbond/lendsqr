
import HTMLHead from '@/components/HTMLHead'
import { DefaultProps } from '@/util/types'
import DefaultHeader from '@/components/DefaultHeader'
import { Children } from 'react';
import styles from '@/styles/modules/auth.module.scss'


const Auth = ({ title, children }: DefaultProps): JSX.Element => {
    return <>
        <HTMLHead title={title} />
        <DefaultHeader />
        <main className='flex'>
            <section className={`${styles.auth} `}>
                <div className='none_t w50 '>
                    {Children.toArray(children)[0]}
                </div>
                <div className={`${styles.form}  `}>
                    <form action="" method="post">
                        {Children.toArray(children)[1]}
                    </form>
                </div>
            </section>
        </main>
    </>
}

export default Auth