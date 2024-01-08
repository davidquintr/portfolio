interface DateParser {
  dateTarget: Date;
  language: string;
}

const date = ({ dateTarget, language }: DateParser): string => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return language == "es"
    ? `${dateTarget.getDate() + 1} de ${
        meses[dateTarget.getMonth()]
      } de ${dateTarget.getFullYear()}`
    : `${months[dateTarget.getMonth()]} ${
        dateTarget.getDate() + 1
      }, ${dateTarget.getFullYear()}`;
};

export default date;
