import { Link } from "react-router-dom"

const Item = (props) => {
    return (
        <Link to={`/item/${props.producto.id}`}>
        <article className="product-card" title={props.producto.title}>
            <h3 className="product-card__title">{props.producto.title}</h3>
            <img src={props.producto.image_link} alt={props.producto.title} className="product-card__image" />
            <p className="product-card__description">${props.producto.price}</p>
            <Link to={`/item/${props.producto.id}`}> 
            <button type="button" className="product-card__details">ver detalles</button>
            </Link>
        </article>
        </Link>
    )
}

export default Item