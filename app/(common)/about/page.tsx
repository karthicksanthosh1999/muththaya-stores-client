import Hero from '@/components/custom/Hero'
import NumberSection from './_component/numberSection'
import TeamMember from './_component/teamMember'
import WhyChoose from './_component/whyChoose'

const page = () => {
    return (
        <div>
            <Hero page='About' bread={["Home", "About"]} />
            <WhyChoose />
            <NumberSection />
            <TeamMember />
        </div>
    )
}

export default page
