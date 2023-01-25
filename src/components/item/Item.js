/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './Item.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


//Componentes
import ItemCount from '../itemCount/ItemCount'

//Core

/*#############################################
                 Logica
###############################################*/
const Item = (props) => {//Funcion constructora

    const { title, category, description, price, id} = props.data

    return (

        <Card className='card-separated'>
            <Card.Header as="h5">{category}</Card.Header>
            <Card.Body>
                <Card.Title>{title} || Value ={price}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/producto/${id}`}> Ver Detalle del Producto </Link>
                <ItemCount stock={10} />
                
            </Card.Body>
        </Card>


    )

}

/*#############################################
                 Exportacion
###############################################*/
export default Item
