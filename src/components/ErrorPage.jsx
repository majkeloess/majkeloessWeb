import { useRouteError } from "react-router-dom";

export default function ErrorPage({ darkMode, changeMode }) {
  const error = useRouteError();
  console.error(error);
  const ListConditon = darkMode ? "white" : "black";
  return (
    <div className={`${darkMode && "dark"}`}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      
    </div>
  );
}
