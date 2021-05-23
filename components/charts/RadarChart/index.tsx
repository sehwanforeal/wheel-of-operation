import styled from "styled-components";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type Props = {
  series?: number[] | null;
  labels?: string[];
  showLegend?: boolean;
  style?: React.CSSProperties;
};

export default function RadarChart({
  series = [14, 11, 13, 10, 12, 7, 4, 10],
  labels = [""],
  style,
}: Props) {
  if (!series) {
    series = [0];
  }
  const options = {
    yaxis: { max: 15, show: false },
    plotOptions: {
      radar: {
        polygons: {
          strokeColor: "#e8e8e8",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
    colors: ["black"],
    dataLabels: {
      enabled: true,
      background: {
        enabled: true,
        borderRadius: 2,
      },
      style: {
        fontSize: "9px",
      },
    },
    xaxis: {
      categories: labels,
      labels: {
        show: true,
        style: {
          colors: ["#a8a8a8"],
          fontSize: "9px",
          fontFamily: "Arial",
        },
      },
    },
    fill: {
      opacity: 0.2,
    },
  };

  return (
    <Container style={style} className="chart">
      <ReactApexChart
        options={options}
        height={"300"}
        width={"300"}
        series={[{ name: "", data: series }]}
        type="radar"
      />
    </Container>
  );
}

const Container = styled.div``;
