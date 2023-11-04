import { useNavigate } from "react-router-dom";

const NuevoCliente = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3 text-gray-700 text-base">
        Llena todos los campos para registrar un nuevo cliente
      </p>
      <div className="flex justify-end mt-5">
        <button
          className="bg-blue-800 py-2 px-4 text-white font-bold uppercase rounded text-sm hover:bg-blue-900"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 px-5 py-10 ">
        <p className="font-bold text-gray-800 text-xl mb-5">Formulario aqui</p>
      </div>
    </>
  );
};

export default NuevoCliente;
