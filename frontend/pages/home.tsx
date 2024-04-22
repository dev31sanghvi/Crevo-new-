import {GridBackgroundDemo} from "../components/Hero";
import {HeroHighlightDemo} from "../components/we";
import {CardHoverEffectDemo} from "../components/services"
const Home = ()=>{
    return (
        <>

        <GridBackgroundDemo />
        <HeroHighlightDemo />
        <h1 className="mb-4 text-3xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 md:text-5xl lg:text-6xl">Our Services</h1>
        <CardHoverEffectDemo />
        </>
    )
}
export default Home

