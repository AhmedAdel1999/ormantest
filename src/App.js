import AboutSection from "./components/about/aboutsection";
import CharityMsg from "./components/charitymsg/charitymsg";
import CharityVesion from "./components/charityvesion/charityvesion";
import FAQ from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Managers from "./components/managers/managers";
import Navbar from "./components/navbar/navbar";
import OurPartners from "./components/ourpartners/ourpartners";
import TopHeader from "./components/topheader/topheader";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Navbar />
      <AboutSection />
      <CharityMsg />
      <CharityVesion />
      <Managers />
      <FAQ />
      <OurPartners />
      <Footer />
    </div>
  );
}

export default App;
