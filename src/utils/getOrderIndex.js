const getOrderIndex = (orders, order) => {
  console.log("The order that you are trying to get redirected to is: ", order);
  return orders?.findIndex((element) => {
    console.log("The id of the order in list is: ", element);
    return element.orderId === order.orderId;
  });
};

export default getOrderIndex;
