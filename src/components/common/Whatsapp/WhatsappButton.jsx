import React from "react";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/91128605005"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[29px] right-[29px] z-50 rounded-full bg-green-500 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
    >
      <img
        src="/Whatsapp.webp"
        alt="WhatsApp"
        className="h-16 w-16"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://cdn-icons-png.flaticon.com/512/220/220236.png";
        }}
      />
    </a>
  );
}

export default WhatsappButton;