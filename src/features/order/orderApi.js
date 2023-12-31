// A mock function to mimic making an async request for data
export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://solo-project-data.onrender.com/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}



export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("https://solo-project-data.onrender.com/orders/"+order.id, {
      method: "PATCH",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}




export function fetchAllOrders(pagination,sort) {
  let queryString='';

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }
  return new Promise(async (resolve) => {
    //TODO:we will not hard-code server
    const response = await fetch(
      "https://solo-project-data.onrender.com/orders?" + queryString
    );
    const data = await response.json();
    const totalorders = await response.headers.get("X-Total-Count");
    resolve({ data: { orders: data, totalorders: +totalorders } });
  });
}


