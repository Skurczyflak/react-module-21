import { Form, Row, Col } from 'react-bootstrap'

const Bill = ({register, setBill, bill, errors}) => {
  return (
    <Form.Group as={Row} className="mb-3 align-items-center" controlId='tableBill'>
        <Form.Label column className='col-2'>
            <strong>Bill: </strong>
        </Form.Label>
        <Col className='col-auto w-auto p-0'>
            <span>$</span>
        </Col>
        <Col sm={1} className='p-0'>
            <Form.Control {...register("bill", { required: true, min: 0 })} aria-label="Bill" type='number' value={bill} onChange={(e) => setBill(e.target.value)} />
        </Col>
        {errors.bill && <small className="d-block form-text text-danger mt-2">This field is required</small>}
    </Form.Group>
  );
};

export default Bill;
