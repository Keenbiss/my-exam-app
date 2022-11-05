import { Helmet } from "react-helmet-async";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Home page for all the pages rendered in this app,the couter pages,404 page and error page"
        ></meta>
        <link rel="canonical" href="/"></link>
      </Helmet>
      <div>
        <h1>Home Page</h1>
      </div>
      <div className="About">
        <h2>WELCOME</h2>
        <p>
          Navigate to each of the pages to see my implementation of each project
          of exam question number 2{" "}
        </p>
      </div>
      ;
    </>
  );
};
