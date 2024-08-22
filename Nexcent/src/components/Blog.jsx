import React from 'react'

const Blog = () => {

    const blogs = [
        {id:1,title:"CReating Stremalined Safeguarding Processes with OneRen", image:"/src/assets/blog1.png"},
        {id:2,title:"CReating Stremalined Safeguarding Processes with OneRen", image:"/src/assets/blog1.png"},
        {id:3,title:"CReating Stremalined Safeguarding Processes with OneRen", image:"/src/assets/blog1.png"},
    ];
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>The unseen of spending three years at Pixelgrade</h2>
            <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit consequuntur soluta eos sunt quae quidem nihil id.</p>
        </div>

        {/* all blogs */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 item-center justify-between'>
            {
                blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src="#" className='hover:scale-95 transition-all duration-300' alt="" />
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounde-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                        <h3 className='mb-3 text-neutralDGrey font-semibold'>{blog.title}</h3>
                        <div className='flex items-center justify-center gap-8'>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>
                                        ReadMore{" "}
                                        <svg
                                            xmlns="http://www.w3.org/200/svg"
                                            width="17"
                                            height="11"
                                            viewBox="0 0 17 11"
                                            fill="none"
                                            className='inline-block ml-2'
                                            >
                                                <path
                                                d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                                                storke="#4CAF4F"
                                                />
                                            </svg>
                                    </a>
                                </div>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Blog
