import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ForgetPassword from "./components/ForgetPassword";
import "./App.css";
import SignIn from "./components/SignInPage";
import Verification from "./components/Verification";
import NewPasswordField from "./components/NewPasswordField";
import MainScreen from "./screens/DashboardScreens/MainScreen";
import CustomerScreen from "./screens/DashboardScreens/CustomerScreen";
import ServiceProviderScreen from "./screens/DashboardScreens/ServiceProviderScreen";
import JobsManagementScreen from "./screens/DashboardScreens/JobsManagementScreen";
import ServicesManagementMainScreen from "./screens/DashboardScreens/ServicesManagementMainScreen";
import ServicesManagementHomeScreen from "./screens/DashboardScreens/ServicesManagementHomeScreen";
import PrivacyPolicyScreen from "./screens/DashboardScreens/PrivacyPolicyScreen";
import TermsScreen from "./screens/DashboardScreens/TermsScreen";
import ProfileScreen from "./screens/DashboardScreens/ProfileScreen/ProfileScreen";

function App() {
  return (
    // Routing Section Start
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/Verification" element={<Verification />} />
        <Route path="/NewPasswordField" element={<NewPasswordField />} />
        <Route path="/dashboard" element={<Navigate to="/dashboard/main" />} />
        <Route path="/dashboard/profile" element={<ProfileScreen />} />
        <Route path="/dashboard/main" element={<MainScreen />} />
        <Route path="/dashboard/customer" element={<CustomerScreen />} />
        <Route path="/dashboard/serviceproviders" element={<ServiceProviderScreen />} />
        <Route path="/dashboard/jobsmanagement" element={<JobsManagementScreen />} />
        <Route path="/dashboard/servicesmanagement/main" element={<ServicesManagementMainScreen />} />
        <Route path="/dashboard/servicesmanagement/homescreen" element={<ServicesManagementHomeScreen />} />
        <Route path="/dashboard/privacypolicy" element={<PrivacyPolicyScreen/>} />
        <Route path="/dashboard/terms" element={<TermsScreen />} />
      </Routes>
    </Router>
    // Routing section End
  );
}

export default App;
