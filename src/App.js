import "./App.css";
import Router from "./Router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalContextProvider from "./context/globalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
      />
    </GlobalContextProvider>
  );
}

export default App;
