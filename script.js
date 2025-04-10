class Animal{
    constructor(tamanho,cor){
        this.tamanho = tamanho;
        this.cor = cor ;
        
    }
     comer(){
        console.log("comendo");
     }
    }
   class Cavalo extends Animal{
      constructor (tamanho,cor,raca){
         super(tamanho,cor);
         this.raca = raca;

        }
      fugir(){
        console.log("Fugiu do Simba");
      }
   }


     class Leao extends Animal{
        constructor (tamanho,cor,raca,juba){
            super(tamanho,cor,raca);
            this.juba = juba;
         } 
        cacar(){
            console.log("Simba ta caçando o cavalo");

        }
     }
       let vacalo = new Cavalo("selvagem,preto");
       console.log(vacalo);
       vacalo.fugir();

       let simba = new Leao("Grande");
       console.log(simba);
       simba.cacar();
   
