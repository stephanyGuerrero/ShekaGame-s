class PrincipalController {
    constructor(){
        this.jogosG = [];
    }
    mario(){
        this.esconder();
        document.getElementById("cambio").innerHTML = '<object type="text/html" data="../mario-bros/mario.html" ></object>';
       }
    kirby(){
        this.esconder();
        document.getElementById("cambio").innerHTML = '<object type="text/html" data="../kirby/kirby.html" ></object>';
    }
    pacMan(){
        this.esconder();
        document.getElementById("cambio").innerHTML = '<object type="text/html" data="../pac-man/pacMan.html" ></object>';
    }
    donkeyKong(){
        this.esconder();
        document.getElementById("cambio").innerHTML = '<object type="text/html" data="../donkey-kong/donkey.html" ></object>';
    }
    sonic(){
        this.esconder();
        document.getElementById("cambio").innerHTML = '<object type="text/html" data="../sonic/sonic.html" ></object>';
    }
    
    inicial(){
        this.mostrar();
    window.location.href= "principal.html";

    }
    esconder(){
        document.getElementById("buscador").style.display = "none";
       
        }
    mostrar(){
        document.getElementById("buscador").style.display = "block";
        
    }
       
    buscar(event){
               // if(event.keyCode == 13 || event.type == "click"){
        setTimeout(()=>{
            this.jogosG = [];
            var jogo = document.getElementById("buscador").value;
            if(jogo != "" ){

                for(var i = 0 ; i < jogosM.length; i++){
                    if(jogosM[i].nomeDoJogo.toLowerCase().indexOf(jogo.toLowerCase()) >= 0 ){
                        this.jogosG.push(jogosM[i]);
                    }
                }

                for(var i = 0 ; i < jogosK.length; i++){

                    if(jogosK[i].nomeDoJogo.toLowerCase().indexOf(jogo.toLowerCase()) >= 0 ){
                        this.jogosG.push(jogosK[i]);
                    }
                }

                for(var i = 0 ; i < jogosP.length; i++){

                    if(jogosP[i].nomeDoJogo.toLowerCase().indexOf(jogo.toLowerCase()) >= 0 ){
                        this.jogosG.push(jogosP[i]);
                    }
                }

                for(var i = 0 ; i < jogosD.length; i++){

                    if(jogosD[i].nomeDoJogo.toLowerCase().indexOf(jogo.toLowerCase()) >= 0 ){
                    this.jogosG.push(jogosD[i]);
                    }

                }
                for(var i = 0 ; i < jogosS.length; i++){

                    if(jogosS[i].nomeDoJogo.toLowerCase().indexOf(jogo.toLowerCase()) >= 0 ){
                    this.jogosG.push(jogosS[i]);
                    }
                    
                }
            }
            this.exibirJogosG();

        }, 100);       
         

    }
   
    
          
    exibirJogosG(){
    
        document.getElementById("cambio").innerHTML = "";
        
        for( var i =0 ;i< this.jogosG.length;i++){
        var exibir = document.createElement("div");
        exibir.className = this.jogosG[i].classe;
    
        var nomeDoJogo = document.createElement("span");
        nomeDoJogo.className = "nomeDoJogo";
        nomeDoJogo.innerText = this.jogosG[i].nomeDoJogo;
        exibir.appendChild(nomeDoJogo);

        var imagem = document.createElement("img");
        imagem.className = "imagens";
        imagem.src = this.jogosG[i].imagem;
        exibir.appendChild(imagem);

        var data = document.createElement("div");
        data.className = "data";
        data.innerText = this.jogosG[i].data;
        exibir.appendChild(data);

        var genero = document.createElement("div");
        genero.className = "genero";
        genero.innerText = this.jogosG[i].genero;
        exibir.appendChild(genero);
    
        var consola = document.createElement("h4");
        consola.className = "consolas";
        consola.innerText = this.jogosG[i].consola;
        exibir.appendChild(consola);
        

        
        document.getElementById("cambio").appendChild(exibir);
        }
    }


}let principalController = new PrincipalController();