import React, { useState } from 'react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleScroll = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if(targetElement){
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top:offsetTop,
                behavior:"smooth"
            })
        }
        setIsMobileMenuOpen(false);
    }
  return (
    <div>
      
    </div>
  )
}

export default Navbar
