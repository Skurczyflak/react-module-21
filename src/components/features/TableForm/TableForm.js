//React
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';

//Bootstrap
import { Form, Button, Row, Col } from 'react-bootstrap'

//Utils & Functions
import { getAllStatuses } from '../../../redux/statusesRedux';
import { capitalizeFirstLetter } from '../../../utils/capFirstLetter';

//Styles
import './TableForm.module.scss';

const TableForm = (props) => {

    const statuses = useSelector(getAllStatuses);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const [id, setId] = useState(props.id || '');
    const [tableNumber, setTableNumber] = useState(props.tableNumber || '');
    const [status, setStatus] = useState(props.status || '');
    const [capacity, setCapacity] = useState(props.capacity || '');
    const [booked, setBooked] = useState(props.booked || '');
    const [bill, setBill] = useState(props.bill || '');


    const handleSubmit = () => {

        props.action({
            id,
            tableNumber,
            status,
            capacity,
            booked,
            bill,
        });
    };

if (status === 'busy') {

    return (
    <Form onSubmit={validate(handleSubmit)}>
        <h1>Table {tableNumber}</h1>

        <Form.Group as={Row}  className="mb-3 align-items-center" controlId='tableStatus'>
            <Form.Label column className='col-2'><strong>Status:</strong></Form.Label>
            <Col sm={4} className='p-0 w-auto' >
                <Form.Select aria-label="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    {statuses.map((status) =>(
                        <option key={status.id} value={status.name}>{capitalizeFirstLetter(status.name)}</option>
                    ))}
                </Form.Select>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 align-items-center" controlId='tablePeople'>
            <Form.Label column className='col-2'><strong>People: </strong></Form.Label>
            <Col sm={1} className='p-0'>
                <Form.Control {...register("booked", { required: true, minLength: 1 })} min={0} aria-label="Booked"  type='number' value={booked} onChange={(e) => setBooked(e.target.value)} /> 
            </Col>
            <Col className='col-auto w-auto'>/</Col>
                <Col sm={1} className='p-0'>
                <Form.Control {...register("capacity", { required: true, minLength: 1 })} min={0} aria-label="Capacity" type='number' value={capacity} onChange={(e) => setCapacity(e.target.value)} />
                </Col>
                {errors.booked && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                {errors.capacity && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            
        </Form.Group>

        <Form.Group as={Row} className="mb-3 align-items-center" controlId='tableBill'>
                <Form.Label column className='col-2'><strong>Bill: </strong></Form.Label>
                <Col className='col-auto w-auto p-0'><span>$</span></Col>
                <Col sm={1} className='p-0'>
                    <Form.Control {...register("bill", { required: true })} min={0} aria-label="Bill" type='number' value={bill} onChange={(e) => setBill(e.target.value)} />
                </Col>
                {errors.bill && <small className="d-block form-text text-danger mt-2">This field is required</small>}
        </Form.Group>
        <Button variant='primary' type='submit'>
            {props.actionText}
        </Button>
    </Form>
  );

}else if(status === 'free' || status === 'cleaning') {

    return (
    <Form onSubmit={validate(handleSubmit)}>
        <h1>Table {tableNumber}</h1>

        <Form.Group as={Row}  className="mb-3 align-items-center" controlId='tableStatus'>
            <Form.Label column className='col-2'><strong>Status:</strong></Form.Label>
            <Col sm={4} className='p-0 w-auto' >
                <Form.Select aria-label="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    {statuses.map((status) =>(
                        <option key={status.id} value={status.name}>{capitalizeFirstLetter(status.name)}</option>
                    ))}
                </Form.Select>
            </Col>
        </Form.Group>
        <Button variant='primary' type='submit'>
            {props.actionText}
        </Button>
    </Form>
  );

}else if(status === 'reserved') {

    return (
    <Form onSubmit={validate(handleSubmit)}>
        <h1>Table {tableNumber}</h1>

        <Form.Group as={Row}  className="mb-3 align-items-center" controlId='tableStatus'>
            <Form.Label column className='col-2'><strong>Status:</strong></Form.Label>
            <Col sm={4} className='p-0 w-auto' >
                <Form.Select aria-label="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    {statuses.map((status) =>(
                        <option key={status.id} value={status.name}>{capitalizeFirstLetter(status.name)}</option>
                    ))}
                </Form.Select>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 align-items-center" controlId='tablePeople'>
            <Form.Label column className='col-2'><strong>People: </strong></Form.Label>
            <Col sm={1} className='p-0'>
                <Form.Control {...register("booked", { required: true, minLength: 1 })} min={0} aria-label="Booked"  type='number' value={booked} onChange={(e) => setBooked(e.target.value)} /> 
            </Col>
            <Col className='col-auto w-auto'>/</Col>
                <Col sm={1} className='p-0'>
                <Form.Control {...register("capacity", { required: true, minLength: 1 })} min={0} aria-label="Capacity" type='number' value={capacity} onChange={(e) => setCapacity(e.target.value)} />
                </Col>
                {errors.booked && <small className="d-block form-text text-danger mt-2">This field is required</small>}
                {errors.capacity && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            
        </Form.Group>

        <Button variant='primary' type='submit'>
            {props.actionText}
        </Button>
    </Form>
  );
    
}
};

export default TableForm;
