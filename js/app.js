const resultado = document.querySelector('#resultado')

document.addEventListener('DOMContentLoaded', function(){
    mostrarAutos()
})

function mostrarAutos(){
    autos.forEach(auto =>{
        const autoHTML = document.createElement('p')
        autoHTML.textContent = `
            	${auto.marca}
        `
        resultado.appendChild(autoHTML)

    })
}