import { Card, Button, Badge, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles/diagnosis.module.css";
import {IDiagnosis} from "../../../../types";

function DiagnosisItem({ id, symptoms, date }: IDiagnosis) {
  return (
    <Card className={`shadow-sm ${styles["diagnosis_item"]}`}>
      <Card.Body>
        <Row className="align-items-end">
          {/* ID y fecha */}
          <Col>
            <Badge bg="dark">ID: {id}</Badge>
            <p className="text-muted small">{date}</p>
          </Col>
        </Row>

        {/* Síntomas */}
        <Card.Text>
          <b>Síntomas:</b> {symptoms}
        </Card.Text>

        {/* Botón de Ver Diagnóstico */}
        <div className="d-flex justify-content-start">
          <Button variant="dark">
            <Link 
              style={{ color: "#fff", textDecoration: "none" }}
              to={`/diagnosis/${id}`}
            >
              Ver Diagnóstico
            </Link>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default DiagnosisItem;

