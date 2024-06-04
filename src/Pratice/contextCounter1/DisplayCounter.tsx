import { useCounterContext } from "./CounterContext";

export default function DisplayCounter() {
  let [value] = useCounterContext()

  return <div>{value}</div>;
}
