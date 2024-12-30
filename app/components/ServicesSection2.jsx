"use client";

import { useState, React } from 'react';
import Image from "next/image";
import Separator from "@/public/Separator.png";
import Travel from "@/public/Travel.png";
import Agritech from "@/public/Agritech.png";
import Education from "@/public/Education.png";
import AgriTechImg from "@/public/AgriTechImg.png";



export default function ServicesSection2() {
    let [tab, setTab] = useState("Travel");
    let [activeTab, setActiveTab] = useState("Travel");
    return (
        <div className="min-h-[38rem] px-[10px] lg:px-[120px] w-full py-[90px] bg-[#111319] text-[#FFFFFF] flex flex-col justify-center place-content-between">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 font-bold text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px]">We are more than our words</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-center place-content-between lg:gap-x-10 mt-9">
                <div className="bg-[#191C26] min-h-[387px] w-full lg:w-[357px] p-[26px]">
                    <h2 className="font-normal text-lg leading-[32.22px] mb-[26px]">Industry  or Domain</h2>
                    <ul className="flex flex-col gap-[10px] md:gap-5 gap-y-[60px]">
                        <li className={`cursor-pointer font-normal text-base inline-flex items-center gap-x-5 ${activeTab === 'Travel' ? ' bg-opacity-70' : ''}`}
                            onClick={()=>{
                                setTab("Travel");
                                setActiveTab("Travel")
                                }
                            }
                        >
                            <Image src={Travel} alt="Travel" />
                            Travel
                        </li>
                        <li className={`cursor-pointer font-normal text-base inline-flex items-center gap-x-5 ${activeTab === 'Agritech' ? 'bg-opacity-70' : ''}`}
                            onClick={()=>{
                                setTab("Agritech");
                                setActiveTab("Agritech")
                                }
                            }
                        >
                            <Image src={Agritech} alt="Agritech" />
                            Agritech, Oil & Gas, NGO
                        </li>
                        <li className={`cursor-pointer font-normal text-base inline-flex items-center gap-x-5 ${activeTab === 'Education' ? 'bg-opacity-70' : ''}`}
                            onClick={()=>{
                                setTab("Education");
                                setActiveTab("Education")
                                }
                            }
                        >
                            <Image src={Education} alt="Education" />
                            Education
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-[807px] bg-[#191C26] min-h-[387px] p-[26px]">
                    {
                        tab == "Travel" &&
                            <div className="flex flex-col items-center gap-y-6">
                                <Image src={AgriTechImg} alt="Image" className="opacity-30"/>
                                <div className="flex justify-center gap-x-[2.5px]">
                                    <div className={`rounded-full ${activeTab === "Travel" ? "bg-[#b12828] w-[12px] h-[12px]" : "bg-[#D9D9D9] w-[11px] h-[11px]"}`}></div>
                                    <div className={`rounded-full ${activeTab === "Agritech" ? "bg-[#b12828] w-[12px] h-[12px]" : "bg-[#D9D9D9] w-[11px] h-[11px]"}`}></div>
                                    <div className={`rounded-full ${activeTab === "Education" ? "bg-[#b12828] w-[12px] h-[12px]" : "bg-[#D9D9D9] w-[11px] h-[11px]"}`}></div>
                                </div>
                            </div>
                    }
                    {
                        tab == "Agritech" &&
                            <div className="flex flex-col items-center gap-y-6">
                                <Image src={AgriTechImg} alt="Image"/>
                                <div className="flex justify-center gap-x-[2.5px]">
                                    <div className={`rounded-full ${activeTab === "Travel" ? "bg-[#b12828] w-[12px] h-[12px]" : "bg-[#D9D9D9] w-[11px] h-[11px]"}`}></div>
                                    <div className={`rounded-full ${activeTab === "Agritech" ? "bg-[#b12828] w-[12px] h-[12px]" : "bg-[#D9D9D9] w-[11px] h-[11px]"}`}></div>
                                    <div className={`rounded-full ${activeTab === "Education" ? "bg-[#b12828] w-[12px] h-[12px]" : "bg-[#D9D9D9] w-[11px] h-[11px]"}`}></div>
                                </div>
                            </div>
                    }
                    {
                        tab == "Education" &&
                            <div className="flex flex-col items-center gap-y-6">
                                <Image src={AgriTechImg} alt="Image" className="opacity-70"/>
                                <div className="flex justify-center gap-x-[2.5px]">
                                    <div className={`rounded-full ${activeTab === "Travel" ? "bg-[#b12828] w-[12px] h-[12px]" : "bg-[#D9D9D9] w-[11px] h-[11px]"}`}></div>
                                    <div className={`rounded-full ${activeTab === "Agritech" ? "bg-[#b12828] w-[12px] h-[12px]" : "bg-[#D9D9D9] w-[11px] h-[11px]"}`}></div>
                                    <div className={`rounded-full ${activeTab === "Education" ? "bg-[#b12828] w-[12px] h-[12px]" : "bg-[#D9D9D9] w-[11px] h-[11px]"}`}></div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}