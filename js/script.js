document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    document.querySelectorAll('.form-group input, .form-group textarea').forEach(function (inputElement) {
        inputElement.classList.remove('input-invalid');
        inputElement.nextElementSibling.textContent = '';
    });

    let ada = true;

    const name = document.getElementById('name');
    if (!name.value.trim()) {
        document.querySelector('#name').nextElementSibling.textContent = 'Nama harus diisi.';
        name.classList.add('input-invalid');
        ada = false;
    }

    const tgl_lahir = document.getElementById('tgl_lahir');
    if (!tgl_lahir.value.trim()) {
        document.querySelector('#tgl_lahir').nextElementSibling.textContent = 'Tanggal lahir harus diisi.';
        tgl_lahir.classList.add('input-invalid');
        ada = false;
    }

    const genderErrorDiv = document.getElementById('gender-error');
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        genderErrorDiv.textContent = 'Gender harus dipilih.';
        ada = false;
    } else {
        genderErrorDiv.textContent = '';
    }

    const message = document.getElementById('pesan');
    if (!message.value.trim()) {
        document.querySelector('#pesan').nextElementSibling.textContent = 'Pesan tidak boleh kosong.';
        message.classList.add('input-invalid');
        ada = false;
    }
    if (ada) {
        alert('Form berhasil disubmit!');
    }
});

function kirim() {
    let waktu = Date();
    let nama = document.forms['pesan']['name'].value
    let tanggal = document.forms['pesan']['tgl_lahir'].value
    let jk = document.querySelector('input[name="gender"]:checked').value
    let pesan = document.forms['pesan']['pesan'].value
    console.log(tanggal, nama)

    document.getElementById('current-time').innerHTML = waktu;
    document.getElementById('display-name').innerHTML = nama;
    document.getElementById('display-tgl_lahir').innerHTML = tanggal;
    document.getElementById('display-jk').innerHTML = jk;
    document.getElementById('display-pesan').innerHTML = pesan;
}

