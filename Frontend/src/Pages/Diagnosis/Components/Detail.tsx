import { Badge, Card, ListGroup } from "react-bootstrap";
import {IDiagnosis} from "../../../types";

function Detail({diagnosis, symptoms, date }: IDiagnosis) {
  return (
    <Card className="shadow-sm rounded-3 p-4" style={{ maxWidth: "45rem", margin: "1rem auto" }}>
      <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Detalles del Diagnóstico</h5>
        <Badge bg="light" text="dark">{date}</Badge>
      </Card.Header>

      <Card.Body>
        {/* Síntomas */}
        <Card.Text className="mb-3">
          <b>Síntomas:</b> {symptoms}
        </Card.Text>

        {/* Probabilidades de problemas */}
        <h5 className="mb-3">🔍 Probabilidades de problemas:</h5>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b className="text-danger">Alta:</b> {diagnosis.high}
          </ListGroup.Item>
          <ListGroup.Item>
            <b className="text-warning">Media:</b> {diagnosis.medium}
          </ListGroup.Item>
          <ListGroup.Item>
            <b className="text-success">Baja:</b> {diagnosis.low}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default Detail;
