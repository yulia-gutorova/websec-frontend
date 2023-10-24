import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginView } from "./view/login/LoginView";
import { MyPage } from "./view/myPage/MyPage";
import { RegistrationView } from "./view/registration/RegistrationView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView/>} />
        <Route path="/registration" element={<RegistrationView />} />
        <Route path="/mypage" element={ <MyPage />}/> 
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
