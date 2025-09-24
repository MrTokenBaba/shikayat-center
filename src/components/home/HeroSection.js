"use client";

import {useState} from "react";
import { FaBeer } from "react-icons/fa";
import { VscAzure, VscBroadcast   } from "react-icons/vsc";

export default function HeroSection() {
    const [query, setQuery] = useState("");

    return (
        <div className="relative mx-auto flex flex-col gap-y-20 px-4 md:px-12 xl:px-16 lg:py-1 2xl:px-16 bg-plum">
            <div
                className="grid w-full grid-cols-1 lg:grid-cols-[55%,45%] 3xl:grid-cols-[3fr,2fr] gap-y-8 pb-8 2xl:px-16 gap-x-5 items-center py-10 lg:py-10">
                <div className="md:justify-self-center lg:justify-self-start">
                    <div className="space-y-8 lg:space-y-10 2xl:space-y-12">
                        <div className="space-y-4">
                            <h1 className="text-opacity-30 leading-[1.2] lg:font-bold text-[20px] font-bold sm:block sm:text-[3rem] md:text-[40px]
                            [@media(min-width:1240px)]:text-[45px] 3xl:text-[80px]">
                                <span className="text-white/[.8]">İstanbul Aydın Üniversitesi111111</span>
                                <span className="block text-white/[.8]">Geri Bildirim Sistemine<br/>Hoş Geldiniz.</span>
                            </h1>
                        </div>
                        <div className="text-[16px] md:text-[1.1rem] text-white/[.8]">
                            <p className={'text-2xl'}>Geri bildirimlerinizi bu sistemi kullanarak gönderebilirsiniz.
                                Geri bildiriminiz ilgili birim tarafından incelenerek en kısa sürede
                                yanıtlanacaktır. </p>
                        </div>
                        <div className="space-y-4">
                            <div
                                className="flex md:flex-row md:gap-6 gap-y-4 [@media(min-width:1200px)]:flex-row xl:gap-x-large justify-items-start">
                                <div className="flex gap-x-2 md:gap-x-5  text-white/[.8]">
                                    <div className="">
                                        <VscAzure  size={40} />
                                    </div>
                                    <div className="space-y-xxxsmall">
                                        <p className="text-[18px] font-[700] md:text-[24px] leading-[1] ">
                                            <span className=" text-white/[.8]">Memnuniyet Oranı </span>
                                            <span className="block "> 82 %</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-x-2 md:gap-x-5 md:mt-0 md:my-[0px] text-white/[.8]">
                                    <div className="">
                                        <VscBroadcast size={40}/>
                                    </div>
                                    <p className="text-[18px] md:text-[24px] font-[700] leading-[1]  ">
                                        <span className="block ">Sorunun Çözülme Oranı</span>
                                        <span className="block"> 80%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex md:items-center lg:space-x-8">
                            <div className="space-y-medium">
                                <div className="md:flex w-full md:flex-row">
                                    <div className="flex md:py-[1.3rem] md:mr-[30px] 2xl:py-[10px]">
                                        <a className="z-10 rounded-lg transition-all
                                  font-medium 2xl:px-6 2xl:py-[1.5rem] px-5 py-[1rem] md:py-[1.3rem] bg-red-500
                                   text-white overflow-hidden inline-flex whitespace-nowrap text-[1rem] w-[100%]"
                                           href="">Yeni Geri Bildirim Oluştur</a>
                                    </div>

                                    <div className="flex items-center space-x-2 bg-blue-100 mt-3 2xl:mt-[5px] p-3 md:py-[1.1rem] rounded-lg">
                                        <label>
                                            <input type="text" placeholder="Geri Bildirim Durumu"
                                                   className="px-5 2xl:px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-[100%] "/>
                                        </label>
                                        <button
                                            className="px-4 py-3 text-white  bg-blue-700 rounded-lg hover:bg-blue-600">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="lg:flex hidden overflow-hidden w-full justify-center items-center 2xl:-ml-20 3xl:ml-0 mb-24">
                    <div className="w-[750px]">
                        <img src="https://ubis.aydin.edu.tr/cdn/ubis/Themes/Feedback/Image/5156341_2696442.svg" alt=""/>
                    </div>
                </div>

                <div className="md:mx-auto md:block lg:block  hidden lg:mx-0 max-w-[550px] text-white text-opacity-80">

                </div>
                <div className="">
                    <div className="text-sm  opacity-90 text-white text-opacity-80  sm:grid md:mx-auto lg:mx-0 max-w-[500px] lg:max-w-[550px]
                    text-blurple grid auto-cols-auto grid-flow-col grid-rows-[auto,auto] items-center gap-x-6 gap-y-2 2xl:gap-x-10">
                        <div className="text-h2-mobile  font-semibold text-white">
                            <div className="inline-flex space-x-1"><span>8596</span>
                                <VscBroadcast size={40}/>
                            </div>
                        </div>
                        <span className="self-start lg:text-[1.1rem]">Başvurusu Sayısı</span>

                        <div className="text-h2-mobile font-semibold">
                            <div className="inline-flex  space-x-1"><span className="">40%</span>
                                <VscBroadcast size={40}/>
                            </div>
                        </div>
                        <span className="self-start lg:text-[1.1rem]">Memnuniyet Oranı </span>

                        <div className="text-h2-mobile font-semibold">
                            <div className="inline-flex  space-x-1"><span>39%</span>
                                <VscBroadcast size={40}/>
                            </div>
                        </div>
                        <span className="self-start lg:text-[1.1rem]">Sorunun Çözülme Oranı</span>

                    </div>
                </div>
            </div>
        </div>

    );
}
