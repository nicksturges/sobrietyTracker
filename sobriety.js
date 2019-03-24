const sobriety = () => {
  let dates = new Date();
  let soberDate = new Date(2019, 0, 26);
  let days = dates - soberDate;
  const howManyDays = days / (60 * 60 * 24 * 1000);
  let result = howManyDays.toFixed();
  document.getElementById("sober").innerHTML=result

};
sobriety();

