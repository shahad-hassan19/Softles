import Image from "next/image";
import HeroImage from "@/public/Container.png";
import Separator from "@/public/Separator.png";


export default function Hero() {
    return (
        <div className="min-h-[38rem] w-full pt-[176px] bg-[#111319] flex flex-col items-center justify-between">
            <div className="w-full px-[10px] lg:px-[120px] flex flex-col-reverse md:flex-row justify-center place-content-between lg:gap-x-24 ">
                <div className="flex flex-col md:w-1/2 py-10 lg:py-0">
                    <p className="flex items-center text-base font-normal text-[#FFFEFE] opacity-85"><Image src={Separator} className="mr-[10px]" alt="separator"/> Welcome to</p>
                    <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-7xl leading-none md:leading-[64px] lg:leading-[101px] text-[#FFFEFE] opacity-90">UI UX Design<br/>Studio.</span>
                    <p className="text-[23px] leading-7 lg:leading-[34px] font-normal text-[#FFFEFE] max-w opacity-85">We are specialize in breaking down complexity to design seamless and engaging digital products.</p>
                </div>
                <Image src={HeroImage} alt="Hero Image"/>
            </div>
            <div className="w-full z-40 mb-[50px] flex items-center overflow-hidden relative">
                <div className="flex whitespace-nowrap animate-scroll">
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                </div>
                <div className="flex whitespace-nowrap animate-scroll">
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                </div>
                <div className="flex whitespace-nowrap animate-scroll">
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                    <span className="px-8 text-[#FFFEFE] opacity-85 text-xl leading-6 font-normal">
                        Business Website
                    </span>
                </div>
            </div>
        </div>
    )
}