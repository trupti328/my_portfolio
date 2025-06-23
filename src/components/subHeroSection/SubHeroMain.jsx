const SubHeroMain = () => {
  return (
    <div className="w-full border-y bg-brown border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 md:flex-row sm:flex-col items-center gap-4">
      <a
        href="/trupti2025.pdf"
        download
        className="bg-orange text-white px-6 py-2 rounded-xl text-base font-bold uppercase hover:bg-darkCyan transition-all duration-300"
      >
        Download CV
      </a>
    </div>
  );
};

export default SubHeroMain;
