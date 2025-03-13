function angka(value){
    document.getElementById("tampil").value += value;
}

function hapus(){
    document.getElementById("tampil").value = "";
}

function operator(op) {
    document.getElementById("tampil").value += op;
}

function hasil(){
    const tampil= document.getElementById("tampil");

    try {
        tampil.value = eval(tampil.value);
    } catch (error) {
        tampil.value = "Error"; 
    }
}