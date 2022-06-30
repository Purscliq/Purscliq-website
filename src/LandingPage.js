import "./App.css";
import Footer from "./components/footer/footer.js";
import Header from "./components/header/header.js";
import Headersection from "./components/headersection/headersection.js";
import HowitWorks from "./components/how-it-works/how-it-works.js";
import Features from "./components/Features/Features.js";
import Divider from "./components/divider/divider.js"
import FirstSection from "./components/firstSection/firstSection";
import SecondSection from "./components/secondSection/secondSection";
import Faq from "./components/FAQ/FAQ.js"
function LandingPage() {
  return (
    <div className="App">
      <Header />
      <Headersection />
      <HowitWorks />
      <Features />
      <Divider />
      <FirstSection />
      <SecondSection />
      <Divider />
      <Faq/>
      <Footer />
    </div>
  );
}

export default LandingPage;
