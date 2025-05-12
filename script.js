// Booking form logic
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(bookingForm);
    const entry = Object.fromEntries(data);
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(entry);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    alert('Booking saved!');
    bookingForm.reset();
  });
}

// Client form logic
const clientForm = document.getElementById('clientForm');
if (clientForm) {
  clientForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(clientForm);
    const entry = Object.fromEntries(data);
    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.push(entry);
    localStorage.setItem('clients', JSON.stringify(clients));
    alert('Client saved!');
    clientForm.reset();
  });
}

// Income form logic
const incomeForm = document.getElementById('incomeForm');
if (incomeForm) {
  incomeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(incomeForm);
    const entry = Object.fromEntries(data);
    let income = JSON.parse(localStorage.getItem('income')) || [];
    income.push(entry);
    localStorage.setItem('income', JSON.stringify(income));
    alert('Income saved!');
    incomeForm.reset();
  });
}

// Render Bookings
document.addEventListener("DOMContentLoaded", function () {
  const bookingsList = document.getElementById('bookings-list');
  function renderBookings() {
    bookingsList.innerHTML = ''; // Clear any existing bookings
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.forEach(booking => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${booking.clientName}</td>
        <td>${booking.bookingDate}</td>
        <td>${booking.bookingTime}</td>
        <td>${booking.details}</td>
      `;
      bookingsList.appendChild(tr);
    });
  }
  renderBookings();
});

// Render Clients
document.addEventListener("DOMContentLoaded", function () {
  const clientsList = document.getElementById('clients-list');
  function renderClients() {
    clientsList.innerHTML = ''; // Clear previous clients
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.forEach(client => {
      const li = document.createElement('li');
      li.textContent = client.clientName;
      clientsList.appendChild(li);
    });
  }
  renderClients();
});

// Render Income
document.addEventListener("DOMContentLoaded", function () {
  const incomeList = document.getElementById('income-list');
  function renderIncome() {
    incomeList.innerHTML = ''; // Clear previous income entries
    const income = JSON.parse(localStorage.getItem('income')) || [];
    income.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = `${entry.amount} on ${entry.date} - ${entry.source}`;
      incomeList.appendChild(li);
    });
  }
  renderIncome();
});
