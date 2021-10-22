const operaciones = [
    {
      descripcion: 'Sueldo',
      categoria: 'Trabajo',
      fecha: '01/01/2021',
      monto: 50000,
      tipo: 'Ganancia',
    },
    {
      descripcion: 'Pago de alquiler',
      categoria: 'Alquiler',
      fecha: '02/01/2021',
      monto: 15000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Pago de expensas',
      categoria: 'Alquiler',
      fecha: '02/01/2021',
      monto: 5000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Pago de internet',
      categoria: 'Servicios',
      fecha: '10/01/2021',
      monto: 2000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Trabajo freelance',
      categoria: 'Trabajo',
      fecha: '15/01/2021',
      monto: 20000,
      tipo: 'Ganancia',
    },
    {
      descripcion: 'Cena con amigas',
      categoria: 'Salidas',
      fecha: '18/01/2021',
      monto: 1500,
      tipo: 'Gasto',
    },
];
  

// Declarar una funcion que se llame convertirOperacionesAHTML
// la funcion recibe como parametro un array de operaciones
// no debe retornar nada, debe pasar las operaciones a HTML 
// (con el estilo de Ahorradas en Bulma) 

const tarjeta = document.getElementById("tarjeta")

const convertirOperacionesAHTML = (operaciones)=>{
    let acc = ""

    operaciones.map((operacion)=>{
        acc = acc + `
        <div class="column is-2 ">
            <p>${operacion.descripcion}</p>          
        </div>
        <div class="column is-2 ">
            <p>${operacion.categoria}</p>          
        </div>
        <div class="column is-2 ">
            <p>${operacion.fecha}</p>          
        </div>
        <div class="column is-2 ">
            <p>${operacion.monto}</p>          
        </div>
        <div class="column is-2 ">
            <p>${operacion.tipo}</p>          
        </div>
        `
        return acc
    })

    tarjeta.innerHTML = acc
}
console.log(convertirOperacionesAHTML(operaciones));
