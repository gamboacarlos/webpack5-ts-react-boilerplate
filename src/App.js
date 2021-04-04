import { products } from "./../utils/data"
import Card from "./components/Card/Card"
import styles from "./globalStyles/App.module.scss"

const App = () => {
  return (
    <div className={styles.container}>
      {
        products.map((prods) => (
          <Card key={prods.id} {...prods}/>
        ))
      }
    </div>
  )
}

export default App
