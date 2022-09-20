import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouterProvider, createHashRouter } from "react-router-dom";
import {Root} from "./layouts/root";

const router = createHashRouter([
  {
    path: '/',
    element: <Root />
  }
]);


const App = () => {
  return <RouterProvider router={router} />
}

function render() {
  ReactDOM.render(<App/>, document.getElementById('app'));
}

render();