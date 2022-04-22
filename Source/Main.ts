namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("Visual Novel starting");



  // transitions
  export let transitions = {
    puzzle: {
      duration: 1, // in Sekunden
      alpha: "/FreeTransitions/5.jpg",
      edge: 1
    }
  };

  // sounds
  export let sound = {
    // themes
    backgroundTheme: "Pfad",

    // SFX
    click: "Pfad"
  };

  // backgrounds
  export let locations = {
    room: {
      name: "Room",
      background: "./Images/Backgrounds/Modern-Dormroom1.png"
    },
    park: {
      name: "Park",
      background: "./Images/Backgrounds/Modern-Street1.png"
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    mainCharacter: {
      name: "Olorin",
      origin: ƒS.ORIGIN.BOTTOMCENTER,   // Ankerpunkt: Anfangsposition im Canvas, kann in der Szene umpositioniert werden
      pose: {
        angry: "./Images/Characters/Test/Test_Angry.png",
        happy: "./Images/Characters/Test/Test_Happy_1.png",
        neutral: "./Images/Characters/Test/Test_Neutral_1.png"
      }
    }/* ,
    secondCharacter: {
      name: "Second",
      origin: ƒS.ORIGIN.BOTTOMCENTER,   // Ankerpunkt: Anfangsposition im Canvas, kann in der Szene umpositioniert werden
      pose: {
        angry: "Pfad.png",
        happy: "Pfad.png",
        neutral: "Pfad.png"
      }
    } */
  };

  export let dataForSave = {    // Alles was gespeichert werden soll, Speicher-/Ladepunkt immer zu Beginn der Szene
    nameProtagonist: "",
    score: 0
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      //{ scene: Scene, name: "Scene" },
      { scene: Introduction, name: "Introduction" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }

  let uiElement: HTMLElement = document.querySelector("[type=interface]");
  dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
}