"use client";
import Image from "next/image";
import Separator from "@/public/Separator.png";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function ServicesSection4() {
    return (
        <div className="min-h-[38rem] p-[10px] lg:px-[120px] w-full py-[90px] bg-[#111319] flex flex-col justify-center place-content-between">
            <div className="flex flex-col">
                <p className="flex items-center text-base font-normal text-[#FFFFFF]"><Image src={Separator} className="mr-[10px]" alt="separator"/> Our Services</p>
                <span className="mt-2 lg:mt-5 mb-4 lg:mb-0 text-3xl md:text-[53px] lg:text-[64px] leading-none md:leading-[64px] lg:leading-[76.8px] text-[#FFFFFF]">What our Client&apos;s Say</span>
            </div>
            <div className="mt-9">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        dynamicBullets: true,
                        pagination: true,
                    }}
                    modules={[Pagination]}
                    className="w-full text-white min-h-[387px] bg-[#191C26]"
                >
                    <SwiperSlide className="flex justify-center items-center">
                        1
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        2
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        3
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
