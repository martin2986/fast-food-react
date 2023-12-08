export const OrdersColumn = () => {
  const columns = [
    { field: "id", headerName: "OrderID", flex: 1 },
    {
      field: "item",

      headerName: "Orders",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "casheir", headerName: "Casheir", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "purchase", headerName: "Purchase", flex: 1 },
  ];

  return { columns };
};
