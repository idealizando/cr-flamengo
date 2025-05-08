import React from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section
      className="relative w-full h-[240px] flex flex-col items-center justify-center bg-cover bg-center"

    >
      <div className="text-center">
        {title && <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">{title}</h2>}
        {subtitle && <p className="mt-4 text-lg text-white drop-shadow-md">{subtitle}</p>}
      </div>
    </section>
  );
};

export default HeroSection;
