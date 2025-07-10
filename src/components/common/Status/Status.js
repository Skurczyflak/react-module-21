
import { Form, Row, Col } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../../utils/capFirstLetter';

const Status = ({status, setStatus, statuses}) => {
  return (
        <Form.Group as={Row}  className="mb-3 align-items-center" controlId='tableStatus'>
            <Form.Label column className='col-2'>
                <strong>Status:</strong>
            </Form.Label>
            <Col sm={4} className='p-0 w-auto' >
                <Form.Select aria-label="Status" value={status} onChange={(e) => setStatus(e.target.value)}>
                    {statuses.map((status) =>(
                        <option key={status.id} value={status.name}>
                            {capitalizeFirstLetter(status.name)}
                        </option>
                    ))}
                </Form.Select>
            </Col>
        </Form.Group>
  );
};

export default Status;
