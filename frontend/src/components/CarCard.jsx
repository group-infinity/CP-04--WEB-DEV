function CarCard({ nome, preco, imagem }) {
  return (
    <div className="bg-[rgba(0,0,0,0.85)] rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all w-full lg:w-[49%] shadow-[0px_0px_20px_-1px_rgba(0,0,0,0.75)]">
      <div className="p-2">
        <img src={imagem} alt={nome} className="w-full h-56 object-cover rounded-[8px]" />
      </div>
      <div className="p-5">
        <h3 className="text-3xl font-bold text-white">{nome}</h3>
        <p className="text-xl text-red-600 font-semibold">{preco}</p>
        <button className="mt-4 w-full py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 cursor-pointer text-2xl">Ver Detalhes</button>
      </div>
    </div>
  );
}

export default CarCard;
