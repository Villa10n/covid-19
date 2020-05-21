// DATOS DE LAS TARJETAS
const casosTotalesChile = document.getElementById('casosTotalesChile');
const nuevosCasosHoy = document.getElementById('nuevosCasosHoy');
const totalMuertosChile = document.getElementById('totalMuertosChile');
const totalMuertosHoyChile = document.getElementById('totalMuertosHoyChile');
const totalRecuperadosChile = document.getElementById('totalRecuperadosChile');

const actualizar = document.getElementById('actualizar');

actualizar.addEventListener('click', actualizarDatos);
function actualizarDatos() {
     const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display = 'block';
     fetch('https://disease.sh/v2/countries/Chile')
          .then(function(res) {
               return res.json();
          })
          .then(function(datos) {
               setTimeout(function() {
                    spinnerGif.style.display = 'none';
                    casosTotalesChile.innerHTML = datos.cases;
                    nuevosCasosHoy.innerHTML = datos.todayCases;
                    totalMuertosChile.innerHTML = datos.deaths;
                    totalMuertosHoyChile.innerHTML = datos.todayDeaths;
                    totalRecuperadosChile.innerHTML = datos.recovered;
                    actualizando.innerHTML = '';
               }, 1000);
          })
}