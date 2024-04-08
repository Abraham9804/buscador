//Declaracion de constantes y acceso al DOM
const tabla = document.querySelector('#resultado')
const selectMarca = document.querySelector('#marca')
const selectYear = document.querySelector('#year')
const selectPrecioMin = document.querySelector('#minimo')
const selectPrecioMax = document.querySelector('#maximo')
const selectPuertas = document.querySelector('#puertas')
const selectTransmision = document.querySelector('#transmision')
const selectColor = document.querySelector('#color')
const maxYear = new Date().getFullYear()
const minYear = maxYear - 10
const formulario = document.querySelector('#buscador')

const datosBusqueda ={
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}


//Declaracion de eventos
document.addEventListener('DOMContentLoaded', function(){
    mostrarAutos(autos)
    llenarYear()
})

formulario.addEventListener('change', e => {
    datosBusqueda[e.target.id] = e.target.value 

    filtrarAuto()
})






//Funcion para mostrar la lista de autos
function mostrarAutos(autos){  
    limpiarHtml() 
   autos.forEach(auto =>{
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const autoHTML = document.createElement('p')
        autoHTML.textContent = `
            	${marca} ${modelo} - ${year} ${precio} ${puertas} ${color} ${transmision}
        `
        tabla.appendChild(autoHTML)

    })
}

function limpiarHtml(){
    while(tabla.firstChild){     //Comienza un bucle while que se ejecutará mientras listaCarrito tenga al menos un hijo 
        tabla.removeChild(tabla.firstChild) //En cada iteración del bucle se elimina el primer hijo de la tabla y esto se repite hasta que la tabla ya no tenga hijos
    }                                                      //esto para evitar que los elementos anteriores se acumulen cada vez que se actualice el contenido del carrito de compras.
}

//Funcion para llenar el select de año
function llenarYear(){
    for(let i = maxYear; i >= minYear; i--){
        const option = document.createElement('option')
        option.value = i 
        option.innerText = i
        selectYear.appendChild(option)
    }
}


function sinRegistros(){
    limpiarHtml()
    const divResultados = document.createElement('div')
    divResultados.classList.add('alerta','error')
    divResultados.textContent = 'No hay resultados'
    tabla.appendChild(divResultados)    
}


//Funcion para filtrar autos
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPrecioMin).filter(filtrarPrecioMax).filter(filtrarPuertas).filter(filtrarTransmicion).filter(filtrarColor)
    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        sinRegistros()
    }
    
    
}


function filtrarMarca(auto){
    const {marca} = datosBusqueda
    if(marca){
        return auto.marca === marca
    }else{
        return autos
    }    
}

function filtrarYear(auto){
    const {year} = datosBusqueda
    if(year){
        return auto.year === parseInt(year)
    }else{
        return autos
    }
}

function filtrarPrecioMin(auto){
    const {minimo} = datosBusqueda
    if(minimo){
        return auto.precio >= parseInt(minimo)
    }else{
        return autos
    }
}

function filtrarPrecioMax(auto){
    const {maximo} = datosBusqueda
    if(maximo){
        return auto.precio <= parseInt(maximo)
    }else{
        return autos
    }
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda
    if(puertas){
        return auto.puertas === parseInt(puertas)
    }else{
        return autos
    }
}

function filtrarTransmicion(auto){
    const {transmision} = datosBusqueda
    if(transmision){
        return auto.transmision === transmision
    }else{
        return autos
    }
}

function filtrarColor(auto){
    const {color} = datosBusqueda
    if(color){
        return auto.color === color
    }else{
        return autos
    }
}
