import { format, parseISO, set } from "date-fns";

const formatDate = (date) => {
  try {
    const newDate = new Date(date).toISOString();
    const inFormat = format(parseISO(newDate), "yyyy-MM-dd");
    return inFormat;
  } catch (err) {
    console.log(err);
    return "date error";
  }
};

export default formatDate;
