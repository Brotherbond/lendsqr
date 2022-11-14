
import DefaultHeader from '@/components/DefaultHeader'
import HTMLHead from '@/components/HTMLHead'
import { DefaultProps } from '@/util/types'
import DashboardSideBar from '@/components/DashboardSideBar'

const Dashboard = ({ title, children }: DefaultProps): JSX.Element => {
    return <>
        <HTMLHead title={title} />
        <main className='grey_bg h100v'>
            <DefaultHeader />
            <section className=''>
                <DashboardSideBar />
                {children}
            </section>
        </main>
    </>
}

export default Dashboard