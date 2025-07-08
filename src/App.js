import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <section className={styles.appContainer}>
      <NavBar />
        <Routes>
          <Route path="" element={<HomePage />} />
        </Routes>
        <Footer/>
      </section>
    </Router>
  );
}

export default App;
