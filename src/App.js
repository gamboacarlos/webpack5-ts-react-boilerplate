import zapato from "./../public/images/zapato.jpg"
import styles from "./globalStyles/App.module.scss"

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Ready!!!!</h1>
      <img src={zapato} alt="foto"/>   
    </div>
  )
}

export default App
