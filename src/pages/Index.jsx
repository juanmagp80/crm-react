import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";

export function loader() {
  const clientes = obtenerClientes();

  return clientes;
}

const Index = () => {
  const clientes = useLoaderData();
  console.log(clientes);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3 text-gray-700 text-base"> Administra tus clientes</p>

      {clientes.length ? (
        <table className="table-auto bg-white shadow-md mt-10 w-full w-lg">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {clientes.map((cliente) => (
              <Cliente cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-5 text-center text-gray-600">
          No hay clientes, comienza creando uno
        </p>
      )}
    </>
  );
};

export default Index;
