import { Provider } from "react-redux";
import store from "./src/store/store";
import { App } from "./src/App";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)