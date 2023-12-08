import ReportInfo from "../components/Reports/ReportInfo";
import BarChart from "../components/BarChart/BarChart";
import PieChart from "../components/PieChart/PieChart";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchOrderItems } from "../util/http";
import { transFormData } from "../util/helperFn";
import ErrorPage from "../components/Error/ErrorPage";
import ReportSkeleton from "../components/Skeleton/ReportSkeleton/ReportSkeleton";
const Reports = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrderItems,
  });
  useEffect(() => {
    document.title = "Reports";
    return () => {
      document.title = "Bubble";
    };
  }, []);

  let content;

  if (isPending) {
    content = <ReportSkeleton />;
  }

  if (isError) {
    content = (
      <ErrorPage
        message={
          error?.info.message ||
          "An Error Occured can't load reports. Please Try again"
        }
      />
    );
  }

  if (data) {
    const reports = transFormData(data);
    content = (
      <div className="w-100">
        <ReportInfo report={reports} />
        <div className="d-flex flex-row w-100 ">
          <div
            className="w-50"
            style={{ height: "400px", width: "400px", maxWidth: "600px" }}
          >
            <BarChart report={reports} />
          </div>
          <div
            className="w-50"
            style={{ height: "400px", width: "250px", maxWidth: "400px" }}
          >
            <PieChart report={reports} />
          </div>
        </div>
      </div>
    );
  }
  return <div className="vw-100 vh-100 m-2 d-none d-md-block">{content}</div>;
};

export default Reports;
