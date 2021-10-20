import { Provider } from 'react-redux'
import store from "./Redux/store"
import "./App.css"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar></Navbar>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
