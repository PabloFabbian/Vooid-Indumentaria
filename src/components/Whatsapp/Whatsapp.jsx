import React, { useEffect, useState } from "react";

function Whatsapp() {
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = document.querySelector("footer").offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= footerHeight - 100) {
        setIsNearFooter(true);
      } else {
        setIsNearFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="https://wa.me/91128605005"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-[29px] right-[29px] rounded-full bg-green-500 shadow-lg transition-transform duration-300 ${
        isNearFooter ? "translate-x-[-115px]" : ""
      }`}
    >
      <img src="Whatsapp.webp" alt="WhatsApp" className="h-16 w-16" />
    </a>
  );
}

export default Whatsapp;