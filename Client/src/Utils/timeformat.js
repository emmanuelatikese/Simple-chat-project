function formatTimeWithAMPM(dateString) {
  // Create a new Date object
  const date = new Date(dateString);

  // Get the local hours and minutes
  let hours = date.getHours();  // Local hours
  const minutes = date.getMinutes();  // Local minutes

  // Determine AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours) as 12

  // Format minutes to always have two digits
  let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  formattedMinutes = isNaN(minutes) ? '00' : formattedMinutes;

  // Return the formatted time
  return `${hours}:${formattedMinutes} ${ampm}`;
}


export default formatTimeWithAMPM;