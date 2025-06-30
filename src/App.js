import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/Home/HomePage';


function App() {
  return (
    <Router>
      <section className={styles.appContainer}>
        <Routes>
          <Route path="" element={<HomePage />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
