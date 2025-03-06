let tarea = document.querySelector('input');
let agregar = document.querySelector('.btn-agregar');
let list = document.querySelector('ul');






function agregar_lista(e){
    let tareas = tarea.value
    const lista = document.createElement("li");
    const p = document.createElement("p")
    const btn = document.createElement("img")
    const btnCheck = document.createElement("img")

    e.preventDefault()
    
    if(tareas === ""){
        alert("Ingrese algo")
    }
    else{
        btn_delet = btn
        btn_delet.className = "btn-borrar"
        btn_delet.src="img/icons8-trash-26.png"
      
       
        btnCheck.className = "btn-check"
        btnCheck.src = "img/icons8-comprobado-48.png"

        p.textContent = tareas
        lista.appendChild(p)
        lista.appendChild(btnCheck)
        lista.appendChild(btn_delet)


        list.appendChild(lista)


        btn_delet.addEventListener('click', ()=>{
            lista.remove();
        });
        
    }
    
    
    console.log(list)
}



agregar.addEventListener('click',agregar_lista);


