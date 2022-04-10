namespace Template {
  export async function Introduction(): ƒS.SceneReturn {
    console.log("Introduction Scene starting");

    let text = {
      Narrator: {
        T001: "",
        T002: ""
      },
      mainCharacter: {
        T001: "Hello World!",
        T002: "This is a test :)"
      }
    };

    // Text anzeigen
    // waitForSignal -> auf Userinput warten?
    // _class -> CSS Klassen
    await ƒS.Location.show(locations.park);
    await ƒS.Character.show(characters.mainCharacter, characters.mainCharacter.pose.neutral, ƒS.positionPercent(0, 100));
    await ƒS.Speech.tell(characters.mainCharacter, text.mainCharacter.T001);
    await ƒS.Speech.tell(characters.mainCharacter, text.mainCharacter.T002);
    //await ƒS.Speech.tell(characters.mainCharacter, "Test");

  }
}