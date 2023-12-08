import classes from "./CardSkeleton.module.scss";
import Skeleton from "react-loading-skeleton";
import { Col } from "react-bootstrap";
const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <Col className={classes.card} key={i}>
        <div className="w-100">
          <Skeleton className={classes.skeleton} />
        </div>
        <div>
          <Skeleton width={150} />
        </div>
        <div className={classes.description}>
          <div>
            <Skeleton className={classes.skeleton} />
          </div>
          <div>
            <Skeleton className={classes.skeletonBtn} />
          </div>
        </div>
      </Col>
    ));
};

export default CardSkeleton;
