import React from "react";
import {Provider} from "react-redux";
import {store} from "./models/store";

const App = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
