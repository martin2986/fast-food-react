import { useQuery } from "@tanstack/react-query";
import OrderItems from "../components/Orders/OrderItems";
import { fetchOrderItems } from "../util/http";
import { transFormData } from "../util/helperFn";
import ListSkeleton from "../components/Skeleton/OrderListSkeleton/ListSkeleton";
import ErrorMessage from "../components/Error/ErrorMessage";
const OrderList = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrderItems,
  });

  const orderData = transFormData(data);
  if (isError)
    return (
      <ErrorMessage
        message={
          error?.info.message ||
          "An Error Occured can't load orders. Please Try again"
        }
      />
    );

  if (isPending) return <ListSkeleton list={15} />;

  // if (data) {
  //   console.log(data);
  //   orderContent = <OrderItems orderItems={orderData} />;
  // }

  return (
    <div className="d-none d-md-block mx-auto w-100 h-100">
      <OrderItems orderItems={orderData} />
    </div>
  );
};

export default OrderList;
