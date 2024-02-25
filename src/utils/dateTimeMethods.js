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

export const padTime = (data = 0) => {
   return data < 10 ? data.toString().padStart(2, '0') : data;
};
