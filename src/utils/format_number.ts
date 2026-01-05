// Format using US English locale for commas and specify minimum fraction digits
const formattedNumber = (number: number) => {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
  return formattedNumber;
};

export default formattedNumber;
