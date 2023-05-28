alert('Selamat datang di game Tebak Angka!\nAnda akan bermain 5 ronde. Tebak angka antara 1 -3.\nSetiap pemain tidak boleh memilih angka yang sama.');

let totalRounds = 5;
let player1Score = 0;
let player2Score = 0;

for (var round = 1; round <= totalRounds; round++) {
  alert('Ronde ke-' + round);

  let player1Guess = parseInt(prompt('Pemain 1, masukkan tebakan angka:'));
  let player2Guess = parseInt(prompt('Pemain 2, masukkan tebakan angka:'));

  // Tebakan pemain
  if (isNaN(player1Guess) || player1Guess < 1 || player1Guess > 3 || isNaN(player2Guess) || player2Guess < 1 || player2Guess > 3) {
    alert('Harap masukkan angka 1-3.');
    round--;
    continue;
  }

  // Angka yang sama
  if (player1Guess === player2Guess) {
    alert('Pemain tidak boleh memilih angka yang sama.');
    round--;
    continue;
  }

  let randomNumber = Math.floor(Math.random() * 3) + 1;

  alert('Angka yang benar adalah: ' + randomNumber);

  // Hitung skor pemain
  if (player1Guess === randomNumber) {
    player1Score++;
    alert('Pemain 1 berhasil menebak angka dengan benar!');
  } else {
    alert('Pemain 1 gagal menebak angka.');
  }

  if (player2Guess === randomNumber) {
    player2Score++;
    alert('Pemain 2 berhasil menebak angka dengan benar!');
  } else {
    alert('Pemain 2 gagal menebak angka.');
  }
}

// Menentukan pemenang
let winner;
if (player1Score > player2Score) {
  winner = 'Pemain 1';
} else if (player1Score < player2Score) {
  winner = 'Pemain 2';
} else {
  winner = 'Permainan seri';
}

alert('Permainan selesai!\nSkor akhir:\nPemain 1: ' + player1Score + ' poin\nPemain 2: ' + player2Score + ' poin\n\n' + winner + ' menang!');
