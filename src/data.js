// Guardar en una variable la liga del JSON desde el servidor GitHub
const url = 'https://raw.githubusercontent.com/ViniciaLaraRangel/cdmx-2018-06-bc-core-am-data-dashboard/javascriptFetch/data/laboratoria.json';
// Crear método global para hacer FETCH y que la data se cargue para tranformarlo en el argumento result (data que se va a pasar)
window.getData = () => {
  fetch(url)
    .then(result => result.json())
    .then(result => {
      // console.log(result);
      const students = computeStudentsStats(result);
      printInfo(students);
      printSearch(students);
      filterStudent(students);
      printSearchCampus(students);
      filterGeneration(students);
    })
    .catch(error => {
      // console.log('error');
    });
};

window.addStats = progress => {
  // console.log(progress);
  // Crear objeto que contenga porcentaje completado con una propiedad topics
  let stats = {};
  let topicsArray = progress.temas;
  // console.log(topicsArray);

  stats.completedPercentage = progress.porcentajeCompletado;
  stats.topics = topicsArray;
  // console.log(topicsArray);

  // Hacer bucle para que le asigne un status a cada estudiante de acuerdo a su completitud
  if (progress.porcentajeCompletado < 60) {
    stats.status = 'bajo';
  }
  if (progress.porcentajeCompletado > 60 && progress.porcentajeCompletado < 90) {
    stats.status = 'medio';
  } else {
    stats.status = 'alto';
  }

  let properties = Object.values(progress.temas);
  // console.log(properties);
  properties.forEach(contentPeer => {
    contentPeer.completedPercentage = contentPeer.porcentajeCompletado;
    // Crear una nueva propiedad que se llame percentageDuration (DuracionTemaCompletado x 100 / duracion de tema)
    // console.log(contentPeer.completedPercentage);
    contentPeer.percentageDuration = Math.round((contentPeer.duracionTemaCompletado * 100) / contentPeer.duracionTema);
    // console.log(contentPeer);
    let subTopicsArray = contentPeer.subtemas;
    let subProperties = Object.values(subTopicsArray);
    subProperties.forEach(subContentPeer => {
      subContentPeer.type = subContentPeer.tipo;
      // Propiedad de subtema
      subContentPeer.duration = subContentPeer.duracionSubtema;
      if (subContentPeer.completado === 1) {
        subContentPeer.completedPercentage = 100;
      } else {
        subContentPeer.completedPercentage = 0;
      }
    });
  });
  // console.log(stats);
  return stats;
};


// (En dónde se va a recibir) Parámetro Laboratoria, que dice el readme
window.computeStudentsStats = laboratoria => {
  let studentArray = [];
  // Usar método para que se puedan obtener los nombres de las propiedades (keys) de los objetos en un array
  let campus = '';
  let generationArray = '';
  let allGenerationsContent = '';
  let i = 0;
  let j = 0;

  campus = Object.getOwnPropertyNames(laboratoria);
  generationArray = Object.values(laboratoria);
  // console.log(generationArray);
  // Iteración al primer nivel de data que arroja la cantidad de generaciones por campus
  generationArray.forEach(element => {
    allGenerationsContent = Object.values(element.generacion);
    allGeneration = Object.keys(element.generacion);
    j = 0;
    allGenerationsContent.forEach(student => {
      let students = student.estudiantes;
      students.forEach(infoStudent => {
        // console.log(infoStudent.progreso);
        let stats = addStats(infoStudent.progreso);
        // console.log(infoStudent.progreso);
        // llenar el arreglo student
        studentArray.push({
          'campus': campus[i],
          'generation': allGeneration[j],
          'name': infoStudent.nombre,
          'email': infoStudent.correo,
          'turn': infoStudent.turno,
          'stats': stats
        });
      });
      j++;
    });
    i++;
  });
  // console.log(studentArray);
  return studentArray;
},

// computeGenerationsStats: () => {
window.computeGenerationStats = (student, search) => {

},

// window.sortStudents: () => {

// },

window.filterStudent = (student, search) => {
  let searchResult = [];
  student.forEach(element => {
    if (element.name.indexOf(search) !== -1) {
      searchResult.push(element);
    }
  });
  // console.log(element);
  return searchResult;
};

// Filtrar Sedes y generaciones
window.filterCampus = (student, search) => {
  let searchResult = [];
  student.forEach(element => {
    // console.log(element);
    if (element.campus === search) {
      searchResult.push(element);
    }
  });
  // console.log(element);
  return searchResult;
};

window.filterGeneration = (student, search) => {
  let searchResult = [];
  // console.log(student);
  student.forEach(element => {
    // console.log(search);
    if (element.generation === search) {
      searchResult.push(element);
    }
  });
  // console.log(searchResult);
  return searchResult; 
};