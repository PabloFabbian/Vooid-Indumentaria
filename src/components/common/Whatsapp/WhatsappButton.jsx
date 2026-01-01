import React from "react";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/91128605005"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:bottom-[18px] 2xl:bottom-[29px] md:right-[18px] 2xl:right-[29px] z-40 rounded-full bg-green-500 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
    >
      <img
        src="/Whatsapp.webp"
        alt="WhatsApp"
        className="md:h-14 2xl:h-16 md:w-14 2xl:w-16"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://cdn-icons-png.flaticon.com/512/220/220236.png";
        }}
      />
    </a>
  );
}

export default WhatsappButton;