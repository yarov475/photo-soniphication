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
    const strToplay = image.src.toString()
    const moodToPlay = item.mood.toString()
    const latToPlay = item.lat.toString();
    const lonToPLay = item.lon.toString()

    function playBtn(){
   // console.log(`  image code: ${strToplay} , latitude ${latToPlay} longitude ${lonToPLay} mood ${moodToPlay}`)
    }
    image.alt = 'Dan Shiffman making silly faces.';
     button.textContent='play the photo'
    button.style.display = 'block'
   root.append(mood, geo, date, image,button);
    document.body.append(root);
  }
  console.log(data);
}
