import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/products";
import Products from "./Products";
import Filters from "./Filters";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products);
  return (
    <div className="App">
      <Filters />
      <Products />
    </div>
  );
}

export default App;
