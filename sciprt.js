function kirimData() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.getElementById("peminatan").value;
    var tanggal = document.getElementById("tanggal").value;
    var alamat = document.getElementById("alamat").value;
  
    // Format the data for display
    alert(
        "Nama : " + name +
        "\nNIM : " + nim +
        "\npeminatan : " + peminatan +
        "\nAlamat : " + alamat
    ) 
   
  
    // Display the formatted data
    var displayElement = document.getElementById("kirim-data");
    displayElement.innerHTML = formattedData;
  }
  