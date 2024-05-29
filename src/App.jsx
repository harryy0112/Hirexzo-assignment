import React from "react";
import Footer from "./Components/footer";
import FAQ from "./Components/faq";
import Hiring from "./Components/hiringNeeds";
import CardContainer from "./Components/cardContainer";
import CallToAction from "./Components/callToAction";
import Pricing from "./Components/pricing";

function App() {
  return (
    <div className="App">
      <Pricing />
      <CallToAction />
      <CardContainer />
      <Hiring />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
