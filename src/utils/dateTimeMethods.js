export const getTime = () => {
   const dateObject = new Date();
   const hours = dateObject.getHours();
   const partOfDay = hours < 12 ? 'AM' : 'PM';
   const minutes = dateObject.getMinutes();
   const seconds = dateObject.getSeconds();

   return { hours, partOfDay, minutes, seconds };
};

export const getDayMonthNameYearStr = isoString => {
   const date = new Date(isoString);

   const monthName = date.toLocaleString('en-us', { month: 'short' });
   const dayOfTheMonth = date.getDate();
   const year = date.getFullYear();

   const dateStr = `${dayOfTheMonth} ${monthName} ${year}`;
   return dateStr;
};

export const getSpecificDateDetails = isoString => {
   const date = new Date(isoString);

   const monthName = date.toLocaleString('en-us', { month: 'short' });
   const dayNumber = parseInt(date.getDate());
   const month = parseInt(date.getMonth() + 1);
   const year = parseInt(date.getFullYear());

   return { dayNumber, month, year, monthName };
};

export const getRemainingTime = isoString => {
   const deadlineDate = new Date(isoString);
   const curDate = new Date();
   const timeDiff = deadlineDate - curDate;
   const monthInMs = 1000 * 60 * 60 * 24 * 30.44;
   const dayInMs = 1000 * 60 * 60 * 24;
   const hourInMs = 1000 * 60 * 60;
   const minuteInMs = 1000 * 60;

   const remainingMonths = Math.floor(timeDiff / monthInMs);
   const remainingDays = Math.floor((timeDiff % monthInMs) / dayInMs);
   const remainingHours = Math.floor((timeDiff % dayInMs) / hourInMs);
   const remainingMinutes = Math.floor((timeDiff % hourInMs) / minuteInMs);
   const remainingSeconds = Math.floor((timeDiff % minuteInMs) / 1000);

   return {
      months: remainingMonths,
      days: remainingDays,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
   };
};

export const getDateInYYYYMMDD = isoString => {
   const date = new Date(isoString);
   const year = date.getFullYear();
   const month = (date.getMonth() + 1).toString().padStart(2, '0');
   const day = date.getDate().toString().padStart(2, '0');

   return `${year}-${month}-${day}`;
};

export const padTime = (data = 0) => {
   return data < 10 ? data.toString().padStart(2, '0') : data;
};
