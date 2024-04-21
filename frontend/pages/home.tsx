import {GridBackgroundDemo} from "../components/Hero";
import {HeroHighlightDemo} from "../components/we";
import {CardHoverEffectDemo} from "../components/services"
const Home = ()=>{
    return (
        <>

        <GridBackgroundDemo />
        <HeroHighlightDemo />
        <h1 className="mb-4 text-3xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 md:text-5xl lg:text-6xl">Our Services</h1>
        <CardHoverEffectDemo />
        </>
    )
}
export default Home

