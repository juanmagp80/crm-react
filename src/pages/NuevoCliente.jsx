import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const email = formData.get("email");

  const errores = [];

  if (Object.values(data).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("El email no es válido");
  }

  if (Object.keys(errores).length) {
    return errores;
  }
  console.log(errores);
  return {
    status: 200,
  };
}
//

const NuevoCliente = () => {
  const errores = useActionData();
  const navigate = useNavigate();
  console.log(errores);

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
      <div className="bg-white shadow rounded-md md:w-3/4 px-5 py-10 mt-20 ">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="POST" noValidate>
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full p-3 bg-blue-800 uppercase font-bold text-white text-lg"
            value={"Agregar Cliente"}
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
