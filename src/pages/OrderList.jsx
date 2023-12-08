import { useQuery } from "@tanstack/react-query";

import OrderItems from "../components/Orders/OrderItems";
import { fetchOrderItems } from "../util/http";
import { transFormData } from "../util/helperFn";

import ListSkeleton from "../components/Skeleton/OrderListSkeleton/ListSkeleton";
const OrderList = () => {
  const { data, isPending } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrderItems,
  });

  const orderData = transFormData(data);
  let content;

  if (isPending) {
    content = <ListSkeleton list={15} />;
  }

  if (data) {
    content = <OrderItems orderItems={orderData} />;
  }

  return <div className="d-none d-md-block mx-auto w-100 h-100">{content}</div>;
};

export default OrderList;
