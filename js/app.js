
const agregar=document.getElementById("button");

agregar.addEventListener("click",()=>{
    const form=document.forms['form'];
    let nombre=form['nombre'].value;
    let apellido=form['apellido'].value;

    const listado=document.querySelector(".personas");

    const li=document.createElement("LI");

    li.innerHTML=`${nombre} ${apellido}`;
    listado.appendChild(li);

})






