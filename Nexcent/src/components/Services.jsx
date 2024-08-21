import React from 'react'

const Services = () => {

    const services = [
        {id: 1, title:"Membership Organisations", description: "Our membership management software provides full automation of membership renewal and payments", image:"/src/assets/icons/membership.png"},
        {id: 2, title:"Membership Organisations", description: "Our membership management software provides full automation of membership renewal and payments", image:"/src/assets/icons/membership.png"},
        {id: 3, title:"Membership Organisations", description: "Our membership management software provides full automation of membership renewal and payments", image:"/src/assets/icons/membership.png"},
    ];

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      <div className="text-center my-8">
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>

        {/* client logos */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
            <img src="/src/assets/comapany1.png" alt="" />
            <img src="/src/assets/comapany1.png" alt="" />
            <img src="/src/assets/comapany1.png" alt="" />
            <img src="/src/assets/comapany1.png" alt="" />
            <img src="/src/assets/comapany1.png" alt="" />
            <img src="/src/assets/comapany1.png" alt="" />
            <img src="/src/assets/comapany1.png" alt="" />
        </div>
      </div>

      {/* services card */}
      <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Manage your entirre community in a single system</h2>
        <p className='text-neutralGrey'>Who is Nextcent suitable for?</p>
      </div>

      {/* cards */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
      {
        services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
            <div>
                <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounde-br-3xl'>
                    <img src="#" alt="" className='-mt-5'/>
                </div>
                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                <p className='text-sm text-neutralGrey'>{service.description}</p>
            </div>
        </div>)
      }
      </div>
    </div>
  )
}

export default Services
