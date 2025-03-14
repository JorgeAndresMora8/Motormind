import { Spinner } from 'react-bootstrap'

function Loading() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column gap-2 m-5'>
    <Spinner />
    <b>Loading...</b>
    <p>Were getting the data</p>
    </div>
  )
}

export default Loading
