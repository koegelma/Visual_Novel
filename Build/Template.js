"use strict";
var Template;
(function (Template) {
    async function Introduction() {
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
        await Template.ƒS.Location.show(Template.locations.park);
        await Template.ƒS.Character.show(Template.characters.mainCharacter, Template.characters.mainCharacter.pose.neutral, Template.ƒS.positionPercent(0, 100));
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, text.mainCharacter.T001);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, text.mainCharacter.T002);
        //await ƒS.Speech.tell(characters.mainCharacter, "Test");
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("Visual Novel starting");
    // transitions definieren
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "./FreeTransitions/5.png",
            edge: 1
        }
    };
    // sounds definieren
    Template.sound = {
        // themes
        backgroundTheme: "Pfad",
        // SFX
        click: "Pfad"
    };
    // backgrounds definieren
    Template.locations = {
        room: {
            name: "Room",
            background: "./Images/Backgrounds/Modern-Dormroom1.png"
        },
        park: {
            name: "Park",
            background: "./Images/Backgrounds/Modern-Street1.png"
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        mainCharacter: {
            name: "Test",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Test/Test_Angry.png",
                happy: "./Images/Characters/Test/Test_Happy.png",
                neutral: "./Images/Characters/Test/Test_Neutral.png"
            }
        } /* ,
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
    Template.dataForSave = {
        nameProtagonist: "",
        score: 0
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            //{ scene: Scene, name: "Scene" },
            { scene: Template.Introduction, name: "Introduction" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map