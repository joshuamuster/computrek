import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Dashboard';
// import Deck01 from './Deck01';
// import Deck02 from './Deck02';
// import Deck05 from './Deck05';
// import Deck06 from './Deck06';
// import Deck07 from './Deck07';
// import Deck08 from './Deck08';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  // {
  //   path: "/Deck01",
  //   element: <Deck01 />,
  // },
  // {
  //   path: "/Deck02",
  //   element: <Deck02 />,
  // },
  // {
  //   path: "/Deck05",
  //   element: <Deck05 />,
  // },
  // {
  //   path: "/Deck06",
  //   element: <Deck06 />,
  // },
  // {
  //   path: "/Deck07",
  //   element: <Deck07 />,
  // },
  // {
  //   path: "/Deck08",
  //   element: <Deck08 />,
  // },
  // Add more routes as needed
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
