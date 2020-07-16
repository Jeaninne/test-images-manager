import * as React from "react";
import { hot } from "react-hot-loader";
import {Provider as ReduxProvider} from "react-redux";

import "../css/App.scss";
import MainView from "./containers/MainView";
import configureStore from "./store/configureStore";

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <MainView />
    </ReduxProvider>
  );
}

declare let module: object;

export default hot(module)(App);
