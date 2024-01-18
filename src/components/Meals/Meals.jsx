import { useQuery } from "@tanstack/react-query";
import { filteredData } from "../../util/helperFn";
import { fetchMeals } from "../../util/http";
import Error from "../Error/ErrorMessage";
import CardSkeleton from "../Skeleton/CardSkeleton/CardSkeleton";
import MealList from "./MealList";
const Meals = ({ selected, query }) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["meals"],
    queryFn: fetchMeals,
  });
  const result = filteredData(data?.data, selected, query);

  if (isError)
    return <Error message={error.message || "could not fetch meals "} />;

  if (isPending) return <CardSkeleton cards={9} className="w-100" />;

  if (result?.length === 0)
    return <h4 className="fs-5 text-center mt-5">Item not available</h4>;

  return <MealList result={result} />;
};

export default Meals;
