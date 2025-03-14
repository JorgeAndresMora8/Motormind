import { useState } from "react";
import { Alert, Spinner, ToastContainer } from "react-bootstrap";
import { CarFront } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generateDiagnosis } from "../../../../Service";

interface SymptomsModalProps {
  carId: string;
}

function SymptomsModal({ carId }: SymptomsModalProps) {
  const [show, setShow] = useState(false);
  const [symptoms, setSymptoms] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const showToast = () => {
    toast.info('generando Diagnóstico', {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: false, // Evita que el toast se cierre al hacer clic en el link
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    })
  };



  const handleClose = () => {
    setShow(false);
    setError(null); // Limpiar errores al cerrar
  };

  const handleShow = () => setShow(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymptoms(e.target.value);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);
    setShow(false);

    try {
      await generateDiagnosis(carId, symptoms);
      setSymptoms("");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
      showToast()
    }
  };

  return (
    <>
    <ToastContainer />
      {loading ? 
      <Button variant="dark"><Spinner /></Button> 
      :
      <Button variant="primary" onClick={handleShow}>Generar Diagnóstico</Button>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          className="d-flex justify-content-start align-items-start flex-column"
          closeButton
        >
          <Modal.Title>
            Síntomas/Problemas <CarFront color="darkgray" size={30} />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}{" "}
          {/* Muestra el error si existe */}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontSize: "1.2rem" }}>
                Ingresar problemas del auto...
              </Form.Label>
              <Form.Label style={{ fontSize: "0.9rem", color: "gray" }}>
                Debe tener al menos 10 caracteres
              </Form.Label>
              <Form.Control
                value={symptoms}
                onChange={handleChange}
                placeholder="Describe el problema"
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            disabled={symptoms.length < 10}
            onClick={handleSubmit}
          >
            Generar
          </Button>
          {/* )} */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SymptomsModal;
