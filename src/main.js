// Traer de data.js
const printInfo = students => {
  // console.log(students);
};

// Para imprimir en el DOM hardcodeando
// let sede1 = document.getElementById('sede');
// let buton = document.getElementById('buton');

const printSearch = students => {
  document.getElementById('search').addEventListener('click', (event) => {
    event.preventDefault(); 
    console.log('holaaaaaa');
    const name = document.getElementById('name-to-search').value;
    
    if (name !== '' && name !== ' ') {
      const searchResult = filterStudent(students, name);
      let result = '';
      if (searchResult.length === 0) {
        document.getElementById('no-result').innerHTML = '<p>No existen resultados</p>';
      } else {
        searchResult.forEach((element, i) => {
          result += `<tr>
                      <th scope="row">${i + 1}</th>
                      <td>${element.name}</td>
                      <td>${element.generation}</td>
                      <td>${element.stats.completedPercentage}%</td>
                      <td>${element.campus}</td>
                    </tr>`;
        });
        document.getElementById('no-result').innerHTML = '';
        document.getElementById('table-body').innerHTML = result;
      }
    }
  });
};

const printSearchCampus = students => {
  document.getElementById('botonResultado').addEventListener('click', (event) => {
    event.preventDefault();
    const sede = document.getElementById('sedesBuscar').value;
    const generacion = document.getElementById('generacionesBuscar').value;
    // console.log(sede);
    // console.log(generacion);
    const searchResult = filterCampus(students, sede);
    const searchResultGen = filterGeneration(searchResult, generacion);
    // console.log(searchResultGen);
    // Para imprimir en el DOM
    let result = '';
    if (searchResult.length === 0) {
      document.getElementById('no-result').innerHTML = '<p>No existen resultados</p>';
    } else {
      searchResultGen.forEach((element, i) => {
        result += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${element.name}</td>
                    <td>${element.generation}</td>
                    <td>${element.stats.completedPercentage}%</td>
                    <td>${element.campus}</td>
                  </tr>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('table-body').innerHTML = result;
    }
  });
};

const printSearchGeneration = students => {
  document.getElementById('botonResultado').addEventListener('click', (event) => {
    event.preventDefault();
    const generacionFiltrar = document.getElementById('generacionesBuscar').value;
    console.log(generacionFiltrar);
    const searchResult = filterCampus(students, generacionFiltrar);
    // Para imprimir en el DOM
    let result = '';
    if (searchResult.length === 0) {
      document.getElementById('no-result').innerHTML = '<p>No existen resultados</p>';
    } else {
      searchResult.forEach((element, i) => {
        result += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${element.name}</td>
                    <td>${element.generation}</td>
                    <td>${element.stats.completedPercentage}%</td>
                    <td>${element.campus}</td>
                  </tr>`;
      });
      document.getElementById('no-result').innerHTML = '';
      document.getElementById('table-body').innerHTML = result;
    }
  });
};
