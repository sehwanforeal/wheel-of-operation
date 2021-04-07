import styled from "styled-components";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const mockdata = {
  series: [10, 5, 8, 3, 7, 10, 8, 6],
  //   series: [1, 2],
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
      show: true,
      position: "bottom",
      //   horizontalAlign: "left",
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

type Props = {};

export default function PolarAreaChart({}: Props) {
  return (
    <Container className="chart">
      <ReactApexChart
        options={mockdata.options}
        height={"100%"}
        series={mockdata.series}
        type="polarArea"
      />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 60px;
  height: 300px;
`;
