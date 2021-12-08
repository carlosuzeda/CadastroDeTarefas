document.querySelector("#botao").onclick = function(){
    var campo = document.querySelector("#campo").value;
    var nome = document.querySelector("#nome").value;
    var lista = document.querySelector("#lista");

    if (parseFloat(campo) || isNaN(campo)){
        if (parseFloat(nome) || isNaN(nome))
        lista.innerHTML += `<li>${campo} - cadastrado por ${nome}</li>`;
        else{
            alert("O campo nome não pode estar em branco!")
            document.querySelector("#campo").focus;
        }
    }else{
        alert("O campo não pode estar em branco!")
        document.querySelector("#campo").focus;
} 
}