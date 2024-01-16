const { useQuery } = require("@tanstack/react-query");

export function useFetchItems(fetchFn) {
  const duration = 1000 * 60 * 60;
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["meals"],
    queryFn: fetchFn,
    gcTime: duration,
    scaleTime: duration,
  });

  return {
    data,
    isLoading,
    error,
    isError,
  };
}
