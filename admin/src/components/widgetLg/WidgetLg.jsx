import "./widgetLg.css";
import { useState, useEffect } from "react";
import { userRequest } from "../../requestMethod";
import {format} from "timeago.js"

export default function WidgetLg() {
  const [orders, setorders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setorders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders?.map((order) => (
          <tr className="widgetLgTr" key={order.userId}>
            <td className="widgetLgUser">
              <img
                src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">₹ {order.amount}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
