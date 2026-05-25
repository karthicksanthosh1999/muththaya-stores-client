import TitleSection from "@/components/custom/title-section";
import { teamMembers } from "@/data/data";
import Image from "next/image";

const TeamMember = () => {
    return (
        <>

            <TitleSection title="Team Member" description="We have awesome team member to support." />
            <div className="flex items-center justify-center mb-10 mt-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-2">
                    {
                        teamMembers.map((item) => (
                            <div className="group" key={item.id}>
                                <div className="relative overflow-hidden rounded-xl mb-4">
                                    <Image height={100} width={100} src={item.image} alt="Team member" className="w-full aspect-3/4 object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                                    <p className="text-[#F0B100] font-medium">{item.role}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* <TeamCarouselS /> */}
            </div>

        </>
    )
}
export default TeamMember;