const list = [
    {
        id: 7113, 
        description:'BF na descida do carrossel 2 do lado terra. Rearmamento no QAC 09', 
        src:'assets/imagem.jpg'
    },
     
    {
        id: 7201,
        description:'Essa Bf fica próxima às BJ e o rearmamento é no QAC-09', 
        src:'assets/7202.jpg'
     }, 
     
     {
        id: 7101, 
        description:'Essa Bf fica próxima às BJ e o rearmamento é no QAC-09',
        src:'assets/7101.jpg'
     },

     {
        id: 7213,
        description: 'BF na descida do carrossel 2 do lado terra. Rearmamento no QAC-09', 
        src:'assets/7213.jpg'
     }, 

     {
        id: 2113,
        description: 'BF na saída do túneo 5. Rearmamento no QAC-09', 
        src:'assets/2113.jpg'
     }, 

     {
        id: 1301,
        description: 'BF próxima ao VB da linha 1. Rearmamento no QAC-06', 
        src:'assets/1301.jpg'
     }, 

     {
        id: 2502,
        description: 'BF próxima ao VB da linha 2. Rearmamento no QAC-06', 
        src:'assets/2502.jpg'
     }, 

     {
        id: 3305,
        description: 'BF próxima ao VB da linha 3. Rearmamento no QAC-08', 
        src:'assets/3305.jpg'
     }, 
     {
        id: "Entradas dos túneis",
        description: 'Essa imagem mostra exatamente onde fica as entradas e saídas dos túneis.', 
        src:'assets/entradas.jpg'
     }, 
     {
        id: "Saídas dos túneis",
        description: 'Essa imagem mostra exatamente onde fica as entradas e saídas dos túneis.', 
        src:'assets/entradas.jpg'
     }, 
 ]

function pesquisar(){
    let inp = document.getElementById("referencia")
    let input = document.getElementById("referencia").value;
    let res = document.getElementById("response")
    let img = document.getElementById("system") 

    let bf = list.find((item)=>{
        if(item.id != input  ) {
            return false
        }else {
            return true
        } 
    })
    
     if(bf == undefined ) {
       res.innerHTML= "<p>Essa BF não se encontra no nosso sistema, tente novamente!</p>"
       img.setAttribute('src', 'assets/error.jpg');
     }else if(input == bf.id) {
            res.innerText = bf.description
            img.setAttribute('src', bf.src);
      }

      inp.value = ""
}

    document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#btnSearch");
      
      btn.click();
    
    }
    });

