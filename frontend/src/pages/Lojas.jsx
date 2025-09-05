import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Lojas = () => {
  const [lojas, setLojas] = useState([]);

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;
  const mapCenter = [-23.55052, -46.633308];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/lojas`)
      .then((response) => response.json())
      .then((data) => setLojas(data))
      .catch((error) => console.error("Erro ao buscar carros:", error));
  }, []);

  return (
    <>
      <div className="px-5 lg:max-w-[80%] w-full flex flex-col gap-10 text-5xl font-black py-10">
        <div className="flex items-center gap-2.5">
          <h1 className="uppercase ">lojas</h1>
          <span className="h-1 w-full bg-red-600"></span>
        </div>

        <div className="flex flex-col lg:flex-row bg-[rgba(0,0,0,0.85)] items-center justify-center">
          <div className="p-10 flex flex-col gap-10 rounded-sm min-w-1/3">
            {lojas.map((e, index) => (
              <div key={index} className="text-white text-2xl font-bold">
                <h4>{e.nome}</h4>

                <address>{e.endereco}</address>

                <p>{e.telefone}</p>
              </div>
            ))}
          </div>

          <div className="w-full h-100 rounded-sm overflow-hidden p-4 !z-1">
            <MapContainer center={mapCenter} zoom={12} className="h-full w-full">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lojas;
