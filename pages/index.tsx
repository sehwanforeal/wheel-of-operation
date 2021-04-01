import RateStarts from "../components/RateStars";

export default function Home() {
  const onRateChange = (value: number) => console.log(value);
  return <RateStarts onChange={onRateChange}></RateStarts>;
}
