import style from "./Card.module.scss"

const Card = ({ id, model, image, price }) => {
  

  return (
    <div className={style.cardWrapper}>
      <img src={image} alt="photo"/>
      <p>{model}</p>
      <p>{price}</p>
      <p>{id}</p>
      <button>Add to cart</button>
      <button>Remove from cart</button>
    </div>
  )
}

export default Card
