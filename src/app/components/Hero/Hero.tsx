import React from "react";
import style from "./HeroStyle.module.css";
import classNames from "classnames";

function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <video
        className={classNames(style["video-background"])}
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          type="video/mp4"
          src="https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/video/apn.mp4"
        />
      </video>
      <div
        className={classNames(
          "absolute top-0 left-0 w-full h-full bg-black opacity-50"
        )}
      ></div>
      <div
        className={classNames(
          "relative z-2 text-white text-2xl px-20 flex flex-col justify-end h-full py-20 gap-6"
        )}
      >
        <h1 className="text-7xl">Perkebunan Nusantara</h1>
        <h2 className="text-xl">
          Kekuatan utama dalam agribisnis yang beragam dan berstandar
          internasional
        </h2>
      </div>
    </section>
  );
}

export default Hero;
