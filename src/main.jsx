import ReactDOM from "react-dom/client";
import "./assets/css/app.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./features/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
