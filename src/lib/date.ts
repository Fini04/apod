export function getCurrentDate() {
  const date = new Date();
  let currentDay = String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
  let currentYear = date.getFullYear();

  // return date as YYYY-MM-DD
  return `${currentYear}-${currentMonth}-${currentDay}`;
}
