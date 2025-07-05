import React from "react";
import style from "./VisionAndMissionStyle.module.css";
import classNames from "classnames";
import Image from "next/image";

function VisionAndMission() {
  return (
    <div
      className={classNames(
        style["container"],
        "flex items-center flex-col py-20 gap-10"
      )}
    >
      <div>
        <Image
          src="https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/logo/membern1.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="text-center">
        <h4 className="text-3xl font-semibold mb-4">Visi</h4>
        <p>
          &quot;Menjadi perusahaan agribisnis terdiversifikasi yang unggul dan
          berdaya saing global&quot;.
        </p>
        <div className="flex justify-center  gap-10 mt-20">
          <div className="w-[210px] h-max flex flex-col items-center justify-between">
            <Image
              src={
                "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/map/optimalisasi.png"
              }
              width={200}
              height={200}
              alt="gambar"
            />
            <p className="text-center font-semibold">Optimalisasi Aset</p>
          </div>
          <div className="w-[210px] flex flex-col items-center">
            <Image
              src={
                "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/map/pengelolaan.png"
              }
              width={200}
              height={200}
              alt="gambar"
            />
            <p className="text-center font-semibold">
              Pengelolaan Tanaman Perkebunan
            </p>
          </div>
          <div className="w-[210px] flex flex-col items-center">
            <Image
              src={
                "https://ptpn1.co.id/wp-content/themes/logistic_new/asset_apn/map/tourism.png"
              }
              width={200}
              height={200}
              alt="gambar"
            />
            <p className="text-center font-semibold">
              Green Business & Eco-Edu Tourism
            </p>
          </div>
        </div>
        <h4 className="text-3xl font-semibold mb-4 mt-20">Misi</h4>
        <div className="flex justify-center">
          <ul className="list-disc text-left w-1/2">
            <li>Menyediakan produk yang berkualitas bagi pelanggan.</li>
            <li>
              Meningkatkan kapabilitas proses kerja yang unggul (operational
              excellence) dan pemanfaatan aset yang optimal untuk memberikan
              imbal hasil (return) yang terbaik.
            </li>
            <li>
              Menciptakan lingkungan budaya kerja terbaik untuk mewujudkan
              kontribusi optimal dari setiap karyawan.
            </li>
            <li>
              Meningkatkan peran sebagai agent of developement melalui kegiatan
              bisnis yang berwawasan lingkungan, dengan tatakelola perusahaan
              yang baik.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VisionAndMission;
