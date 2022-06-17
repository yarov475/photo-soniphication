 var song;
var  wave;


let env;
let triOsc;

let t1 = 0.1; // attack time in seconds
let l1 = 0.7; // attack level 0.0 to 1.0
let t2 = 0.3; // decay time in seconds
let l2 = 0.1; // decay level  0.0 to 1.0


function preload(){
  song = loadSound("./sample.mp3");

  getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();
  console.log(data)
  for (item of data) {
    const root = document.createElement('p');
    const mood = document.createElement('div');
    const geo = document.createElement('div');
    const date = document.createElement('div');
    const image = document.createElement('img');
    const button = document.createElement('button');

    mood.textContent = `mood: ${item.mood}`;
    geo.textContent = `${item.lat}°, ${item.lon}°`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    image.src = item.image64;
    const srcTostr = item.image64.toString();
    const srcTostrLength = srcTostr.length;
    let srcTostrLengthStr = srcTostrLength.toString()
    const srcTostrLengItem = srcTostrLengthStr[srcTostrLengthStr.length-1];
    const number = parseInt(srcTostrLengItem)



    function playBtn(){
   console.log(srcTostr.length)

  wave = new p5.Oscillator();
   wave.setType('sine');
    wave.start()
   if(number  == 0){
        console.log(number, 'c' )
          wave.freq(130.81 )
   }
   else if (number  == 1){
            console.log(number, 'c#' )
           wave.freq(138.59)
   }
     else if (number  == 1){
            console.log(number, 'c#' )
           wave.freq(146.83)
   }
       else if (number  == 2){
            console.log(number, 'd' )
           wave.freq(155.56)
   }
         else if (number  == 3){
            console.log(number, 'e' )
           wave.freq(164.81 )
   }
           else if (number  == 4){
            console.log(number, 'f' )
           wave.freq(174.61)
   }
             else if (number  == 5){
            console.log(number, 'f#' )
           wave.freq(185.00 )
   }
               else if (number  == 6){
            console.log(number, 'c#' )
           wave.freq(196.00 )
   }
                 else if (number  == 7){
            console.log(number, 'c#' )
           wave.freq(207.65)
   }
                   else if (number  == 8){
            console.log(number, 'c#' )
           wave.freq(233.08)
   }

                   else {
            console.log(number, 'c#' )
           wave.freq(7040)
   }

wave.amp(env)
env.play()

    }
    image.alt = 'Dan Shiffman making silly faces.';
     button.textContent='play the photo'
    button.style.display = 'block'
    button.addEventListener('click', playBtn)
    root.append(mood, geo, date, image,button);
    document.body.append(root);
  }
  console.log(data);
}


}
let lat, lon;
function setup() {

   var cnv = createCanvas(300,300)

  cnv.style('display', 'inline');
  background(255, 0, 200);
cnv.parent('scetch-holder')
  const video = createCapture(VIDEO);
  video.size(320, 240);

env = new p5.Env();
env.setADSR(0.5,0.25,0.5,0.1)
env.setRange(0.8,0)


  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {
    const mood = document.getElementById('mood').value;
    video.loadPixels();
    const image64 = video.canvas.toDataURL();
    const data = { lat, lon, mood, image64 };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const response = await fetch('/api', options);
    const json = await response.json();


    console.log(json);
  });

  if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat, lon);
      document.getElementById('latitude').textContent = lat;
      document.getElementById('longitude').textContent = lon;

    });
  } else {
    console.log('geolocation not available');
  }
   return lat
}
function draw(lat, lon) {
background(0)
}

// get data ****************************


 getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();
  console.log(data)

    const sampleStr = '123AAAbbb8YArochkin'
  for (item of data) {
    const aside = document.createElement('aside');
    const root = document.createElement('p');
    const mood = document.createElement('div');
    const geo = document.createElement('div');
    const date = document.createElement('div');
    const image = document.createElement('img');
    const button = document.createElement('button');

    mood.textContent = `mood: ${item.mood}`;
    geo.textContent = `${item.lat}°, ${item.lon}°`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;
    image.src = item.image64;
    const strToplay = image.src.toString()
    const moodToPlay = item.mood.toString()
    const latToPlay = item.lat.toString();
    const lonToPLay = item.lon.toString()

    function playBtn(){

   //      wave = new p5.Oscillator();
   // wave.setType('sine');
   wave.amp(strToplay.length)
  wave.start()
   console.log(`  image code: ${strToplay.length} , latitude ${latToPlay} longitude ${lonToPLay} mood ${moodToPlay}`)
song.play()
    }
    image.alt = 'Dan Shiffman making silly faces.';
     button.textContent='play the photo'
    button.style.display = 'block'
    button.addEventListener('click', playBtn)
    root.append(mood, geo, date, image,button);
     aside.append(root)
  }
  console.log(data);
}
