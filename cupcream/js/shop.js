function pesan() {
    
    // Ambil semua <li> sebagai array teks
    let items = $("#pilihan li").toArray().map(li => $(li).text());
    
    if (items.length === 0) {
        alert("Belum ada pesanan.");
        return;
    }
    
    // Hitung jumlah setiap item
    let count = {};
    items.forEach(item => {
        count[item] = (count[item] || 0) + 1;
    });
    
    // Bangun teks ringkasan untuk alert
    let total = items.length;
    let output = `Kamu memesan ${total} item, dengan:\n`;
    
    for (let nama in count) {
        output += `${count[nama]} ${nama}\n`;
    }
    
    alert(output);
    $("#pilihan").empty();  // hapus semua <li>
    flag = 0;               // reset jumlah item
}

// logika menambah item
let flag = 0;

function klik() {
    let isi = $("#dessert").val();
    if (!isi) return;

    if (flag === 10) {
        alert("1 kali pemesanan maksimal 10 item");
        return;
    }

    $("#pilihan").append(`<li>${isi}</li>`);
    flag++;
}

