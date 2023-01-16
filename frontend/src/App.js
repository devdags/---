import GlobalStyle from "./styles/global.js";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./utils/routes";


function App() {
  return (
    <>
      <GlobalStyle/>
      <AppRoutes/>
    </>
  );
}

export default App;
