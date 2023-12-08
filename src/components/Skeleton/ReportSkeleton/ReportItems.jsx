import Skeleton from "react-loading-skeleton";

const ReportItems = ({
  widthOne,
  widthTwo,
  heightOne,
  heightTwo,
  ...props
}) => {
  return (
    <div className="d-flex flex-row gap-1">
      <Skeleton width={widthOne} height={heightOne} {...props} />
      <Skeleton width={widthTwo} height={heightTwo} />
    </div>
  );
};

export default ReportItems;
