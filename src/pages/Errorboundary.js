// import { Component } from "react";
import * as React from "react";
import { ErrorBoundary, useErrorHandler } from "react-error-boundary";
import { Helmet } from "react-helmet-async";

// export class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: false,
//     };
//   }
//   static getDerivedStatefromError(error) {
//     return {
//       error: true,
//     };
//   }
//   componentDidCatch(error, errorInfo) {
//     console.log(error, errorInfo);
//   }
//   render() {
//     if (this.state.error) {
//       return <h1>Ooops! Something went wrong</h1>;
//     }
//     return this.props.children;
//   }
// }

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function Greeting({ subject }) {
  return <div>Hello {subject.toUpperCase()}</div>;
}

function Farewell({ subject }) {
  return <div>Goodbye {subject.toUpperCase()}</div>;
}

function GitHub() {
  const [user, setUser] = React.useState({});
  const handleError = useErrorHandler();

  React.useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("https://randomuser.me/ap");
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (err) {
        console.log(err);
        handleError(err);
      }
    }

    fetchUser();
  }, []);

  return (
    <>
      <h1>GitHub</h1>
      {user?.login && <span>API call was successful</span>}
    </>
  );
}

export const NewApp = () => {
  return (
    <Helmet>
        <title>Home/counter</title>
        <meta
          name="description"
          content="Try the counter appfor increment, decrement amd reset values"
        ></meta>
        <link rel="canonical" href="/"></link>
      </Helmet>
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Greeting />
        <Farewell />
        <GitHub />
      </ErrorBoundary>
    </div>
  );
};
