export type DateType = {
  year: string;
  month: string;
  day: string;
  hours: string;
  minutes: string;
};

export function getDate(): DateType {
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());

  return { year, month, day, hours, minutes };
}
