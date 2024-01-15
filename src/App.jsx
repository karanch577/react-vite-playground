import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product/:id" element={<Product />} />
			<Route path="/cart" element={<Cart />} />
		</Routes>
	);
}

export default App;
