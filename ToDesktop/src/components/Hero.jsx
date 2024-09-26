import asset2 from "../assets/asset 2.svg";
import asset3 from "../assets/asset 3.png";
import asset4 from "../assets/asset 4.png";
import asset5 from "../assets/asset 5.png";
import asset6 from "../assets/asset 6.png";
import asset7 from "../assets/asset 7.png";
import asset8 from "../assets/asset 8.png";
import asset9 from "../assets/asset 9.png";
import asset10 from "../assets/asset 10.png";
import asset11 from "../assets/asset 11.png";
import asset12 from "../assets/asset 12.png";
import asset13 from "../assets/asset 13.png";
import asset14 from "../assets/asset 14.png";
import asset15 from "../assets/asset 15.png";
import asset16 from "../assets/asset 16.png";
import asset17 from "../assets/asset 17.png";
import asset18 from "../assets/asset 18.png";
import asset19 from "../assets/asset 19.png";
import asset20 from "../assets/asset 20.png";
import asset21 from "../assets/asset 21.png";
import asset22 from "../assets/asset 22.png";
import asset23 from "../assets/asset 23.png";
import asset24 from "../assets/asset 24.png";
import asset25 from "../assets/asset 25.png";
import asset26 from "../assets/asset 26.png";
import asset28 from "../assets/asset 28.png";
import asset37 from "../assets/asset 37.svg";
import asset32 from "../assets/asset 32.svg";
import asset33 from "../assets/asset 33.jpeg";
import asset34 from "../assets/asset 34.png";
import asset35 from "../assets/asset 35.png";
import asset36 from "../assets/asset 36.jpeg";
import brand from '../assets/asset-0.png'

import asset66 from "../assets/asset 66.svg";
import { useEffect } from "react";

const Hero = () => {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const line4 = document.getElementById('line4');

    const initialTranslateLTR = -48*4;
    const initialTranslateRTL = 36*4;

    // setupIntersectionObserver(line1, true, 0.15);
    // setupIntersectionObserver(line2, false, 0.15);
    // setupIntersectionObserver(line3, true, 0.15);
    // setupIntersectionObserver(line4, true, 0.15);

    const setupIntersectionObserver = (element, isLTR, speed)=> {
        const intersectionCallback = (entries)=> {
            const isIntersecting = entries[0].isIntersecting;
            if(isIntersecting){
                document.addEventListener('scroll',scrollHandler)
            } else{
                document.removeEventListener('scroll',scrollHandler)
            }
        }

        const intersectionObserver = new IntersectionObserver(intersectionCallback);
        intersectionObserver.observe(element);

        function scrollHandler(){
            const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

            let totalTranslate = 0;
            if(isLTR){
                totalTranslate = translateX + initialTranslateLTR;
            } else {
                totalTranslate = -(translateX + initialTranslateRTL);
            }             
            element.style.transform = `translateX(${totalTranslate}px)`;
        }
        console.log();
    } 
  return (
    <main className="mt-16">
        <div className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent" id="hero">
            <div className="max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center sm:pt-12" id="hero-container">
                <div className="flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group" id="version-text">
                    <div className="w-2 h-2 border bg-yellow-400 rounded-full border-yellow-600"></div>
                    <p className="font-display font-medium text-yellow-600">v0.21.1 <span className="text-yellow-800">Find-in-page bug-fixes</span></p>
                    <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transtion duration-300"></i>
                </div>
                <div className="hidden sm:flex gap-8 my-6" id="hero-features">
                    <div className="flex justify-center items-center gap-2 text-gray-500">
                        <i className="fa-regular fa-file-code text-sm"></i>
                        <p>Code Optinal</p>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-gray-500">
                        <i className="fa-solid fa-hand-back-fist text-sm"></i>
                        <p>Drag & drop builder</p>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-gray-500">
                        <i className="fa-solid fa-laptop text-sm"></i>
                        <p>Windows, Mac, Linux</p>
                    </div>
                </div>
                <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-7xl sm:leading-normal">Web app to desktop app in minutes</h1>
                <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">Take your web app codebase and transfrom it into a cross platform desktop app with native fucntionality</p>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row " id="buttons-container">
                    <button className="px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90">Download Now</button>
                    <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">Read Docs</button>
                </div>
            </div>
            <div className="flex flex-col gap-10" id="companies-container">
                <div className="flex justify-center gap-2" id="companies-title">
                    <img className="translate-y-2" src={asset2} alt="" />
                    <span className="font-medium">APPS POWERED BY TODESKTOP</span>
                    <img className="-scale-x-100 translate-y-2" src={asset2} alt="" />
                </div>
                <div className="flex flex-col gap-4" id="lines-group">
                    <div className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear" id="line1">
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">LifeAt</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset4} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">LifeAt</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset5} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Convy</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset6} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Morgen</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset7} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Campsite</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset8} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Rise</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset9} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">ClickUp</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset10} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Notion</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset11} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Sunsama</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset12} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Beeper</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset13} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Cal</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset14} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Webstudio</span>
                        </div>
                    </div>
                    <div className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear" id="line2">
                    <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset15} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset16} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset17} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset18} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset19} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset20} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Moises</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset21} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Basedash</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset22} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Cursor</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset23} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Linear</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset24} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Voiceflow</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset25} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Kitemaker</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset26} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Cron</span>
                        </div>
                    </div>
                    <div className="flex md:hidden gap-4 w-screen -translate-x-48 transition-transform ease-linear" id="line3">
                    <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                        <div className="flex flex-col min-w-24 min-h-24 items-center gap-2 justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32">
                            <img className="w-12 h-12 md:w-16 md:h-16" src={asset3} alt="" />
                            <span className="text-[12px] md:text-[16px] font-semibold">Unbounce</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* step by step */}
        <div id="steps" className="flex flex-col gap-6 container mt-20">
            <h2 className="text-5xl sm:font-semibold mb-14">How it Works</h2>
            <div id="step1" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step1</span>
                    <h3 className="text-4xl">Bootstrap straight from your web app</h3>
                    <p className="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Multiple windows</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Offline support</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Launch on startup</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Menubar/tray menus</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Customisable menus</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Tabs (Mac only)</a>
                        </li>
                    </ul>
                </div>
                <div className="pt-12">
                    <img src={asset66} alt="" />
                </div>
            </div>
            <div id="step2" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step2</span>
                    <h3 className="text-4xl">Bootstrap straight from your web app</h3>
                    <p className="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Multiple windows</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Offline support</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Launch on startup</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Menubar/tray menus</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Customisable menus</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Tabs (Mac only)</a>
                        </li>
                    </ul>
                </div>
                <div className="pt-12">
                    <img src={asset66} alt="" />
                </div>
            </div>
            <div id="step3" className="rounded-xl border px-8 py-12 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-medium font-display">Step3</span>
                    <h3 className="text-4xl">Bootstrap straight from your web app</h3>
                    <p className="text-lg font-light">Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Multiple windows</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Offline support</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Launch on startup</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Menubar/tray menus</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Customisable menus</a>
                        </li>
                        <li className="flex gap-4 items-center">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Tabs (Mac only)</a>
                        </li>
                    </ul>
                </div>
                <div className="pt-12">
                    <img src={asset66} alt="" />
                </div>
            </div>
        </div>

        {/* bento grid */}
        <div id="bento-grid" className="container">
            <h2 className="h2-style">ToDesktop handles the details</h2>
            <div id="grid-container" className="flex flex-col gap-6 lg:grid lg-grid-cols-3" style={{"grid-auto-rows": ""}}>

                <div className="row-start-1 row-end-3 group rounded-2xl gradient-hover-outer">
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Native Notifications</h3>
                        <img src={asset28} alt="" />
                    </div>
                </div>

                <div className="row-start-1 row-end-4 group rounded-2xl gradient-hover-outer">
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Auto Updates</h3>
                        <p className="text-lg text center font-light">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset28} alt="" />
                    </div>
                </div>

                <div className="row-start-1 row-end-3 group rounded-2xl gradient-hover-outer">
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Native Notifications</h3>
                        <img src={asset28} alt="" />
                    </div>
                </div>

                <div className="row-start-3 row-end-6 group rounded-2xl gradient-hover-outer">
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Auto Updates</h3>
                        <p className="text-lg text center font-light">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset28} alt="" />
                    </div>
                </div>

                <div className="row-start-4 row-end-6 group rounded-2xl gradient-hover-outer">
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Native Notifications</h3>
                        <img src={asset28} alt="" />
                    </div>
                </div>

                <div className="row-start-3 row-end-6 group rounded-2xl gradient-hover-outer">
                    <div className="bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center gradient-hover-inner">
                        <h3 className="text-2xl">Auto Updates</h3>
                        <p className="text-lg text center font-light">We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset28} alt="" />
                    </div>
                </div>
            </div>
        </div>

        {/* Companies Feature Line */}
        <div id="features-line" className="container mt-4">
            <div className="border rounded-lg overflow-hidden flex justify-center p-4">
                <div id="line4" className="flex gap-8 p-6">
                    <h3 className="whitespace-nowrap my-0 x-2 text-2xl font-semibold">Custom Menus</h3>
                    <span>.</span>
                    <h3 className="whitespace-nowrap my-0 x-2 text-2xl font-semibold">Multi-window-support</h3>
                    <span>.</span>
                    <h3 className="whitespace-nowrap my-0 x-2 text-2xl font-semibold">Trays</h3>
                    <span>.</span>
                    <h3 className="whitespace-nowrap my-0 x-2 text-2xl font-semibold">Deep Linking</h3>
                    <span>.</span>
                    <h3 className="whitespace-nowrap my-0 x-2 text-2xl font-semibold">Download Analytics</h3>
                    <span>.</span>
                </div>
            </div>
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="container">
            <h2 className="text-5xl sm:font-semibold md-14">Custom stories</h2>
            <div className="rounded-xl border flex flex-col lg:flex-row items-end mt-6">
                <div className="flex flex-col gap-12 p-8">
                    <div className="h-4 w-fit">
                        <img src={asset32} alt="" />
                    </div>
                    <h3 className="text-xl leading-relaxed">ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
                    <div id="tag-container" className="flex gap-3 flex-wrap">
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"></i>
                            <span className="font-display font-medium">Chromeless UI</span>
                        </div>
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"></i>
                            <span className="font-display font-medium">Native spellcheck</span>
                        </div>
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"></i>
                            <span className="font-display font-medium">Task time in menubar</span>
                        </div>
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"></i>
                            <span className="font-display font-medium">Notification count in the dock                            </span>
                        </div>
                        <div className="flex gap-2 items-center justify-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md text-yellow-800">
                            <i className="fa-solid fa-check"></i>
                            <span className="font-display font-medium">Global hotkey to create task</span>
                        </div>
                    </div>
                    <p className="text-lg font-light text-gray-500 ">“ToDesktop provided us with a <span className="text-black">polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span className="text-black">new and improved features</span> to our customers within days.”</p>
                    <div id="user-card" className="flex gap-4">
                        <div className="w-12">
                            <img src={asset33} className="rounded-full" alt="" />
                        </div>
                        <div className="flex flex-col">
                            <h3>Zeb Evans</h3>
                            <p className="text-gray-500">Founder & CEO, <a href="#" className="anchor-hover">ClickUp</a></p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={asset34} className="pl-16" alt="" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6">
                <div className="rounded-2xl p-6 gradient-hover-outer group flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                            <i className="fa-solid fa-code text-indigo-800"></i>
                        </div>
                        <h3 className="text-2xl font-semibold">Native APIs</h3>
                    </div>
                    <p className="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                    <div className="flex gap-4">
                        <div className="flex">
                            <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src={asset35} className="min-w-16 min-h-16" alt="" />
                            </div>
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                                <img src={asset36} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3>Rick Pastoor</h3>
                            <a href="#" className="anchor-hover w-fit text-gray-500">Rise</a>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl p-6 gradient-hover-outer group flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                            <i className="fa-solid fa-code text-indigo-800"></i>
                        </div>
                        <h3 className="text-2xl font-semibold">Native APIs</h3>
                    </div>
                    <p className="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                    <div className="flex gap-4">
                        <div className="flex">
                            <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src={asset35} className="min-w-16 min-h-16" alt="" />
                            </div>
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                                <img src={asset36} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3>Rick Pastoor</h3>
                            <a href="#" className="anchor-hover w-fit text-gray-500">Rise</a>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl p-6 gradient-hover-outer group flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                            <i className="fa-solid fa-code text-indigo-800"></i>
                        </div>
                        <h3 className="text-2xl font-semibold">Native APIs</h3>
                    </div>
                    <p className="text-lg font-light">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                    <div className="flex gap-4">
                        <div className="flex">
                            <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src={asset35} className="min-w-16 min-h-16" alt="" />
                            </div>
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                                <img src={asset36} alt="" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3>Rick Pastoor</h3>
                            <a href="#" className="anchor-hover w-fit text-gray-500">Rise</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rounded-xl flex flex-col bg-black lg:flex-row mt-6 pt-6 lg:pt-10">
                <div className="flex flex-col gap-4 lg:gap-8 p-8 lg:flex-1">
                    <span className="text-gray-400 font-display font-medium">READY TO START BUILDING?</span>
                    <h2 className="text-4xl text-white leading-tight lg:text-5xl">Create your desktop app for free*</h2>
                    
                    <p className="text-lg font-light text-gray-500 lg:text-xl">ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
                    <button className="bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 flex justify-center items-center gap-4">
                        <i className="fa-solid fa-download"></i>
                        <span>Download ToDesktop Builder</span>
                    </button>
                    <p className="text-gray-400 text-xs italic leading-tight">*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
                </div>
                <div className="lg:w-1/2">
                    <img src={asset34} className="pl-16" alt="" />
                </div>
            </div>
        </div>

        {/* Pricing */}
        <div id="pricing" className="container">
            <h2 className="text-5xl sm:font-semibold leading-normal max-w-2xl">Choose a plan that fits your needs</h2>
            <div className="flex flex-col lg:flex-row mt-6 gap-6">
                <div className="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
                    <h3 className="text-4xl">Free</h3>
                    <p className="text-lg font-light">For personal use or testing your app before deploying to customers.</p>
                    <p className="uppercase">Key Features</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-xmark text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-xmark text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                    </ul>
                    <button className="border px-8 py-3 text-primary rounded-lg hover:border-gray-800 font-display font-medium">
                        Read Docs
                    </button>
                </div>

                <div className="border flex-1 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
                    <h3 className="text-4xl">Essential</h3>
                    <p className="text-lg font-light">For simple desktop apps.</p>
                    <p className="text-lg font-light"><span className="text-2xl font-semibold">$99</span>/month</p>
                    <p className="uppercase">Key Features</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-xmark text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-xmark text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                    </ul>
                    <button className="border px-8 py-3 text-primary rounded-lg hover:border-gray-800 font-display font-medium">
                        Read Docs
                    </button>
                </div>

                <div className="relative flex-1 border rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:border-none lg:bg-slate-50">
                    <p className="text-blue-800 text-sm bg-indigo-100 rounded-full w-fit px-4 py-2 font-display font-semibold absolute top-0 right-8 -translate-y-1/2">Most Popular</p>
                    <h3 className="text-4xl">Professional</h3>
                    <p className="text-lg font-light">For sophisticated desktop apps.</p>
                    <p className="text-lg font-light"><span className="text-2xl font-semibold">$99</span>/month</p>
                    <p className="uppercase">Key Features</p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-xmark text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-xmark text-gray-500"></i>
                            <span className="text-lg font-light text-gray-800">Free for personal use</span>
                        </li>
                    </ul>
                    <button className="px-8 py-3 text-white bg-primary rounded-lg hover:bg-opacity-90 font-display font-medium">
                        Read Docs
                    </button>
                </div>
            </div>
        </div>

        {/* FAQs */}
        <div id="faq" className="container">
            <h2 className="h2-style">FAQs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
                <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <dt className="cursor-pointer flex justify-between items-center" aria-controls="faq1">
                        <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
                        <i className="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                    </dt>
                    <dd id="faq1" className="hidden text-lg font-light mt-6">
                        <p>
                        That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.
                        </p>
                    </dd>
                </div>
                <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <dt className="cursor-pointer flex justify-between items-center" aria-controls="faq2">
                        <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
                        <i className="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                    </dt>
                    <dd id="faq2" className="hidden text-lg font-light mt-6">
                        <p>
                        That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.
                        </p>
                    </dd>
                </div>
                <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <dt className="cursor-pointer flex justify-between items-center" aria-controls="faq3">
                        <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
                        <i className="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                    </dt>
                    <dd id="faq3" className="hidden text-lg font-light mt-6">
                        <p>
                        That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.
                        </p>
                    </dd>
                </div>
                <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <dt className="cursor-pointer flex justify-between items-center" aria-controls="faq4">
                        <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
                        <i className="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                    </dt>
                    <dd id="faq4" className="hidden text-lg font-light mt-6">
                        <p>
                        That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.
                        </p>
                    </dd>
                </div>
                <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <dt className="cursor-pointer flex justify-between items-center" aria-controls="faq5">
                        <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
                        <i className="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                    </dt>
                    <dd id="faq5" className="hidden text-lg font-light mt-6">
                        <p>
                        That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.
                        </p>
                    </dd>
                </div>
                <div className="group rounded-xl border border-gray-200 bg-gray-50 p-6">
                    <dt className="cursor-pointer flex justify-between items-center" aria-controls="faq6">
                        <p className="font-semibold text-lg">Is ToDesktop For Me?</p>
                        <i className="fa-solid fa-chevron-up -rotate-180 transition-transform"></i>
                    </dt>
                    <dd id="faq6" className="hidden text-lg font-light mt-6">
                        <p>
                        That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.
                        </p>
                    </dd>
                </div>
            </div>
        </div>

        <footer className="container">
            <div className="rounded-lg border lg:border-none lg:bg-gray-50 bg-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
                <a href="#" className="font-light font-display">Documentation</a>
                <div className="flex gap-8 text-lg">
                    <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fa-brands fa-github"></i></a>
                </div>
                <a href="#" id="brand" className="flex gap-2 items-center flex-1">
                    <img className="object-cover max-w-12 max-h-12" src={brand} alt="Logo" />
                    <span className="text-lg font-medium font-display">ToDesktop</span>
                </a>
            </div>
            <div id="sub-footer" className="flex flex-col gap-6 items-center justify-center my-12">
                <div className="flex gap-2 items-center">
                    <img className="w-4 h-4" src={asset37} alt="Y-combinator"/>
                    <p className="text-sm text-gray-600">A Y Combinator company.</p>
                </div>
                <p className="text-sm text-gray-400">© 2024 ToDesktop, Inc. All rights reserved.</p>
            </div>
        </footer>
    </main>
  )
}

export default Hero
