function listen() {
  let output = document.getElementById('output')
  const lendetElement = document.getElementById('lendet')

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "sq-AL";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;


    if(transcript.includes("uliks")){
      playSound(hello)
    }
    else if (transcript.includes("përshëndetje")) {
      playSound(hello)
    } else if (transcript.includes("biologji")) { 
      window.location = "biologji.html"
    } else if (transcript.includes("lëndë")){
      lendetElement.style.display = "flex"
    } else if(transcript.includes("letërsi")){
      window.location = "letersi.html"
    }else {
      output.innerHTML = "Nuk ju kuptoj :(";
    }
  }

  recognition.onerror = function(event) {
    output.innerHTML = "Më falni, nuk ju kuptoj për momentin :(";
  }
}


function letersi() {
  let output = document.getElementById('output')
  let input = document.getElementById('input')

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "sq-AL";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    input.innerHTML = transcript;

    if(transcript.includes("kafk")){
      window.location = "kafka.html"
    }else if(transcript.includes("kafkën")){
      window.location = "kafka.html"
    }else if(transcript.includes("hap kafkën")){
      window.location = "kafka.html"
    }else{
      output.innerHTML = "Nuk ju kuptoj"
    }


    recognition.onerror = function(event) {
      switch (event.error) {
        case 'audio-capture':
          console.error('No audio capture device found.');
          break;
        case 'not-allowed':
          console.error('The user denied access to the microphone.');
          break;
        case 'no-speech':
          console.error('No speech was detected. Try again.');
          break;
        case 'network':
          console.error('A network error occurred.');
          break;
        case 'service-not-allowed':
          console.error('The user agent does not support speech recognition.');
          break;
        default:
          console.error('An unknown error occurred.');
      }
    }
  }
}

function kafka(){
  let output = document.getElementById('output')
  let input = document.getElementById('input')

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "sq-AL";
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    input.innerHTML = transcript;
    if(transcript.includes("jet") || transcript.includes("iet")){
      playSound(jeta)
    }else if(transcript.includes("personaliteti")){
      playSound(personaliteti)
    }else if(transcript.includes("faj")){
      playSound(faji)
    }else if(transcript.includes("metamorfoz")){
      playSound(metamorfoza)
    }else{
      output.innerHTML = "Nuk ju kuptova"
    }

    recognition.onerror = function(event) {
      switch (event.error) {
        case 'audio-capture':
          console.error('No audio capture device found.');
          break;
        case 'not-allowed':
          console.error('The user denied access to the microphone.');
          break;
        case 'no-speech':
          console.error('No speech was detected. Try again.');
          break;
        case 'network':
          console.error('A network error occurred.');
          break;
        case 'service-not-allowed':
          console.error('The user agent does not support speech recognition.');
          break;
        default:
          console.error('An unknown error occurred.');
      }
    }
  }
}


function alertMsg(){
  alert("Nuk ka mësime për momentin...")
}

  const menuElement = document.getElementById('hb-menu')
  const lendetElement = document.getElementById('lendet')
  const closeElement = document.getElementById('close-btn')

  menuElement.addEventListener('click', ()=>{
    lendetElement.style.display = "flex";
   })
  
   closeElement.addEventListener('click', ()=>(
    lendetElement.style.display = "none"
   ))


let jeta = new Audio('videos/MBARUAR P1.mp3')
let personaliteti = new Audio('videos/MBARUAR P2.mp3')
let faji = new Audio('videos/MBARUAR P3.mp3')
let metamorfoza = new Audio('videos/MBARUAR P4.mp3')
let hello = new Audio('videos/PERSHENDETJE ME CAR MUND TJU NDIHMOJ.mp3')

function playSound(audio){
  jeta.pause();
  jeta.currentTime = 0;
  personaliteti.pause();
  personaliteti.currentTime = 0;
  faji.pause();
  faji.currentTime = 0;
  metamorfoza.pause();
  metamorfoza.currentTime = 0;
  hello.pause();
  hello.currentTime = 0;

  audio.play();
}
