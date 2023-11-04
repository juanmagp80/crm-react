import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="space-y-8 ">
            <h1 className="text-center text-6xl font-extrabold mt-20 text-blue-900">Hubo un error</h1>
            <p className="text-center">{error.message}</p>
        </div>
    )
}

export default ErrorPage
