export function getCurrentDate() {
  const date = new Date().toISOString().slice(0, 10);
  return date;
}

export function getCurrentDateMinus(minusDays: number) {
  const date = new Date();
  date.setDate(date.getDate() - minusDays);
  return date.toISOString().slice(0, 10);
}
