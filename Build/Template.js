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
                T002: "This is a test."
            }
        };
        //ƒS.Sound.play();
        await Template.ƒS.Location.show(Template.locations.park);
        await Template.ƒS.update(Template.transitions.puzzle.duration, Template.transitions.puzzle.alpha, Template.transitions.puzzle.edge);
        await Template.ƒS.Character.show(Template.characters.mainCharacter, Template.characters.mainCharacter.pose.neutral, Template.ƒS.positionPercent(25, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, text.mainCharacter.T001);
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, text.mainCharacter.T002);
        //await ƒS.Speech.tell(characters.mainCharacter, "Test");
        //ƒS.Speech.clear(); // blendet Text aus, Textfeld ist noch da
        Template.ƒS.Speech.hide(); // blendet Textfeld aus
        Template.ƒS.Character.hide(Template.characters.mainCharacter);
        //await ƒS.Character.show(characters.mainCharacter, characters.mainCharacter.pose.happy, ƒS.positions.bottomcenter);
        await Template.ƒS.Character.show(Template.characters.mainCharacter, Template.characters.mainCharacter.pose.happy, Template.ƒS.positionPercent(25, 100));
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Soll es jetzt weiter gehen?");
        let firstDialogueElementAnswers = {
            iSayOk: "Okay.",
            iSayYes: "Ja gerne!",
            iSayNo: "Nö."
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "individualCSSclass");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.iSayOk:
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Alles klar.");
                Template.ƒS.Speech.clear();
                break;
            case firstDialogueElementAnswers.iSayYes:
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Super!");
                break;
            case firstDialogueElementAnswers.iSayNo:
                // continue path here
                await Template.ƒS.Speech.tell(Template.characters.mainCharacter, "Schade.");
                Template.ƒS.Character.hide(Template.characters.mainCharacter);
                await Template.ƒS.Character.animate(Template.characters.mainCharacter, Template.characters.mainCharacter.pose.neutral, Template.getAnimation());
                break;
        }
        // continue story after decision here
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("Visual Novel starting");
    // transitions
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "/FreeTransitions/5.jpg",
            edge: 1
        }
    };
    // sounds
    Template.sound = {
        // themes
        backgroundTheme: "Pfad",
        // SFX
        click: "Pfad"
    };
    // backgrounds
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
            name: "Olorin",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "./Images/Characters/Test/Test_Angry.png",
                happy: "./Images/Characters/Test/Test_Happy_1.png",
                neutral: "./Images/Characters/Test/Test_Neutral_1.png"
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
    function showCredits() {
        Template.ƒS.Text.setClass("credtis"); //addClass; setClass überschreibt
        Template.ƒS.Text.print("Credits here");
    }
    Template.showCredits = showCredits;
    function getAnimation() {
        return {
            start: { translation: Template.ƒS.positions.bottomleft, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("white", 0.3) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("red") },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Template.getAnimation = getAnimation;
    // Menu
    //buttons
    let inGameMenuButttons = {
        save: "Save",
        load: "Load",
        //volume
        close: "Close",
        credits: "Credits"
    };
    let gameMenu;
    let menuIsOpen = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case inGameMenuButttons.save:
                await Template.ƒS.Progress.save();
                break;
            case inGameMenuButttons.load:
                await Template.ƒS.Progress.load();
                break;
            case inGameMenuButttons.close:
                gameMenu.close();
                menuIsOpen = false;
                break;
            case inGameMenuButttons.credits:
                showCredits();
                break;
        }
    }
    // shortcuts fürs menu
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                // menuIsOpen = !menuIsOpen;
                if (menuIsOpen) {
                    console.log("Menu close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Menu open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = Template.ƒS.Menu.create(inGameMenuButttons, buttonFunctionalities, "gameMenuCSSclass");
        buttonFunctionalities("Close");
        let scenes = [
            //{ scene: Scene, name: "Scene" },
            { scene: Template.Introduction, name: "Introduction" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
    let uiElement = document.querySelector("[type=interface]");
    Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map