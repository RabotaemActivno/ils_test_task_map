import MapComponent from './components/MapComponent';
import NavigationMenu from './components/NavigationMenu';
import styles from './App.module.scss'


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.map}><MapComponent/></div>
      <NavigationMenu/>
    </div>
  );
}

export default App;
