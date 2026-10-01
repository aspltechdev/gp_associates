// // import "./App.css";

// // function App() {
// //   return (
// //     <div className="app">
// //       <h1>GP Associates</h1>
// //       <p>Premium Financial & Insurance Consulting</p>
// //     </div>
// //   );
// // }

// // export default App;

// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import TrustBar from "./components/TrustBar/TrustBar";
// import About from "./components/About/About";
// import Services from "./components/Services/Services";
// import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
// import FinancialGoals from "./components/FinancialGoals/FinancialGoals";
// import Process from "./components/Process/Process";
// import Founder from "./components/Founder/Founder";
// import Gallery from "./components/Gallery/Gallery";
// import CTA from "./components/CTA/CTA";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";

// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <Hero />
//         <TrustBar />
//         <About />
//         <Services />
//         <WhyChooseUs />
//         <FinancialGoals />
//         <Process />
//         <Founder />
//         <Gallery />
//         <CTA />
//         <Contact />
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import "./App.css";
import TrustBar from "./components/TrustBar/TrustBar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import FinancialGoals from "./components/FinancialGoals/FinancialGoals";
import Process from "./components/Process/Process";
import Founder from "./components/Founder/Founder";
import Gallery from "./components/Gallery/Gallery";
import CTA from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <TrustBar/>
        <About/>
        <Services/>
        <WhyChooseUs/>
        <FinancialGoals/>
        <Process/>
        <Founder/>
        <Gallery/>
        <CTA/>
        <Contact/>
        <Footer/>

      </main>
    </div>
  );
}

export default App;