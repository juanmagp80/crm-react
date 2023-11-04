import React from "react";

const Cliente = ({ cliente }) => {
  const { nombre, empresa, email, telefono, id } = cliente;
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className=" text-2xl text-gray-800 px-4 py-2">{nombre}</p>
        <p className=" text-gray-800 px-4 py-2">{empresa}</p>
      </td>
      <td className="p-6">
        <p className=" text-gray-600">
          {" "}
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className=" text-gray-600">
          {" "}
          <span className="text-gray-800 uppercase font-bold">Telefono: </span>
          {telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button className="text-blue-600 hover:text-blue-600 px-4 py-2 inline-block text-white rounded leading-tight uppercase font-bold text-xs">
          Editar
        </button>
        <button className="text-red-600 hover:text-red-600 px-4 py-2 inline-block text-white rounded leading-tight uppercase font-bold text-xs">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
