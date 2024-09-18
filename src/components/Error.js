import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops!!!...{err.error.message}</h1>
      <h2>{err.data}</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
