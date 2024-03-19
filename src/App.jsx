import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import AllEmployees from "./pages/AllEmployees";

function App() {
  return (
    <>
      <Header />
      <AllEmployees />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={}>

          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
