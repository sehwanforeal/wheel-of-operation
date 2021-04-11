import styled from "styled-components";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type Props = {
  series: number[];
  labels: string[];
  showLegend?: boolean;
  style?: React.CSSProperties;
  height?: string;
};

export default function PolarAreaChart({
  series = [0],
  labels = [""],
  showLegend = false,
  style,
  height,
}: Props) {
  if (!series.length) {
    series = [0];
  }
  const options = {
    yaxis: { max: 14 },
    chart: {},
    labels,
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.9,
    },
    legend: {
      show: showLegend,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      itemMargin: {
        horizontal: 5,
        vertical: 1,
      },
      markers: {
        width: 8,
        height: 8,
      },
    },
  };

  return (
    <Container style={style} className="chart">
      <ReactApexChart
        options={options}
        height={height ? height : "100%"}
        series={series}
        type="polarArea"
      />
    </Container>
  );
}

const Container = styled.div``;
