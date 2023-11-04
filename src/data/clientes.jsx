export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();
  return resultado;
}
export async function agregarCliente(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultado = await respuesta.json();
    console.log(resultado);

  } catch (error) {
    console.log(error);
  }
}


