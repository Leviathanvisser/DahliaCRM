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
