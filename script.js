let konfirmasi = confirm("Mau Main Tebak Angka")

while(konfirmasi == true){
    
    let Bot = Math.floor(Math.random() * 10 + 1);
    console.log(Bot);

    let user = prompt("Tebak Angka 1 - 10")
    if(user == Bot){
        alert("Selamat Anda Benar !!")
    }else if(user < Bot){
        alert("Angka Anda Terlalu Rendah !!")
    }else if(user > Bot){
        alert("Angka Anda Terlalu Tinggi !!")
    }else{
        konfirmasi = false
    }

    konfirmasi = confirm("Mau Lanjut Lagi?")
    while(user != Bot && konfirmasi == true){
        user = parseInt(prompt("Ayo Coba Lagi"))
        if(user == Bot){
            alert("Selamat Anda Benar !!")
            konfirmasi = confirm("Mau Lanjut Lagi??")
        }else if(user < Bot){
            alert("Angka Anda Terlalu Rendah !!")
            konfirmasi = confirm("Mau Lanjut Lagi??")
        }else if(user > Bot){
            alert("Angka Anda Terlalu Tinggi !!")
            konfirmasi = confirm("Mau Lanjut Lagi??")
        }else{
            konfirmasi = false
        }
    }
}