import "./App.css";
import Hero from "./components/Hero/Hero";
import Silder from "./components/Slider/Slider";
import Header from "./components/header/Header";
import Virtual from "./components/Virtual/Virtual";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Silder />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
