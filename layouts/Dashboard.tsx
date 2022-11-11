
import DefaultHeader from '@/components/DefaultHeader'
import HTMLHead from '@/components/HTMLHead'
import { DefaultProps } from '@/util/types'

const Dashboard = ({title, children }: DefaultProps): JSX.Element => {
    return <>
    <HTMLHead title={title} />
        <main>
            <DefaultHeader />
            {children}
        </main>      
    </>
}

export default Dashboard