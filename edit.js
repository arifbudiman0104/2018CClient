// function update() {
//     let url = "http://localhost:8080/2018CWS1/webresources/mhs.mahasiswa";
//     let show = document.getElementById("show");

//     let viewId = document.getElementById("id");
//     let viewNama = document.getElementById("nama");
//     let viewAlamat = document.getElementById("nim");
//     viewId.value = "1";
//     viewNama.value = "Arif";
//     viewAlamat.value = "Banyumas";
// }

function findbyid(){
    let view = document.getElementById("data");
    let idobj = document.getElementById('inputid');
    let idn = document.elements[0].value;
    let url = "http://localhost:8080/2018CWS1/webresources/mhs.mahasiswa";
    let urls = url + '/' + idn;

    $.ajax({
        url: urls,
        method: 'GET',
        dataType : 'xml',
        success: function (resp) {
            if (resp != null) {
                view.innerHTML = "data ketemu";
            } else {
                view.innerHTML = "data tidak ketemu";
            }
            
        },
        fail: function (e) {
            alert('error');
        }
    })
}