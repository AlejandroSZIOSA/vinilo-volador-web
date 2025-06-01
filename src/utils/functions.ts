//Fn Current Date and Time
export function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Months are 0-indexed
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return `${year}-${month}-${day}/${hours}:${minutes}`;
}
