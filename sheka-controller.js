class ShekaController {
    constructor() {
        this.pessoa = new Pessoa();


    }
   
    login(event) {
        console.log(event);
        if(event.keyCode == 13 || event.type == "click"){
        this.pessoa.nome = document.getElementById("nome").value;
        localStorage.setItem('nome', this.pessoa.nome);
       
        if(this.validacao() == true){
            window.location = "animacao/animacao.html";
        }
    }
    }


    validacao(){

        if(this.pessoa.nome ==""){
            alert("Tem que colocar um nome");
            return false;
        }else{
        return true;
        }
    } 

} var shekaController = new ShekaController();
