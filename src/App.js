import RealtimePage from "./pages/RealtimePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HistoryPage from "./pages/HistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RealtimePage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
