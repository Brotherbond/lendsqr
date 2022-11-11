import DefaultHeader from '@/components/DefaultHeader'
import HTMLHead from '@/components/HTMLHead'
import { DefaultProps } from '@/util/types'


const Default = ({ title, children }: DefaultProps): JSX.Element => {
    return <>
        <HTMLHead title={title} />
        <DefaultHeader />
        <main>
            {children}
        </main>

    </>
}

export default Default