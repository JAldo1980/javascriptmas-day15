const niceList = [];
const naughtyList = [];
const btn = document.getElementById("btn");
btn.addEventListener("click", sort);

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

function sort() {
  niceList.length = 0;
  naughtyList.length = 0;

  sorteesArr.forEach((person) => {
    if (person.hasBeenGood) {
      niceList.push(person.name);
    } else {
      naughtyList.push(person.name);
    }
  });

  updateLists();
}

function updateLists() {
  const niceListContainer = document.getElementById("nice-list");
  const naughtyListContainer = document.getElementById("naughty-list");

  niceListContainer.innerHTML = niceList
    .map((name) => `<li>${name}</li>`)
    .join("");
  naughtyListContainer.innerHTML = naughtyList
    .map((name) => `<li>${name}</li>`)
    .join("");
}
