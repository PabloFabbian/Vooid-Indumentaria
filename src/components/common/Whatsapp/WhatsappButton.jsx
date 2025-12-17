import React, { useEffect, useState } from "react";

function Whatsapp() {

  return (
    <a
      href="https://wa.me/91128605005"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[29px] right-[29px] rounded-full bg-green-500 shadow-lg transition-transform duration-300"
    >
      <img src="Whatsapp.webp" alt="WhatsApp" className="h-16 w-16" />
    </a>
  );
}

export default Whatsapp;