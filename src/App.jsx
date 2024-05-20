import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home/Homepage";
import ProductInfo from "./Productinfo/ProductInfo";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/productinfo" element={<ProductInfo></ProductInfo>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
