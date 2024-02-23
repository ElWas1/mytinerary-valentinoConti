import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-wrap flex-col items-center gap-x-40 min-h-screen bg-black text-white justify-center" id="error-page">
      <h1 className="mb-8 font-extrabold text-8xl">Oops!</h1>
      <h2 className="font-medium m-3">Sorry, an unexpected error has ocurred.</h2>
      <p className="max-[600px]:text-xs text-red-700">
        Error: <i className="text-gray-400">{error.statusText || error.message}</i>
      </p>
      <img className="w-1/2 mt-24" src="/planeErrorPage.webp" alt="Plane image" />
    </div>
  )
}

export default ErrorPage