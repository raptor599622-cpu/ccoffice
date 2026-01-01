const form = document.getElementById("form");
const nameInput = document.getElementById("nameInput");
const email = document.getElementById("email");
const wa = document.getElementById("wa");
const password = document.getElementById("password");

const nameInput_error = document.getElementById("nameInput_error");
const email_error = document.getElementById("email_error");
const wa_error = document.getElementById("wa_error");
const passsword_error = document.getElementById("passsword_error");

/* ---------- FORM KOSONG WAJIB DIISI ---------- */
form.addEventListener("submit", (e) => {
  if (nameInput.value === "" || nameInput.value == null) {
    e.preventDefault();
    nameInput_error.innerHTML = "Nama harus diisi";
  }

  if (email.value === "" || email.value == null) {
    e.preventDefault();
    email_error.innerHTML = "Email harus diisi";
  }

  if (wa.value === "" || wa.value == null) {
    e.preventDefault();
    wa_error.innerHTML = "Nomor whatsapp harus diisi";
  }

  if (password.value === "" || password.value == null) {
    e.preventDefault();
    password_error.innerHTML = "Kata sandi harus harus diisi";
  }
});

/* ---------- KAPITAL DIAWAL KATA UNTUK NAMA ---------- */
nameInput.addEventListener("input", () => {
  nameInput.value = nameInput.value
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
});

/* ---------- EMAIL HANYA BISA DIISI DENGAN EMAIL SEBERNARNYA ---------- */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

email.addEventListener("input", () => {
  if (!emailRegex.test(email.value)) {
    email_error.textContent = "Email tidak valid (harus pakai @)";
  } else {
    email_error.textContent = "";
  }
});

/* ---------- NOMOR WA HANYA BISA DIISI ANGKA ---------- */
wa.addEventListener("input", () => {
  wa.value = wa.value.replace(/[^0-9]/g, "");
});

/* ---------- PASSWORD MIN 6 MAX 8 KARAKTER ---------- */
password.addEventListener("input", () => {
  const length = password.value.length;

  if (length > 8) {
    password.value = password.value.slice(0, 8);
    password_error.textContent = "Maksimal 8 karakter";
    return;
  }

  if (length > 0 && length < 6) {
    password_error.textContent = "Minimal 6 karakter";
  } else {
    password_error.textContent = "";
  }
});

