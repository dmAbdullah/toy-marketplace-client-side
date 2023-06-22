import { Link } from "react-router-dom";

const TableData = ({toys}) => {
    const {_id, name, manufacturer, category, price, quantity}=toys;
    return (
            <tr>
        <td>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{manufacturer}</div>
            </div>
        </td>
        <td>
          {category}
        </td>
        <td> $ {price}</td>
        <td>{quantity} pcs </td>
        <th>
          <Link to={`/toyDetails/${_id}`} className="btn btn-xs">details</Link>
        </th>
      </tr>
    );
};

export default TableData;