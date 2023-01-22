import "./styling/App.css";
import Header from "./Header";
import Footer from "./Footer";
import UserSelects from "./search/UserSelects";

function App() {
  return (
    <div className="App">
      <Header />
      <UserSelects />
      <Footer />
    </div>
  );
}

export default App;
