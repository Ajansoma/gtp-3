import Navbar from './Components/Navbar';
import Cta from './Components/Cta';
import Brand from './Components/Brand';
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibilities,
  WhatGPT,
} from './Pages';
function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-gradient-bg-100 to-gradient-bg-200">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibilities />
      <Cta />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
