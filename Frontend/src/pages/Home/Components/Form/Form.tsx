import { useState } from "react";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import {CarFormData} from "./Model";
import { createCar } from "./service/formService";

const initialState: CarFormData = {
  brand: "",
  model: "",
  year: "",
  milaege: 0,
  image: "",
};

const MyForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<CarFormData>(initialState);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: name === "milaege" ? Number(value) : value, 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      await createCar(formData);
      setFormData(initialState); 
      setError(null);
    } catch (error) {
      setError("Error al crear el auto. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = 
    formData.brand.length >= 2 &&
    formData.model.length >= 2 &&
    formData.year.length >= 2 &&
    formData.image.length >= 5;

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        boxShadow: "1px 2px 2px rgba(0,0,0,0.2)",
        borderRadius: "1rem",
      }}
      className="d-flex p-5 flex-column gap-3 w-25"
    >
      <h3>Registra <b>Autos</b></h3>
      <p className="m-0" style={{fontSize:"0.8rem", color:"gray"}}>Rellena Los Campos Requeridos</p>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form.Group controlId="brand">
        <Form.Label>Marca</Form.Label>
        <Form.Control
          type="text"
          name="brand"
          placeholder="Marca..."
          value={formData.brand}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="model">
        <Form.Label>Modelo</Form.Label>
        <Form.Control
          type="text"
          name="model"
          placeholder="Modelo..."
          value={formData.model}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="year">
        <Form.Label>Año</Form.Label>
        <Form.Control
          type="text"
          name="year"
          placeholder="Año..."
          value={formData.year}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="milaege">
        <Form.Label>Km</Form.Label>
        <Form.Control
          type="number"
          name="milaege"
          placeholder="0 km"
          value={formData.milaege}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="text"
          name="image"
          placeholder="Imagen URL..."
          value={formData.image}
          onChange={handleChange}
        />
      </Form.Group>

      {loading ? (
        <Button variant="dark" type="button" className="mt-3" disabled>
          <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
        </Button>
      ) : (
        <Button variant="primary" type="submit" className="mt-3" disabled={!isFormValid}>
          Generar Auto
        </Button>
      )}
    </Form>
  );
};

export default MyForm;
