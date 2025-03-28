const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');

const apiKey = process.env.API_KEY;
const baseURL = `https://emoji-api.com/emojis?access_key=${apiKey}`;

const emoji = [];

async function getEmoji(){
  let response = await fetch(baseURL);
  let data = await response.json();
  for (let i=0; i<data.length; i++) {
    emoji.push({
      emoji: data[i].character,
      emojiName: data[i].unicodeName
    })
  }
  // console.log(emoji)
}

getEmoji();


btnEl.addEventListener('click', ()=>{
  if (emoji.length === 0) {
    // console.log("Emoji array is empty! Wait for data to load.");
    return;  // Exit the function if emojis aren't ready
  }

  const randomNum = Math.floor(Math.random() * emoji.length);
  // console.log("Random index:", randomNum);
  btnEl.innerText = emoji[randomNum].emoji;
  emojiNameEl.innerText = emoji[randomNum].emojiName
})
