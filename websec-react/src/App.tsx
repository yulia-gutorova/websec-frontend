import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginView } from "./view/login/LoginView";
import { MyPage } from "./view/myPage/MyPage";
import { RegistrationView } from "./view/registration/RegistrationView";
import { HomeView } from "./view/home/HomeView";
import PrivacyPolicy from "./view/policy/PrivacyPolicy";
import { HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/login" element={<LoginView/>} />
        <Route path="/registration" element={<RegistrationView />} />
        <Route path="/mypage/:name" element={ <MyPage />}/> 
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/policy" element={<PrivacyPolicy/>}/>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
