import { LandingPage } from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SelectCategory } from "./components/SelectCategory/SelectCategory";
import { HowItWorks } from "./components/HowItWorks/HowItWorks";
import { AppProvider } from "./hooks/AppHook";
import { Background } from "./App.style";

function App() {
  const ActiveComponent = ({ children }) => {
    return <Background>{children}</Background>;
  }

  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<ActiveComponent><LandingPage /></ActiveComponent>} />
          <Route path="/select-category" element={<ActiveComponent><SelectCategory /></ActiveComponent>} />
          <Route path="/how-it-works" element={<ActiveComponent><HowItWorks /></ActiveComponent>} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
