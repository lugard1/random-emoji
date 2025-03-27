const btnEl = document.getElementById('btn');
// const emojiContainerEl = document.getElementById('emoji-container');
const emojiNameEl = document.getElementById('emoji-name');

const apiKey = `6f15005db034ed6dd668a21cdb1e25c1c6e9affb`;
const baseURL = `https://emoji-api.com/emojis?access_key=${apiKey}`;

const emoji = [];

async function getEmoji(){
  let response = await fetch(baseURL);

  let data = await response.json();

  console.log(data);

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
    console.log("Emoji array is empty! Wait for data to load.");
    return;  // Exit the function if emojis aren't ready
  }

  const randomNum = Math.floor(Math.random() * emoji.length);
  // console.log("Random index:", randomNum);
  btnEl.innerText = emoji[randomNum].emoji;
  emojiNameEl.innerText = emoji[randomNum].emojiName
})


// const btnEl = document.getElementById("btn");
// const emojiContainerEl = document.getElementById("emoji-container");
// const emojiNameEl = document.getElementById("emoji-name");

// const apiKey = `6f15005db034ed6dd668a21cdb1e25c1c6e9affb`;
// const baseURL = `https://emoji-api.com/emojis?access_key=${apiKey}`;

// const emoji = [];

// btnEl.disabled = true; // Disable button initially

// async function getEmoji() {
//   try {
//     let response = await fetch(baseURL);
//     let data = await response.json();

//     if (!data || data.length === 0) {
//       console.error("No emojis received from API.");
//       return;
//     }

//     for (let i = 0; i < data.length; i++) {
//       emoji.push({
//         emoji: data[i].character,
//         emojiName: data[i].unicodeName
//       });
//     }

//     console.log("Emojis loaded:", emoji);

//     // Enable button after emojis are loaded
//     btnEl.disabled = false;
//     btnEl.addEventListener("click", handleButtonClick);
//   } catch (error) {
//     console.error("Error fetching emojis:", error);
//   }
// }

// function handleButtonClick() {
//   if (emoji.length === 0) {
//     console.log("Emoji array is empty! Wait for data to load.");
//     return;
//   }

//   const randomNum = Math.floor(Math.random() * emoji.length);
//   console.log("Random index:", randomNum, "Emoji:", emoji[randomNum]);
// }

// getEmoji();
