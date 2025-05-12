document.addEventListener("DOMContentLoaded", function () {
  // ---------------------
  // Booking Form Handling
  // ---------------------
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(bookingForm);
      const entry = Object.fromEntries(data.entries());

      const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
      bookings.push(entry);
      localStorage.setItem("bookings", JSON.stringify(bookings));
      alert("Booking saved!");
      bookingForm.reset();
    });
  }

  // ----------------------
  // Display Bookings Table
  // ----------------------
  const bookingsList = document.getElementById("bookings-list");
  if (bookingsList) {
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.forEach(booking => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${booking.clientName}</td>
        <td>${booking.bookingDate}</td>
        <td>${booking.bookingTime}</td>
        <td>$${booking.price || "N/A"}</td>
        <td>${booking.details || ""}</td>
      `;
      bookingsList.appendChild(tr);
    });
  }

  // -------------------
  // Client Form Saving
  // -------------------
  const clientForm = document.getElementById("clientForm");
  if (clientForm) {
    clientForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(clientForm);
      const entry = Object.fromEntries(data.entries());

      const clients = JSON.parse(localStorage.getItem("clients")) || [];
      clients.push(entry);
      localStorage.setItem("clients", JSON.stringify(clients));
      alert("Client saved!");
      clientForm.reset();
    });
  }

  // ----------------------
  // Display Clients in List
  // ----------------------
  const clientsList = document.getElementById("clients-list");
  if (clientsList) {
    const clients = JSON.parse(localStorage.getItem("clients")) || [];
    clients.forEach(client => {
      const li = document.createElement("li");
      li.textContent = `${client.clientName} | 📞 ${client.clientPhone} | ✉️ ${client.clientEmail}`;
      clientsList.appendChild(li);
    });
  }
});
