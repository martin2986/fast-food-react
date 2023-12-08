import Skeleton from "react-loading-skeleton";
import ReportItems from "./ReportItems";

import { Col, Container, Row } from "react-bootstrap";
const ReportSkeleton = () => {
  return (
    <Container>
      <Row md={10} className=" my-1">
        <Col>
          <Skeleton width={320} height={100} />
        </Col>
        <Col>
          <Skeleton width={320} height={100} />
        </Col>
        <Col>
          <Skeleton width={320} height={100} />
        </Col>
      </Row>

      <div className="d-flex flex-row gap-2 mt-5">
        <div className="d-flex flex-row gap-2 w-50">
          <Skeleton
            style={{ height: "350px", width: "330px", maxWidth: "600px" }}
          />
          <div>
            <ReportItems
              widthOne={20}
              widthTwo={80}
              heightOne={20}
              heightTwo={20}
            />
            <ReportItems
              widthOne={20}
              widthTwo={80}
              heightOne={20}
              heightTwo={20}
            />
          </div>
        </div>

        <div className="text-center w-50">
          <Skeleton
            circle
            className="mb-5"
            style={{ maxWidth: "400px", width: "250px", height: "250px" }}
          />
          <div className="d-flex flex-row gap-4 text-center">
            <ReportItems
              widthOne={20}
              widthTwo={70}
              heightOne={20}
              heightTwo={20}
              circle
            />
            <ReportItems
              widthOne={20}
              widthTwo={90}
              heightOne={20}
              heightTwo={20}
              circle
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ReportSkeleton;
