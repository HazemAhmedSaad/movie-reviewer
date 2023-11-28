export default function changeCounter(movies) {
  return {
    type: "SET_COUNTER",
    payload: movies,
  };
}