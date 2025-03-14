import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {ICar} from '../../../../types'


function CarItem(car:ICar) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={car.image} />
    <Card.Body>

      <Card.Title className='fw-bold m-0'> {car.model}</Card.Title>
      <Card.Text className='m-0'>{car.brand}</Card.Text>
      <div className="d-flex justify-content-between align-items-center">
      <Card.Text>{car.year}</Card.Text>
      <Card.Text>{car.milaege}<b>km</b></Card.Text>
      </div>
      <Button variant="dark">
                  <Link style={{color:"#fff", textDecoration:"none"}} to={`/car/${car.id}`}>Ver Detalle</Link>
          </Button>
    </Card.Body>
  </Card>
  )
}

export default CarItem
