import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Dashboard';
import Deck01 from './Deck01';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  // {
  //   path: "/Deck01",
  //   element: <Deck01 />,
  // },
  // Add more routes as needed
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
