function kirimData(){
    var nama = document.getElementById("nama").value
    var nim = getElementById("nim").value
    var peminatan = document.querySelector("inpu[name=peminatan]:checked").value
    var alamat = document.getElementById("alamat").value

    alert(
        "Nama Mahasiswa : " + nama +
        "\nNIM: " + Nim +
        "\nPeminatan : " + peminatan +
        "\nAlamat : "  + alamat 
    )
}
       
