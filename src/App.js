import React, { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ShopSection from "./components/ShopSection";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

const App = () => {
	const [products, setProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [view, setView] = useState("products");

	useEffect(() => {
		fetch("/products.json")
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.catch(() => setProducts([]));
	}, []);

	const handleAddToCart = (product) => {
		if (cartItems.some((item) => item.id === product.id)) {
			toast.info("Already in cart");
			setView("cart");
			return;
		}
		setCartItems((prev) => [...prev, product]);
		toast.success("Added to cart");
		setView("cart");
	};

	const handleRemove = (id) => {
		setCartItems((prev) => prev.filter((item) => item.id !== id));
		toast.warn("Removed from cart");
	};

	const handleCheckout = () => {
		if (cartItems.length === 0) {
			toast.info("Cart is already empty");
			return;
		}
		setCartItems([]);
		toast.success("Checkout complete");
	};

	const cartCount = useMemo(() => cartItems.length, [cartItems.length]);

	return (
		<div className="min-h-screen bg-mist">
			<Navbar
				cartCount={cartCount}
				onCartClick={() => {
					setView("cart");
					document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
				}}
			/>
			<main>
				<Banner />
				<Stats />
				<ShopSection
					view={view}
					onViewChange={setView}
					products={products}
					cartItems={cartItems}
					onAdd={handleAddToCart}
					onRemove={handleRemove}
					onCheckout={handleCheckout}
				/>
				<Steps />
				<Pricing />
				<Testimonials />
				<FAQ />
			</main>
			<CTA />
			<Footer />
			<ToastContainer position="top-right" autoClose={2000} />
			<ChatWidget />
		</div>
	);
};

export default App;
