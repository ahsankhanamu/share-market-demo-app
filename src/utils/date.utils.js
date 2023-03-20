function dateAlphaNumShortMonthDate12HrMinTime(ms) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  //   create a new date object from the Epoch milliseconds
  let date = new Date(ms);
  //   Get date from date object and interpolate it with month name from months array
  let dateString = `${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  //   Get hours and minutes from date object and format it as AM or PM
  let hours = date.getHours();
  let AmOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  let minutes = date.getMinutes().toString().padStart(2, 0);

  //   interpolate the time string
  let timeString = `${hours}:${minutes} ${AmOrPm}`;

  //   finally interpolate the date and time string together
  return `${dateString} ${timeString}`; //12 December 2022 7:13 PM
}

export { dateAlphaNumShortMonthDate12HrMinTime };
// The above function can be extended to serve the variety of formats, or a sophesticated library such as MomentJS can be used.
