import { Form, Row, Col } from 'react-bootstrap'

const People = ({register, handleCapacityChange, handleBookedChange, capacity, booked, errors}) => {
  return (
    <Form.Group as={Row} className="mb-3 align-items-center" controlId='tablePeople'>
        <Form.Label column className='col-2'>
            <strong>People: </strong>
        </Form.Label>
        <Col sm={1} className='p-0'>
            <Form.Control {...register("booked", { required: true, minLength: 1, min: 1, max: 10, })} aria-label="Booked"  type='number' value={booked} onChange={(e) => handleBookedChange(e)} /> 
        </Col>
        <Col className='col-auto w-auto'>
            <span>/</span>
        </Col>
        <Col sm={1} className='p-0'>
            <Form.Control {...register("capacity", { required: true, minLength: 1, min: 1, max: 10 })} aria-label="Capacity" type='number' value={capacity} onChange={(e) => handleCapacityChange(e)} />
        </Col>
        {(errors.booked || errors.capacity) && <small className="d-block form-text text-danger mt-2">This field is required and must be between 1 and 10</small>}
    </Form.Group>
  );
};

export default People;
