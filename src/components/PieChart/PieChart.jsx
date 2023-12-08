import { ResponsivePie } from "@nivo/pie";

const PieChart = ({ report }) => {
  const pieData = [
    {
      id: "Orders",
      label: "Orders",
      value: report.length,
      color: "hsl(104, 70%, 50%)",
    },
    {
      id: "Completed",
      label: "Completed",
      value: report.length,
      color: "hsl(162, 70%, 50%)",
    },
  ];
  return (
    <ResponsivePie
      data={pieData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#ccc",
            },
          },
          legend: {
            text: {
              fill: "#ccc",
            },
          },
          ticks: {
            line: {
              stroke: "#ccc",
              strokeWidth: 1,
            },
            text: {
              fill: "#ccc",
            },
          },
        },
        legends: {
          text: {
            fill: "#ccc",
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "nivo" }}
      borderWidth={2}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0.2"]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={"#ccc"}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
