/*#############################################
                 Importaciones
###############################################*/

//Modulos

//Estilos
import './ItemDetail.css'
//Componentes

import Card from 'react-bootstrap/Card';
import ItemCount from '../itemCount/ItemCount';
import ItemListContainer from '../itemListContainer/ItemListContainer';
//Core

/*#############################################
                 Logica
###############################################*/
const ItemDetail = (props) => {//Funcion constructora

    const { title, category, description, price } = props.data

    return (

        <article className='itemDetail-producto'>
            <h1>DETALLE DEL PRODUCTO SELECCIONADO</h1>
            <Card className='card-separated'>
                <Card.Header as="h5">{category}</Card.Header>
                <Card.Body>
                    <Card.Title>{title} || Value ={price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                    <ItemCount stock={10} />
                </Card.Body>
            </Card>
            <h1>MAS PRODUCTOS</h1>
            <ItemListContainer/>
        </article>


    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemDetail
