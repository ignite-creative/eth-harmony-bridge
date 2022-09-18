import { createBrowserRouter } from 'react-router-dom';
import Origin from '../pages/origin';
import Destination from '../pages/destination';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Origin />,
  },
  {
    path: "/bridge-back",
    element: <Destination />
  }
]);

export default Router;