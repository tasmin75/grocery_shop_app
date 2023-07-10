import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById("root")).render( 
  <React.StrictMode>
    <Provider store={store}>
    <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
      />
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
