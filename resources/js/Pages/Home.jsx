import Hero from '@/Components/Frontend/Hero/Index'
import AppLayout from '@/Layouts/AppLayout'

const Home = () => {
    return (
        <>
            <Hero />
        </>
    )
}

Home.layout = page => <AppLayout children={page} title="Home" />

export default Home
