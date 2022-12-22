import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ShopWithUs from "./pages/ShopWithUs";
import Team from "./pages/Team";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop-with-us" element={<ShopWithUs />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Layout>
  );
}

export default App;
