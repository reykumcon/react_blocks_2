import './App.css';
import styles from './components/MyStyle.module.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.content}>
        <Navigation />
        <Main className={styles.mainContent}>
          <Subcontent />
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
