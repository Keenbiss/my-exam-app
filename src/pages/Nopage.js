import { Helmet } from "react-helmet-async";

export const Nopage = () => {
  return (
    <>
      <Helmet>
        <title>Nopage</title>
        <meta
          name="description"
          content="a 404, page not found page to indicate that the browser was able to communicate with a given server, but the server could not find what was requested"
        ></meta>
        <link rel="canonical" href="/Nopage"></link>
      </Helmet>
      <div>
        <h1>404: NOT_FOUND</h1>
      </div>
    </>
  );
};
