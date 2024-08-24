import React from 'react'
import aboutImg from '../assets/ComputerDesign.jpg';

const Products = () => {
  return (
    <div>
        {/* about text */}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id='product'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                    <p className='md:w-3/4 text-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas odit saepe fugiat fugit. Reiciendis assumenda laborum hic et, laudantium alias quibusdam ipsa minima quam voluptatibus?</p>
                    <button className='btn-primary'>Leran More</button>
                </div>
            </div>
        </div>

        {/* company stats */}
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id='testimonial'>
            <div className='flex flex-col md:flex-row justify-between items-center '>
                <div className='md:w-1/3'>
                {/* {Maecenas} */}
                    <img src="#" alt="" />
                </div>

                {/* stats */}
                <div className='md:w-2/3 mx-auto'>
                    <div>
                        <p className='md:4/5 text-sm text-neutralDGrey mb-8 leading-7'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur omnis ratione hic accusamus laudantium obcaecati atque quam ipsa iusto fugit animi, dolores deleniti in provident nam, quos tempore quisquam enim facilis eveniet totam officiis. Laborum similique excepturi inventore esse beatae?
                        </p>
                        <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                        <p className='text-base text-neutralDGrey mb-8'>British Dragon Boat Racing Association</p>
                        <div>
                            <div className='flex item-center gap-8 flex-wrap'>
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <img src="" alt="" />
                                <div className='flex items-center gap-8'>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>
                                        Meet all customers{" "}
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products
