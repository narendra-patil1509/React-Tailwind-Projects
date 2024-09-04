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
import { useEffect } from "react";

const Hero = () => {
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');

    const initialTranslateLTR = -48*4;
    const initialTranslateRTL = 36*4;

    // setupIntersectionObserver(line1, true, 0.15);
    // setupIntersectionObserver(line2, false, 0.15);
    // setupIntersectionObserver(line3, true, 0.15);

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
    <main>
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
        <div className="h-[1000px]"></div>
    </main>
  )
}

export default Hero
