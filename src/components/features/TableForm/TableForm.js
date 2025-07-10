import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap'
import { getAllStatuses } from '../../../redux/statusesRedux';
import './TableForm.module.scss';
import Status from '../../common/Status/Status';
import People from '../../common/People/People';
import Bill from '../../common/Bill/Bill';

const TableForm = (props) => {

    const statuses = useSelector(getAllStatuses);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const [id] = useState(props.id || '');
    const [tableNumber] = useState(props.tableNumber || '');
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

    const handleCapacityChange = (e) => {
        const capacityPeople = e.target.value;
        if (parseInt(capacityPeople) < parseInt(booked)) {
            setCapacity(capacityPeople);
            setBooked(capacityPeople);
        }else if(parseInt(capacityPeople) > 10) {
            setCapacity('');
        }else {
            setCapacity(capacityPeople);
        }
    };

    const handleBookedChange = (e) => {
        const bookedPeople = e.target.value;
        if(parseInt(bookedPeople) <= parseInt(capacity)) {
            setBooked(bookedPeople);
        }else if(parseInt(bookedPeople) > parseInt(capacity)) {
            setBooked('');
        }
    };

if (status === 'busy') {
    return (
    <Form onSubmit={validate(handleSubmit)}>
        <h1>Table {tableNumber}</h1>
        <Status status={status} setStatus={setStatus} statuses={statuses} />
        <People register={register} handleCapacityChange={handleCapacityChange} handleBookedChange={handleBookedChange} capacity={capacity} booked={booked} errors={errors} />
        <Bill register={register} setBill={setBill} bill={bill} errors={errors} />
        <Button variant='primary' type='submit'>
            {props.actionText}
        </Button>
    </Form>
  );

}else if(status === 'free' || status === 'cleaning') {
    return (
    <Form onSubmit={validate(handleSubmit)}>
        <h1>Table {tableNumber}</h1>
        <Status status={status} setStatus={setStatus} statuses={statuses} />
        <Button variant='primary' type='submit'>
            {props.actionText}
        </Button>
    </Form>
  );

}else if(status === 'reserved') {
    return (
    <Form onSubmit={validate(handleSubmit)}>
        <h1>Table {tableNumber}</h1>
        <Status status={status} setStatus={setStatus} statuses={statuses} />
        <People register={register} handleCapacityChange={handleCapacityChange} handleBookedChange={handleBookedChange} capacity={capacity} booked={booked} errors={errors} />
        <Button variant='primary' type='submit'>
            {props.actionText}
        </Button>
    </Form>
  );
}
};

export default TableForm;
