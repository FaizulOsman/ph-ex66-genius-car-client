import React from "react";

const BannerItem = ({ banner }) => {
  const { image, prev, id, next } = banner;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full" alt="img" />
      </div>
      <div className="absolute left-5 top-1/3 pl-20">
        <h4 className="text-5xl font-semibold text-white mb-5">
          Affordable <br /> Price For Car <br /> Servicing
        </h4>
        <p className="text-white my-10">
          There are many variations of passages of available,
          <br /> but the majority have suffered alteration in some form
        </p>
        <div>
          <button className="btn btn-warning">Discover More</button>
          <button className="btn btn-success btn-outline ml-5">
            Latest Project
          </button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle mr-5 hover:btn-warning"
        >
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle hover:btn-warning">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
