import { DataGrid } from "@mui/x-data-grid";
import { OrdersColumn } from "../../util/Column";
import { useEffect } from "react";
import Modals from "../../UI/Modals";
import { useState } from "react";
const OrderItems = ({ orderItems }) => {
  const [openModal, setOpenModal] = useState(false);
  const [rowData, setRowData] = useState(null);
  const { columns } = OrdersColumn();
  const handleRowClick = (params) => {
    if (params.field === "item") {
      setOpenModal(true);
      setRowData(params.row);
    }
  };

  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    document.title = "Orders";
    return () => {
      document.title = "Bubble";
    };
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        width: "80vw",
        maxWidth: "100vw",
        margin: "auto",
        backgroundColor: "#f7f7f8",
        fontSize: "0.5rem",
      }}
    >
      <DataGrid
        checkboxSelection
        rows={orderItems}
        columns={columns}
        onCellClick={handleRowClick}
      />
      {rowData && (
        <Modals
          title="OrderId"
          body="Items: "
          closeModal={handleCloseModal}
          showModal={openModal}
          {...rowData}
        />
      )}
    </div>
  );
};

export default OrderItems;
