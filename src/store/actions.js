export default function changeLanguage(langData) {
  return {
    type: "SET_LANGUAGE",
    payload: langData,
  };
}
// function changeFavorites(movies) {
//   return {
//     type: "SET_FAVORITES",
//     payload: movies,
//   };
// }
// function changeCounter(newCount) {
//   return {
//     type: "SET_COUNTER",
//     payload: newCount,
//   };
// }
