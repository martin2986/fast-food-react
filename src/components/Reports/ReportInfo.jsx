import { Container, Row } from "react-bootstrap";
import Card from "../../UI/Card/Card";
import { CiCircleCheck } from "react-icons/ci";
import { IoPersonAddOutline } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";

const ReportInfo = ({ report }) => {
  const purchase = report
    .map((item) => parseFloat(item.purchase.replace("$", "")))
    .reduce((item, acc) => item + acc, 0);

  return (
    <Container>
      <Row md={12} className="w-100 my-1 gap-3">
        <Card
          amount={report.length}
          title="Order Recieved"
          icon={<CiCircleCheck />}
        />
        <Card
          amount={report.length}
          title="New Customer"
          icon={<IoPersonAddOutline />}
        />
        <Card
          amount={purchase}
          title="Net Transaction"
          icon={<GoCreditCard />}
        />
      </Row>
    </Container>
  );
};

export default ReportInfo;
