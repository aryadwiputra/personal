import DashboardLayout from '@/Layouts/DashboardLayout'

const Index = () => {
    return (
        <>
            <p>Hello</p>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} title="Blog" />

export default Index
