import React, { useEffect, useState } from "react";
import SingleOrder from "../SingleOrder/SingleOrder";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDelteBtn = (id) => {
    const dialogue = window.confirm("Want to cancel your order");
    if (!dialogue) {
      return;
    } else {
      fetch(`http://localhost:5000/orders?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Your Order removed successfully!");
            const filtered = orders.filter((order) => order._id != id);
            setOrders(filtered);
          }
        });
    }
  };
  const handleApproveBtn = (id) => {
    fetch(`http://localhost:5000/orders?id=${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          const filtered = orders.find((service) => service._id == id);
          filtered.status = "Shipped";
          const clone = [].concat(orders);
          setOrders(clone);
        }
      });
  };
  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-16">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                    >
                      ORDERED BY
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                    >
                      PRODUCT NAME & DELIVERY ADDRESS
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-medium text-black uppercase tracking-wider"
                    >
                      STATUS
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <SingleOrder
                      key={order._id}
                      order={order}
                      handleDelteBtn={handleDelteBtn}
                      handleApproveBtn={handleApproveBtn}
                    ></SingleOrder>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
