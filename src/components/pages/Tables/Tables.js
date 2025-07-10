import { Button,Row, Card, Col  } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../utils/capFirstLetter';

const Tables = ({tables}) => {
  return (
    <Row xs={1} className='g-2'>
        {tables.map((table) => (
            <Col key={table.id} >
                <Card className='border-0 border-bottom border-radius rounded-0'>
                    <Card.Body>
                        <Row className='d-flex align-items-center justify-content-between'>
                            <Col xs={8} className='d-flex'>
                            <Card.Title>Table {table.tableNumber}</Card.Title>
                            <Card.Text className='ms-3'>
                                <strong>Status: </strong>{capitalizeFirstLetter(table.status)}
                            </Card.Text>
                            </Col>
                            <Col xs={3}>
                            <NavLink to={'/table/' + table.id}>
                            <Button>Show More</Button>
                            </NavLink>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
  );
};

export default Tables;
