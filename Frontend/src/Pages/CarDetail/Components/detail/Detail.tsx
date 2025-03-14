import { Button } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import {ICar} from '../../../../types'

function Detail(car: ICar) {
  return (
    <div className="d-flex justify-content-start align-items-start flex-column">
        <Button variant="dark">
          <Link to={'/'}><ArrowLeft color="#fff" size={20} className="ml-4" /></Link>
        </Button>
        <img style={{width:"45rem"}} src={car.image} alt="" />
        <h2> <span style={{color:"gray"}}>{car.brand}</span> <b>{car.model}</b></h2>
        <p style={{color:"gray"}} className="m-0">year: <b style={{color:"#1e1e1e"}}>{car.year}</b></p>
        <p style={{color:"gray"}}>mileage: <b style={{color:"#1e1e1e"}}>{car.milaege}km</b></p>
      </div>
  )
}

export default Detail
