const list = [
    {
        id: 7113, 
        description:' BF na descida do carrossel 2. Rearmamento no QAC 09 ', 
        src:'assets/imagem.jpg'
    },
     
    {
        id: 7202,
        description:'Essa Bf fica próxima às BJ e o rearmamento é no QAC 09', 
        src:'assets/7202.jpg'
     }, 
     
     {
        id: 7101, 
        description:'Essa Bf fica próxima às BJ e o rearmamento é no QAC09',
        src:'assets/7101.jpg'
     } 
 ]




function pesquisar(){


    let input = document.getElementById("referencia").value;
    let res = document.getElementById("resposta")
    let img = document.getElementById("sistema")  
    
    let bf = list.find((item)=>{
        return item.id == input
    })

      if(input == bf.id) {
            res.innerText = bf.description
            img.setAttribute('src', bf.src);
      }else {
          res.innerText = "Algo deu errado"
      } 
 }

    document.addEventListener('keydown', pesquisar)
