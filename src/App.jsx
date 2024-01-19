import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product/:id" element={<Product />} />
			<Route path="/cart" element={<Cart />} />
		</Routes>
		</BrowserRouter>
	);
}

export default App;
