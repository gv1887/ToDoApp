let tarea = document.querySelector('input');
let agregar = document.querySelector('.btn-agregar');
let list = document.querySelector('ul');
let pendiente = document.querySelector('.pendiente');






function agregar_lista(e){
    let tareas = tarea.value
    const lista = document.createElement("li");
    const p = document.createElement("p")
    const btn = document.createElement("img")
    const btnCheck = document.createElement("img")

    e.preventDefault()
    
    if(tareas === ""){
        alert("Agregue una tarea")
        
    }
    else{
        btn_delet = btn
        btn_delet.className = "btn-borrar"
        btn_delet.src="img/icons8-trash-26.png"
        btnCheck.className = "btn-check"
        btnCheck.src = "img/icons8-comprobado-48.png"
        
        



        p.textContent = tareas.toLocaleUpperCase()
        lista.appendChild(p)
        lista.appendChild(btnCheck)
        lista.appendChild(btn_delet)
        list.appendChild(lista)
        pendiente.style.display='none'

        btn_delet.addEventListener('click', ()=>{
            lista.remove();
            if(list.children.length == 0){
                pendiente.style.display='block'
            }
        });

        btnCheck.addEventListener('click',()=>{
            p.style.textDecoration = 'line-through';
        })
        
    }
    
    
    console.log(list)
}



agregar.addEventListener('click',agregar_lista);


