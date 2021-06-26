var exibirSobre = function(){
    divSobre = document.querySelector('#sobre');
    divHab = document.querySelector('#habilidades');
    divForm = document.querySelector('#formacao');
    divHob = document.querySelector('#hobbies');
    divBok = document.querySelector('#books');
 
    divSobre.style.display = "block";
    divHab.style.display = "none";
    divForm.style.display = "none";
    divHob.style.display = "none";
    divBok.style.display = "none";
}
var exibirHabilidade = function(){
    divSobre = document.querySelector('#sobre');
    divHab = document.querySelector('#habilidades');
    divForm = document.querySelector('#formacao');
    divHob = document.querySelector('#hobbies');
    divBok = document.querySelector('#books');
 
    divSobre.style.display = "none";
    divHab.style.display = "block";
    divForm.style.display = "none";
    divHob.style.display = "none";
    divBok.style.display = "none";
}
var exibirFormacao = function(){
    divSobre = document.querySelector('#sobre');
    divHab = document.querySelector('#habilidades');
    divForm = document.querySelector('#formacao');
    divHob = document.querySelector('#hobbies');
    divBok = document.querySelector('#books');
 
    divSobre.style.display = "none";
    divHab.style.display = "none";
    divForm.style.display = "block";
    divHob.style.display = "none";
    divBok.style.display = "none";
}
var exibirHobbies = function(){
    divSobre = document.querySelector('#sobre');
    divHab = document.querySelector('#habilidades');
    divForm = document.querySelector('#formacao');
    divHob = document.querySelector('#hobbies');
    divBok = document.querySelector('#books');
 
    divSobre.style.display = "none";
    divHab.style.display = "none";
    divForm.style.display = "none";
    divHob.style.display = "block";
    divBok.style.display = "none";
}
var exibirBooks = function(){
    console.log('clicado no exibir book');
    divSobre = document.querySelector('#sobre');
    divHab = document.querySelector('#habilidades');
    divForm = document.querySelector('#formacao');
    divHob = document.querySelector('#hobbies');
    divBok = document.querySelector('#books');
 
    divSobre.style.display = "none";
    divHab.style.display = "none";
    divForm.style.display = "none";
    divHob.style.display = "none";
    divBok.style.display = "block";
}