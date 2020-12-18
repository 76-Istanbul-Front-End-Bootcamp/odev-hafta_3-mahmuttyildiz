class Animal {
  constructor(name) {
    this.name = name;
  }

  action(event) {
    event.stopPropagation();
    document.getElementById(this.actionSoundName).play();
  }

  showImage() {
    document.querySelector("img").src = this.image;
    document.querySelector("img").width = "250"
    document.querySelector("img").height = "250"
  }

  putInTheDocument() {
    const petsTable = document.getElementById("petsTable");
    const petTR = document.createElement("tr");
    petTR.className = "rowStyle";

    const petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);

    const petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    const petActionTD = document.createElement("td");
    const petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petTR.onclick = this.showImage.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.legs = 4;
    this.actionText = "Miyavv"
    this.actionSoundName = "meow"
    this.image = "https://www.odt.co.nz/sites/default/files/story/2020/07/gettyimages-138310605.jpg";
  }
}

class Monkey extends Animal {
  constructor(name) {
    super(name);
    this.legs = 2;
    this.actionText = "Scream"
    this.actionSoundName = "scream";
    this.image = "https://indianapublicmedia.org/wpimages/amomentofscience/2014/10/amos_200_chimptraits.jpg";
  }
}

const Mila = new Cat("Mila");
Mila.putInTheDocument();

const Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
