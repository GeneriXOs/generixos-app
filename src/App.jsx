import "./App.css";
import ContainerPage from "./pages/ContainerPage";
import "./i18n";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {/* El layout principal */}
          <Route path="/" element={<ContainerPage />}>
            {/* Las subrutas se renderizan en el outlet */}
            <Route path="home" element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
