import React from 'react'

const Pricing = () => {
  return (
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
  )
}

export default Pricing
