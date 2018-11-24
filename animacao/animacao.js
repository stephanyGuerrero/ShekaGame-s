class AnimacaoController {
    
    getName () {
        let name = localStorage.getItem('nome');
        document.getElementById('name').innerHTML = name;
    }
}

var animacaoController = new AnimacaoController()

setTimeout(()=>{
window.location ="../tela-principal/principal.html";
},4000)