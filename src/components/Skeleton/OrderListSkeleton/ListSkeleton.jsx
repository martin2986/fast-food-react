import Skeleton from "react-loading-skeleton";

const ListSkeleton = ({ list }) => {
  return Array(list)
    .fill(0)
    .map((_, i) => (
      <div key={i}>
        <Skeleton height={40} />
      </div>
    ));
};

export default ListSkeleton;
