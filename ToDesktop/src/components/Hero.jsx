

const Hero = () => {
  return (
    <main>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent" id="hero">
            <div className="max-w-4xl mx-auto px-6 pt-6 pb-32 flex flex-col sm:items-center sm:text-center" id="hero-container">
                <div className="flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group" id="version-text">
                    <div className="w-2 h-2 border bg-yellow-400 rounded-full border-yellow-600"></div>
                    <p className="font-display font-medium text-yellow-600">v0.21.1 <span className="text-yellow-800">Find-in-page bug-fixes</span></p>
                    <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transtion duration-300"></i>
                </div>
                <h1 className="text-4xl font-semibold leading-snug mt-4 sm:text-7xl sm:leading-normal">Web app to desktop app in minutes</h1>
                <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">Take your web app codebase and transfrom it into a cross platform desktop app with native fucntionality</p>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row " id="buttons-container">
                    <button className="px-8 py-3 font-semibold rounded-lg text-white bg-primary shadow-sm hover:bg-opacity-90">Download Now</button>
                    <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800">Read Docs</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero
