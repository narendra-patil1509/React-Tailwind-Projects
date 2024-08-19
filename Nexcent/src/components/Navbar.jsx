
import React, {useEffect, useState}from 'react';
// import logo from '../assets/log.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //set toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll =  () => {
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll',handleScroll);
        }
    });

    //navitems array
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Service", path: "service"},
        {link: "About", path: "about"},
        {link: "Product", path: "product"},
        {link: "Testimonial", path: "testimonial"},
        {link: "FAQ", path: "faq"}
    ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav>
            <div>
                <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img className='w-10 inline-block items-center' src="data:image/jpeg;base64,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" alt="" /> <span className='text-[#263238]'>NEXCENT</span></a>

                {/* nav items for large devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({Link, path}) => <Link to={path} key={path} spy={true} smooth={true} offset={-100} className='block text-base text-gray-300'>{Link}</Link> )
                    }
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
