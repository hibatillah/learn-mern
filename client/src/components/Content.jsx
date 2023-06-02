/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { people } from "../assets";

const Heading = () => {
  return (
    <div className="text-center">
      <h2 className="font-bold text-[48px] text-secondary font-montserrat">
        Berita <span className="text-primary">Terbaru</span>
      </h2>
      <p className="mt-2 text-lg text-grey-dark font-inter">
        Berita terbaru berhubungan dengan kegiatan civitas <br /> akademika di
        PCR University
      </p>
    </div>
  );
};

const Card = ({ title }) => {
  return (
    <div className="space-y-8">
      <img
        src={people}
        alt="thumbnail"
        className="object-cover aspect-[3/2] rounded-2xl"
      />
      <h3 className="text-3xl font-bold uppercase text-secondary font-montserrat">
        {title}
      </h3>
      <p className="text-lg text-grey-dark font-inter">
        PCR University mengadakan workshop tentang framework dalam mengembangkan sistem. Harapannya mahasiswa bisa belajar lebih giat sehingga bisa menjad developer.
      </p>
      <div>
        <a href="#" className="font-bold font-montserrat text-primary">
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="container mt-10">
      <Heading />
      <div className="grid grid-cols-1 mt-20 mb-10 gap-x-10 gap-y-12 lg:grid-cols-3">
        <Card title='Politeknik caltex riau laksanakan kegiatan workshop' />
        <Card title='Pengumuman penerima beasiswa provinsi riau tahun 2022' />
        <Card title='Prof. Hendriko menjadi guru besar pertama di PCR university' />
      </div>
    </div>
  );
};

export default Content;
