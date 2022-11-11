
import HTMLHead from '@/components/HTMLHead'
import { DefaultProps } from '@/util/types'
import DefaultHeader from '@/components/DefaultHeader'
import { Children } from 'react';


const Auth = ({ title, children }: DefaultProps): JSX.Element => {
    return <>
        <HTMLHead title={title} />
        <DefaultHeader />
        <main>
            <section>
                <div>
                    <form action="" method="post">
                        {Children.toArray(children)[0]}
                    </form>
                    <div>
                        {Children.toArray(children)[1]}
                    </div>
                </div>
            </section>
        </main>
    </>
}

export default Auth