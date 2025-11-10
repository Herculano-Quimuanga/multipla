import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// AOS - Animate On Scroll
import "aos/dist/aos.css";
import AOS from "aos";

// Inicializa o AOS globalmente
AOS.init({
	duration: 1500,
	once: false,
	easing: 'ease-in-out'
});

createRoot(document.getElementById("root")!).render(<App />);