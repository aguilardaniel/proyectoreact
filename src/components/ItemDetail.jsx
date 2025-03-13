import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemDetail = (props) => {
    return (
        <Container>
      <Row>
        <Col><img src={props.producto.image_link} alt={props.producto.title} className="product-card__image" /></Col>
        <Col>

        <Link to={`/`}>Ver Todos los Productos</Link>
       <br /><br />
            <article className="product-card" title={props.producto.title}>
                <h3 className="product-card__title">{props.producto.title}</h3>

                
                <span className="product-card__description">{props.producto.description}</span>
                <p className="product-card__price"><b>${props.producto.price}</b></p>
                
                 

                <button type="button" className="product-card__addtocart">Agregar al Carrito!</button>
            </article>
        </Col>
      </Row>
      
      
    </Container>


        
    )
}

export default ItemDetail