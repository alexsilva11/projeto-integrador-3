let editAll = document.querySelectorAll('a.edit');
let chkAdotado = document.getElementById('adotado');
let btnAtualizar = document.getElementById('btn-atualizar');
let updateForm = document.getElementById('form-atualizar');

async function onClickEdit(e) {
    let id = (e.target.id).replace('edit_','');
    console.log(id)

    let pet = await fetch('/pet?id='+ id)
        .then(response => response.json())
        .then(data => {return data})
    
    console.log(pet)

    document.getElementById('id').value = pet.id;
    document.getElementById('nome').value = pet.nome;
    document.getElementById('descricao').value = pet.descricao;
    document.getElementById('contato').value = pet.contato;
    if(pet.adotado){
        document.getElementById('adotado').checked = true;
    } else {
        document.getElementById('adotado').checked = false;
    }
    

    $('#edit-modal').modal('show');

    
};

const onChangeAdotado = (e) => {
    console.log(e)
    if(e.target.checked) {
        document.getElementById('dataAdotado').value = new Date();
    } else {
        document.getElementById('dataAdotado').value = null;
    }
}

for(edit of editAll) {
    edit.addEventListener('click', onClickEdit);
}

chkAdotado.addEventListener('change', onChangeAdotado);


let numberOfItems = $('#table .table-items').length;
let limitPerPage = 5;
let totalPages = Math.ceil(numberOfItems / limitPerPage);


$("#table .table-items").slice(limitPerPage).hide();
$(".pagination").append("<li class='page-item current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

for (let i = 2; i <= totalPages; i++) {
    $(".pagination").append("<li class='page-item current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
}

$(".pagination").append("<li id='next-page' class='page-item'><a class='page-link' href='javascript:void(0)' aria-label='Next'><span aria-hidden='true'>&raquo;</span><span class='sr-only'>Next</span></a></li>");



$(".pagination li.current-page").on("click", function () {
    if ($(this).hasClass("active")) {
        return false
    } else {
        let currentPage = $(this).index();
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
        $("#table .table-items").hide();

        hidePagination();

        let grandTotal = limitPerPage * currentPage;

        for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#table .table-items:eq(" + i + ")").show();
        };
    };
});


hidePagination();


$("#next-page").on("click", function () {
    let currentPage = $(".pagination li.active").index();
    
    if (currentPage === totalPages) {
        return false;
    } else {
        currentPage++;
        $(".pagination li").removeClass("active");
        $("#table .table-items").hide();
        let grandTotal = limitPerPage * currentPage;
        for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#table .table-items:eq(" + i + ")").show();
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
        hidePagination();
    };
});

$("#previous-page").on("click", function () {
    let currentPage = $(".pagination li.active").index();
    $(".pagination li.current-page").slice((currentPage - 2), (currentPage + 2) ).show();
    
    if (currentPage === 1) {
        return false;
    } else {
        currentPage--;
        $(".pagination li").removeClass("active");
        $("#table .table-items").hide();
        let grandTotal = limitPerPage * currentPage;
        for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#table .table-items:eq(" + i + ")").show();
        }
        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
        hidePagination();
    };
});


function hidePagination() {
    let currentPage = $(".pagination li.active").index();
    let minLength = currentPage - 2;
    let maxLength = currentPage + 1;
    if(currentPage == 1){
        minLength = 0;
        maxLength = currentPage + 3;
    }
    if(currentPage == 2){
        minLength = 1;
        maxLength = currentPage + 2;
    }
    if(currentPage == ($(".pagination li.current-page").length)){
        minLength = currentPage - 4;
        maxLength = currentPage + 0;
    }
    if(currentPage == ($(".pagination li.current-page").length - 1)){
        minLength = currentPage - 3;
        maxLength = currentPage + 1;
    }

    $(".pagination li.current-page").hide()
    $(".pagination li.current-page").eq(0).show();
    $(".pagination li.current-page").eq(($(".pagination li.current-page").length - 1)).show();
    $(".pagination li.current-page").slice(minLength, maxLength).show();
}