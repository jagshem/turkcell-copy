import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Faturasız from "./components/Faturasız";
import Paket from "./components/Paket";
import Payment from "./components/Payment";
import ReferenceCode from "./components/ReferenceCode";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ReferenceCode />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/faturasız" element={<Faturasız />} />
          <Route exact path="/paket" element={<Paket />} />
          <Route exact path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
