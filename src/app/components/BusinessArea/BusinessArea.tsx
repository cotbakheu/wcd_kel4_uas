import React from "react";
import Image from "next/image";
import { MdMyLocation } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import classNames from "classnames";
import style from "./BusinessAreaStyle.module.css";
import Link from "next/link";

type LocationProps = {
  coord: {
    x: number;
    y: number;
  };
  image: string;
  size?: {
    x: number;
    y: number;
  };
  regional: number;
};

function Location({ coord, image, size, regional }: LocationProps) {
  return (
    <Link
      href={"#"}
      className="absolute"
      style={{ top: coord.y, left: coord.x }}
    >
      <div
        className={classNames(
          style["location-container"],
          "relative cursor-pointer"
        )}
      >
        <MdMyLocation className="w-8 h-8" />
        <div className={classNames(style["marker"])}>
          <p className="font-bold w-52">Regional {regional}</p>
          <div className="relative">
            <div className=" absolute top-[4px] left-[12px] w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center">
              <Image
                src={image}
                width={size?.x || 35}
                height={size?.y || 35}
                alt="logo"
              />
            </div>
            <FaLocationPin className={classNames("w-16 h-16")} />
          </div>
        </div>
      </div>
    </Link>
  );
}

function BusinessArea() {
  const locationData = [
    {
      coord: {
        x: 30,
        y: 150,
      },
      image:
        "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/aset_2.png",
      regional: 6,
    },
    {
      coord: {
        x: 70,
        y: 180,
      },
      image:
        "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/aset_3.png",
      regional: 1,
    },
    {
      coord: {
        x: 230,
        y: 350,
      },
      image:
        "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/aset_4.png",
      regional: 7,
    },
    {
      coord: {
        x: 300,
        y: 430,
      },
      image:
        "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/aset_5.png",
      regional: 2,
    },
    {
      coord: {
        x: 355,
        y: 440,
      },
      size: {
        x: 20,
        y: 20,
      },
      image:
        "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/aset_6.png",
      regional: 3,
    },
    {
      coord: {
        x: 410,
        y: 450,
      },
      image:
        "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/aset_7.png",
      regional: 5,
    },
    {
      coord: {
        x: 440,
        y: 445,
      },
      image:
        "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/aset_8.png",
      regional: 4,
    },
    {
      coord: {
        x: 620,
        y: 370,
      },
      image:
        "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/aset_9.png",
      regional: 8,
    },
  ];
  return (
    <section className="mt-32" id="business-area">
      <h3 className="uppercase text-2xl text-center font-semibold">
        Wilayah Kerja
      </h3>
      <div className="flex justify-center">
        <div className="relative w-[80%]" style={{ aspectRatio: "16/9" }}>
          <Image
            src="https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/map/map.png"
            alt="map"
            fill
            style={{ objectFit: "contain" }}
          />
          {locationData.map((item, index) => (
            <Location
              key={index}
              coord={item.coord}
              image={item.image}
              size={item.size}
              regional={item.regional}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessArea;
