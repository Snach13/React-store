export const currentDate = () => {
  const todayDate = new Date();
  const year = todayDate.toLocaleString("default", { year: "numeric" });
  const parsedMonth = todayDate.toLocaleString("default", { month: "2-digit" });
  const parsedDay = todayDate.toLocaleString("default", { day: "2-digit" });
  const parsedDate = `${year}/${parsedMonth}/${parsedDay}`;
  return parsedDate;
};
