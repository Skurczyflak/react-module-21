import TableForm from "../TableForm/TableForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTableById } from "../../../redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { updateTablesRequest } from "../../../redux/tablesRedux";
const UpdateTableForm = () => {
    
    const { tableId } = useParams();
    const post = useSelector((state) => getTableById(state, tableId ));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = table => {
        if(table.status === 'free' || table.status === 'cleaning') {
          table.booked = '';
          table.capacity = '';
          table.bill = '';
        }
        dispatch(updateTablesRequest(table));
        navigate('/');
    } 

  return (
    <TableForm action={handleSubmit} actionText="Update" {...post} />
  )
};

export default UpdateTableForm;
