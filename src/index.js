import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/Annapurna/Store";
import MyState from "./context/data/myState";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyState>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MyState>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
