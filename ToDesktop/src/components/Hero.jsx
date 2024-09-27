

import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import CompaniesFeature from "./CompaniesFeature";
import BentoGrid from "./BentoGrid";
import Steps from "./Steps";
import LineApps from "./LineApps";

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
        <LineApps />

        {/* step by step */}
        <Steps />

        {/* bento grid */}
        <BentoGrid />

        {/* Companies Feature Line */}
        <CompaniesFeature />

        {/* Testimonials */}
        <Testimonials/>

        {/* Pricing */}
        <Pricing />

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

        
    </main>
  )
}

export default Hero
