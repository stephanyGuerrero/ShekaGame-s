class KirbyController{
    constructor(){
        this.jogos = jogosK;
        
        
        this.exibirJogosK();
    
    }
    exibirJogosK(){
    
    
        
        for( var i =0 ;i< this.jogos.length;i++){
        var exibir = document.createElement("div");
        exibir.className = "jogoK";
    
        var nomeDoJogo = document.createElement("span");
        nomeDoJogo.className = "nomeDoJogo";
        nomeDoJogo.innerText = this.jogos[i].nomeDoJogo;
        exibir.appendChild(nomeDoJogo);

        var imagem = document.createElement("img");
        imagem.className = "imagens";
        imagem.src = this.jogos[i].imagem;
        exibir.appendChild(imagem);

        var data = document.createElement("div");
        data.className = "data";
        data.innerText = this.jogos[i].data;
        exibir.appendChild(data);

        var genero = document.createElement("div");
        genero.className = "genero";
        genero.innerText = this.jogos[i].genero;
        exibir.appendChild(genero);
    
        var consola = document.createElement("h4");
        consola.className = "consolas";
        consola.innerText = this.jogos[i].consola;
        exibir.appendChild(consola);

        
        document.body.appendChild(exibir);
        }
    }


} let kirbyController = new KirbyController();