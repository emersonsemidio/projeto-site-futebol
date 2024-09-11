let listVideos = [
  '/videos/CHAMANDO PESSOAS PARA TREPAR_ MANDE A SUA _184(720P_HD).mp4',
  '/videos/IRRITANDO ESTRANHOS NA RUA 3 _ MANDE A SUA _221(720P_HD).mp4',
  '/videos/IRRITANDO ESTRANHOS NA RUA _ MANDE A SUA _213(720P_HD).mp4',
] 

let maxVideos = listVideos.length;

var contador = 0;

function getProximoVideo() {
  contador = (contador + 1) % maxVideos;
  let videoAtual = listVideos[contador];
  document.getElementById('componente-tv').src = videoAtual;
}