import { useRouteError } from "react-router-dom";

const PageError = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Error loading the page</h1>
      <p>Oops, this is embarassing. I could not load the page</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
};

export default PageError;
