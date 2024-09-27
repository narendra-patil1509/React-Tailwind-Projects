import React from 'react'
import asset28 from "../assets/asset 28.png";

const BentoGrid = () => {
  return (
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
  )
}

export default BentoGrid
