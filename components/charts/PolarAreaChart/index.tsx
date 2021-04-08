import styled from "styled-components";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const mockdata = {
  series: [10, 5, 8, 3, 7, 10, 8, 6],
  options: {
    chart: {},
    labels: [
      "목표관리 및 목표공유",
      "지표 가시성",
      "조직 유연성",
      "고객경험 관리 디자인",
      "이슈관리 ",
      "커뮤니케이션 ",
      "서비스 개선",
      "직무 자신감",
    ],
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.9,
    },
    legend: {
      show: false,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "11px",
      itemMargin: {
        horizontal: 5,
        vertical: 1,
      },
      markers: {
        width: 8,
        height: 8,
      },
    },
  },
};

type Props = { style: React.CSSProperties };

export default function PolarAreaChart({ style }: Props) {
  return (
    <Container style={style} className="chart">
      <ReactApexChart
        options={mockdata.options}
        height={"100%"}
        series={mockdata.series}
        type="polarArea"
      />
    </Container>
  );
}

const Container = styled.div``;
