import React, { useState } from 'react'
import useSWR from 'swr'

const CardBerita = ({ img, title, content }) => {
  return (
    <div className="space-y-8">
      <img
        src={`http://localhost:8000/storage/artikel/${img}`}
        alt="thumbnail"
        className="object-cover aspect-[3/2] rounded-2xl"
      />
      <h3 className="text-3xl font-bold uppercase text-secondary font-montserrat">
        {title}
      </h3>
      <p className="text-lg text-grey-dark font-inter">
        {content}
      </p>
      <div>
        <a href="#" className="font-bold font-montserrat text-primary">
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

const CardPegawai = ({ name, level, position }) => {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-bold uppercase text-secondary font-montserrat">
        {name}
      </h3>
      <p className="text-lg text-grey-dark font-inter">
        {level}
      </p>
      <p className="text-lg text-grey-dark font-inter">
        {position}
      </p>
      <div>
        <a href="#" className="font-bold font-montserrat text-primary">
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export const Berita = () => {
  const { data, error } = useSWR('http://localhost:8000/api/posts', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>Loading</div>
  const list_data = data.data.data
  
  return (
    <div className='container'>
      <div className="text-center">
        <h2 className="font-bold text-[48px] text-secondary font-montserrat">
          Berita <span className="text-primary">Terbaru</span>
        </h2>
        <p className="mt-2 text-lg text-grey-dark font-inter">
          Berita terbaru berhubungan dengan kegiatan civitas <br /> akademika di
          PCR University
        </p>
      </div>
      <div className="grid grid-cols-1 mt-20 mb-10 gap-x-10 gap-y-12 lg:grid-cols-3">
        {list_data.map(val => 
          <CardBerita
            img={val.image}
            title={val.title}
            content={val.content}
          />
        )}
      </div>
    </div>
  );
}

export const Pegawai = () => {
  const { data, error } = useSWR('http://localhost:5000/record', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>Loading</div>
  const list_data = data.data
  
  return (
    <div className='container'>
      <div className="text-center">
        <h2 className="font-bold text-[48px] text-secondary font-montserrat">
          Berita <span className="text-primary">Terbaru</span>
        </h2>
        <p className="mt-2 text-lg text-grey-dark font-inter">
          Berita terbaru berhubungan dengan kegiatan civitas <br /> akademika di
          PCR University
        </p>
      </div>
      <div className="grid grid-cols-1 mt-20 mb-10 gap-x-10 gap-y-12 lg:grid-cols-3">
        {list_data.map(val => 
          <CardPegawai
            name={val.name}
            level={val.level}
            position={val.position}
          />
        )}
      </div>
    </div>
  );
}