// Booking form logic
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  console.log('Booking form found');
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Debugging: Log form submission
    console.log('Form submitted');
    
    const data = new FormData(bookingForm); // Collect form data
    const entry = Object.fromEntries(data); // Convert FormData to object

    // Debug: log the form data
    console.log('Booking Form Data:', entry);

    // Check if the entry has required fields (clientName, bookingDate, etc.)
    if (!entry.clientName || !entry.bookingDate || !entry.bookingTime) {
      console.log('Error: Missing required booking fields.');
      alert('Please fill in all required fields.');
      return;
    }

    // Get existing bookings or initialize an empty array
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    console.log('Existing Bookings:', bookings); // Log existing bookings

    bookings.push(entry); // Add new booking to the array
    console.log('Updated Bookings:', bookings); // Log updated bookings array

    localStorage.setItem('bookings', JSON.stringify(bookings)); // Save the updated array to localStorage

    alert('Booking saved!');
    bookingForm.reset(); // Reset form

    renderBookings(); // Re-render the bookings list
  });
}

// Render Bookings (on page load)
document.addEventListener("DOMContentLoaded", function () {
  renderBookings(); // Render bookings when the page is loaded
});

function renderBookings() {
  const bookingsList = document.getElementById('bookings-list');
  if (!bookingsList) {
    console.log('Error: bookings-list element not found!');
    return;
  }

  bookingsList.innerHTML = ''; // Clear any existing bookings

  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  console.log('Stored Bookings:', bookings); // Log the stored bookings

  bookings.forEach(booking => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${booking.clientName}</td>
      <td>${booking.bookingDate}</td>
      <td>${booking.bookingTime}</td>
      <td>${booking.details}</td>
    `;
    bookingsList.appendChild(tr); // Append the new booking to the table
  });
}
