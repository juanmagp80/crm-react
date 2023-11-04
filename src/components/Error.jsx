function Error({ children }) {
  return (
    <div className="text-center text-white my-4 bg-red-600 font-bold p-3 uppercase">
      {children}
    </div>
  );
}
// Este componente sirve para mostrar los errores que se generen en el formulario

export default Error;
