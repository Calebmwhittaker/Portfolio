const getAge = () => {
  const birthYear = 2000;
  const birthMonth = 4;
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const age = currentYear - birthYear;
  if (currentMonth < birthMonth) {
    return age - 1;
  } else {
    return age;
  }
};

export default getAge;
