let listVideos = [
  'https://www.youtube.com/embed/a8Ris2rWkIw'
] 

let maxVideos = listVideos.length;

var contador = 0;

function getProximoVideo() {
  contador = (contador + 1) % maxVideos;
  let videoAtual = listVideos[contador];
  document.getElementById('componente-tv').src = videoAtual;
}