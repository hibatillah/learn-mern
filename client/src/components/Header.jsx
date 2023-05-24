import React from "react";
import { logo, hero, graduate, card, building } from "../assets";

const Navigasi = () => {
  const menu = ["Beranda", "Program Studi", "Berita", "Fasilitas"];

  return (
    <nav className="container flex items-center justify-between border-b border-grey-dark">
      <div id="menu" className="flex gap-10">
        <img src={logo} alt="logo" className="w-[180px]" />
        <ul className="flex gap-5">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`${
                  item === "Beranda"
                    ? "text-secondary font-bold"
                    : "text-grey-dark"
                } font-inter font-medium`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id="daftar">
        <a href="#">
          <div className="btn btn-primary">Daftar</div>
        </a>
      </div>
    </nav>
  );
};

const JudulCaption = () => {
  return (
    <div className="container grid grid-cols-2 mt-28">
      <div id="judul_caption">
        <div
          id="label_pcr_squad"
          className="px-6 py-3 text-sm rounded-lg w-fit bg-grey-light font-inter text-primary"
        >
          Hi, PCR Squad
        </div>
        <h1
          id="judul_besar"
          className="mt-4 text-[60px]/[64px] font-montserrat font-bold"
        >
          Selamat Datang di <span className="text-primary">PCR University</span>
        </h1>
        <p
          id="caption"
          className="w-3/4 mt-4 text-lg font-inter text-grey-dark"
        >
          Politeknik swasta terbaik nasional dengan fasilitas kampus yang
          lengkap dan lingkungan kampus yang asri.
        </p>
        <div id="tombol_utama" className="flex gap-5 mt-16">
          <div className="btn btn-primary">Tentang PCR</div>
          <div className="btn btn-secondary">Virtual Tour</div>
        </div>
      </div>
      <div id="gambar" className="relative">
        <div className="z-0 w-full">
          <img src={hero} alt="people" className="z-0 pointer-events-none" />
        </div>
        <Banner
          img={building}
          label="Budaya"
          desc="Disiplin, kebersamaan dan cinta lokasi"
          custom="w-[300px] bottom-[20%] -left-16"
        />
        <Banner
          img={graduate}
          label="Akreditasi"
          desc="70% Akreditasi prodi di PCR sudah terakreditasi A"
          custom="w-[350px] -top-14 left-1/2 -translate-x-1/2"
        />
        <Banner
          img={card}
          label="Perkuliahan"
          desc="70% kegiatan perkuliahan dilaksanakan secara praktik"
          custom="w-[320px] bottom-[8%] -right-12"
        />
      </div>
    </div>
  );
};

const Banner = ({ img, label, desc, custom }) => {
  return (
    <div
      className={`flex gap-4 px-5 py-3 bg-white items-center leading-tight shadow-xl rounded-xl absolute z-50 ${custom}`}
    >
      <img src={img} alt="icons" className="w-12 h-12" />
      <div className="font-inter">
        <div className="text-sm capitalize text-grey-dark/70">{label}</div>
        <p className="font-medium text-grey-dark">{desc}</p>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <Navigasi />
      <JudulCaption />
    </>
  );
};

export default Header;
