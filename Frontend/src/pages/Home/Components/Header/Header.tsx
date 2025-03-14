import { CarFrontFill, FileCheck, Robot } from "react-bootstrap-icons"
import Form from "../Form/Form"

function Header() {
  return (
    <div className="d-flex p-5 justify-content-around align-items-center flex-wrap">
      <div className="w-50 d-flex justify-content-start flex-column">
        <h1>¡Bienvenido a <b>Motorbind!</b></h1>
        <p>Aquí puedes registrar autos que necesitan inspección, describir sus síntomas y obtener diagnósticos precisos generados con inteligencia artificial. ¡Comienza ahora registrando un auto y descubre las posibles causas de sus problemas!</p>
        <ul className="d-flex flex-column">
            <li><b>Registra</b> tu auto en la plataforma<FileCheck /></li>
            <li><b>Agrega</b> Agrega el problema reciente que tiene tu auto<CarFrontFill /></li>
            <li> <b>Obtén </b> el resultado de la IA<Robot /></li>
        </ul>
      </div>

     <Form />
    </div>
  )
}

export default Header
