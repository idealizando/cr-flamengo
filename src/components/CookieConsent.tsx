"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookie_consent");
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white text-sm px-4 py-3 flex flex-col sm:flex-row justify-between items-center z-50 shadow-lg">
      <p className="mb-2 sm:mb-0">
        Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
        <a href="/privacidade" className="underline hover:text-gray-300">Política de Privacidade</a>.
      </p>
      <button
        onClick={handleAccept}
        className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
      >
        Aceitar
      </button>
    </div>
  );
}
