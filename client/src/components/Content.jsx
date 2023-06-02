/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
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
        PCR University mengadakan workhsop tentang Framework dalam mengambangkan
        sistem. Harapannya mahasiswa bisa belajar lebih giat sehingga bisa
        menjadi developer.
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
  const [dataApi, setDataApi] = useState([])

  fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=4ccb5c14cc0446dbb4bf2f1e1d6d62c4")
    .then(res => res.json())
    .then(data => setDataApi(data))
    .catch(err => console.error(err))

  console.log(dataApi)

  return (
    <div className="container mt-10">
      <Heading />
      <div className="grid grid-cols-1 gap-x-10 gap-y-12 mt-20 mb-10 lg:grid-cols-3">
        {/* {data.articles.map((item) => 
          <Card title={item.title} />
        )} */}
        <Card title='Politeknik caltex riau laksanakan kegiatan workshop' />
        <Card title='Pengumuman penerima beasiswa provinsi riau tahun 2022' />
        <Card title='Prof. Hendriko menjadi guru besar pertama di PCR university' />
        <Card title='Prof. Hendriko menjadi guru besar pertama di PCR university' />
      </div>
    </div>
  );
};

export default Content;
