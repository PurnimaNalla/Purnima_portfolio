
import styles from"./App.module.css";
import {Contact}from"./components/Contact/Contact";
import{Skills} from "./components/Skills/Skills";
import{Hero} from "./components/Hero/Hero";
import{Navbar} from "./components/Navbar/Navbar";



function App() {
 

  return (
  <div className={styles.App}>
     <Navbar />
     <Hero />
     <Skills />
     <Contact />
    </div>
  );
}

export default App;

