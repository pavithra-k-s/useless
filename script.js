const entries = [
  {
    ruleText: "PASSWORD IDU",
    failMessage: "ANGOTTU ONNU MAARI IRI",
    gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm02dWEyaDN0aDZlZ3k4cDNubmsyZG05eDB0M25uYTRkMDM0OGkzMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/svsszftgqEEM0pnpAc/giphy.gif"
  },
  {
    ruleText: "PASSWORD IDU",
    failMessage: "NINAKKU OKKE VALLA KAZHIVINDO",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa283dG0xMmg1aHBldXN0YWU4OXNicGJsbzB3N2V2OWJiM2JuZGtkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/btdKdBz6Pw4Ks/giphy.gif"
  },
  {
    ruleText: "PASSWORD IDU",
    failMessage: "KAZHIVILENKIL ITTITU POKOODE",
    gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG51eXhwd3VjOWM1dzY5Y21yZjZzZDNkd2FtN2UydWJtdXhzanJxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1thKX5XZcfntTawvMO/giphy.gif"
  },
  {
    ruleText: "PASSWORD IDU",
    failMessage: "KORACHENKILUM BUDHI INDARNNEL MANNDHABUDHI ENNENKILUM VILIKKARNNU",
    gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWVwMzJtNmQ0eXAxenp0cmRoa255YjdvdGE2bWZqbzd0a3NzM2wwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qZgHBlenHa1zKqy6Zn/giphy.gif"
  },
  {
    ruleText: "PASSWORD IDU",
    failMessage: "ARIVUKETTA MUNDAME, NEE POTTANA..",
    gif: "https://media1.tenor.com/m/Ph8MTg9ybnIAAAAd/apponjanpottana-njanpottana.gif"
  },
  {
    ruleText: "PASSWORD IDU",
    failMessage: "NEE ORU KAZHIVERRI THANNE",
    gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmJjZDE4bGc2dnlnN2IxazZ2eHl1NjlueWZjbmwxOXM1MThsdXBudSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5vWRt9kwzr5j65cS1S/giphy.gif"
  },
  {
    ruleText: "PASSWORD IDU",
    failMessage: "ADHYAM PADITHITHAM ENITTU MATHI KANDUPIDITHAM",
    gif: "https://media1.tenor.com/m/1NHZzGKTmYwAAAAC/little-girl-meme.gif"
  },
  {
    ruleText: "PASSWORD IDU",
    failMessage: "VERUTHE ALLEDA NINAKKONNUM PENNU KITTATHE",
    gif: "https://media1.tenor.com/m/TWUwAdOmDxQAAAAd/laughing-sreenivasan.gif"
  },
  {
    ruleText: "PASSWORD IDU",
    failMessage: "NINNE ONNUM CORONAYKKU POLUM VENDEDAA",
    gif: "https://media1.tenor.com/m/BbLIE7LrMQ8AAAAd/my-boss-malayalam.gif"
  }
];

let shuffledEntries = [];

function shuffleEntries() {
  shuffledEntries = [...entries];
  for (let i = shuffledEntries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledEntries[i], shuffledEntries[j]] = [shuffledEntries[j], shuffledEntries[i]];
  }
}

window.onload = () => {
  shuffleEntries();
  // Show first rule text on load
  document.getElementById("rule").innerText = shuffledEntries[0].ruleText;
  document.getElementById("gif").style.display = "none";
  document.getElementById('password').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      event.preventDefault();
      tryLogin();
    }
  });
};

function tryLogin() {
  const feedback = document.getElementById("feedback");
  const ruleDiv = document.getElementById("rule");
  const gifContainer = document.getElementById("gif");
  const funnyGifImage = document.getElementById("funnyGif");
  const passwordInput = document.getElementById("password");

  ruleDiv.style.display = "none";

  // If all entries have been shown, stop; disable input
  if (shuffledEntries.length === 0) {
    feedback.innerText = "MATHII NEE NIRTHI POKKOOO, NINNE KOND ONNUM ITHU PATOOLA";
    gifContainer.style.display = "none";
    funnyGifImage.src = "";
    passwordInput.disabled = true;
    return;
  }

  // Get and remove first entry from the shuffled list
  const entry = shuffledEntries.shift();
  feedback.innerText = entry.failMessage;
  funnyGifImage.src = "";
  funnyGifImage.src = entry.gif;
  gifContainer.style.display = "block";

  // (No audio to play)

  // Show next rule text (optional, but will not be shown again)
  if (shuffledEntries[0]) {
    ruleDiv.innerText = shuffledEntries[0].ruleText;
    ruleDiv.style.display = "block";
  }

  passwordInput.value = "";
}

