export function FormattedDate(): string {
  const date = new Date();
  const day =
    date.getDate() + 1 > 9 ? date.getDate() : `0${date.getDate() + 1}`;

  const mouth =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const year = date.getFullYear();

  return `${day}/${mouth}/${year}`;
}
