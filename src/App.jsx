import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AllEmployees from "./pages/AllEmployees";
import AddEmployee from "./pages/AddEmployee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllEmployees />} />
          <Route path="/add-employee/" element={<AddEmployee />} />
          <Route path="/edit-employee/:id" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
