//código base para guardar a imagem https://www.youtube.com/watch?v=9Rhsb3GU2Iw

function setup() {
  //sem canvas
  noCanvas();
  //quando carrega no botão é que aparece a câmara para tirar a fotografia
  const buttons = document.getElementById('change');
  buttons.addEventListener('click', async event => {
  //criar a captura do video
  const video = createCapture(VIDEO);
  video.size(160, 160);
  //ao carregar no botão para guardar
  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
   //guarda os pixeis do vídeo, ou seja a imagem
    video.loadPixels();
    //converte em Base64 através do toDataURL
    const image64 = video.canvas.toDataURL();
    console.log(image64);
    //guardar no local storage para se poder usar depois
    localStorage.setItem("prf", image64);
    //mudar o css das imagens para o data da imagem criada
    $("#me").attr("src", image64);
    $("#me2").attr("src", image64);

  });
});
}
//quando se faz refresh as imagens continuam com a fotografia de perfil
const imag = localStorage.getItem("prf");
$("#me").attr("src", imag);
$("#me2").attr("src", imag);