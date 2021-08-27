export function FormattedHour(): string {
  const formattedHour = new Date();
  const hour =
    formattedHour.getHours() > 9
      ? formattedHour.getHours()
      : `0${formattedHour.getHours()}`;
  const minutes =
    formattedHour.getMinutes() > 9
      ? formattedHour.getMinutes()
      : `0${formattedHour.getMinutes()}`;
  return `${hour}:${minutes}`;
}
