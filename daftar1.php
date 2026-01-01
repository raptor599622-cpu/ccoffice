<?php
// koneksi database
$conn = new mysqli("localhost", "root", "", "db_login");

// cek koneksi
if ($conn->connect_error) {
  die("Koneksi gagal");
}

// ambil data dari form
$nama     = $_POST['nama'] ?? '';
$email    = $_POST['email'] ?? '';
$wa       = $_POST['wa'] ?? '';
$password = $_POST['password'] ?? '';

// validasi server-side
if (!$nama || !$email || !$wa || !$password) {
  echo "Semua field wajib diisi";
  exit;
}

if (strlen($password) < 8) {
  echo "Password minimal 8 karakter";
  exit;
}

// hash password (WAJIB)
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

// simpan ke database
$sql = "INSERT INTO users (nama, email, wa, password)
        VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nama, $email, $wa, $passwordHash);

if ($stmt->execute()) {
  echo "Registrasi berhasil";
} else {
  echo "Registrasi gagal";
}

$stmt->close();
$conn->close();
