import { Link } from "react-router-dom"

interface ErrorProps { 
    message: string;
}

function Error( { message }: ErrorProps ) {
  return (
    <div style={{height:"30rem"}} className="d-flex justify-content-center align-items-center flex-column">
  <h1>Error</h1>
  <p>{message}</p>
  <Link to="/">Regresar al inicio</Link>
</div>

  )
}

export default Error
