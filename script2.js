const ktpBox = document.getElementById("ktpBox");
const ktpInput = document.getElementById("ktpInput");
const ktpPreview = document.getElementById("ktpPreview");
const ktpError = document.getElementById("ktpError");

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


/* Klik kotak → buka file/kamera */
ktpBox.addEventListener("click", () => {
  ktpInput.click();
});

/* Setelah foto dipilih */
ktpInput.addEventListener("change", () => {
  const file = ktpInput.files[0];
  if (!file) return;

  // validasi tipe file
  if (!file.type.startsWith("image/")) {
    ktpError.textContent = "File harus berupa gambar";
    ktpInput.value = "";
    return;
  }

  // validasi ukuran (max 2MB)
  if (file.size > 2 * 1024 * 1024) {
    ktpError.textContent = "Ukuran foto maksimal 2MB";
    ktpInput.value = "";
    return;
  }

  // preview KTP
  ktpPreview.src = URL.createObjectURL(file);
  ktpPreview.hidden = false;
  ktpError.textContent = "";

  // efek sukses
  ktpBox.style.borderColor = "#4fd1c5";
});
