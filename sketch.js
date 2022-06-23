var tim, tim_Img;
var astronomyBook, astronomyBook_Img;
var balcony, bathroom, bedroom, courtyard, garden, kitchen, livingroom, timBedroom;
var earthST, jupterST, marsST, mercuryST, neptuneST, saturnST, uranusST, venusST;
var earthST_Img, jupterST_Img, marsST_Img, mercuryST_Img, neptuneST_Img, saturnST_Img, uranusST_Img, venusST_Img;
var arrowD, arrowE, arrowUP, arrowDOWN;
var arrowD_Img, arrowE_Img, arrowUP_Img, arrowDOWN_Img;
var steps_Sound, background_Sound, ending_Sound;

var text1 = `Essa e uma historia onde pode ser encontrada em muitos lugares`;
var text2 = `Este, é Tim, um jovem garoto que ama astronomia`;
var text3 = `Mas seus pais nao tem o mesmo pensamento, <br> infelizmente isso ainda é um segredo`;
var text4 = `Ajude-o, <br> quanto mais adesivos, mais coragem`;

var historyMoment = 0;
var locationMoment = "";
var bgMoment;
var walking = true;
var itemTouched = 0;

var texto;

var isWalking = false;

var gameState = 0;
var history = 0;
var play = 1;
var ending = 2;

function preload() {
    tim_Img = loadImage("./images/tim.png");
    astronomyBook_Img = loadImage("./images/astronomyBook.png");
    arrowD_Img = loadImage("./images/arrowD.png");
    arrowDOWN_Img = loadImage("./images/arrowDOWN.png");
    arrowE_Img = loadImage("./images/arrowE.png");
    arrowUP_Img = loadImage("./images/arrowUP.png");

    balcony = loadImage("./backgroundImages/balconyBackground.jpg");
    timBedroom = loadImage("./backgroundImages/timBedroomBackground.jpg");
    bedroom = loadImage("./backgroundImages/bedroomBackground.jpg");
    bathroom = loadImage("./backgroundImages/bathroomBackground.jpg");
    kitchen = loadImage("./backgroundImages/kitchenBackground.jpg");
    garden = loadImage("./backgroundImages/gardenBackground.jpg");
    courtyard = loadImage("./backgroundImages/courtyardBackground.jpg");
    livingroom = loadImage("./backgroundImages/livingroomBackground.jpg");

    mercuryST_Img = loadImage("./stickersImages/mercurySticker.png");
    venusST_Img = loadImage("./stickersImages/venusSticker.png");
    earthST_Img = loadImage("./stickersImages/earthSticker.png");
    marsST_Img = loadImage("./stickersImages/marsSticker.png");
    jupterST_Img = loadImage("./stickersImages/jupterSticker.png");
    saturnST_Img = loadImage("./stickersImages/saturnSticker.png");
    uranusST_Img = loadImage("./stickersImages/uranusSticker.png");
    neptuneST_Img = loadImage("./stickersImages/neptuneSticker.jpg");

    background_Sound = loadSound("./sounds/fallenDown.m4a");
    steps_Sound = loadSound("./sounds/timSteps.mp3");
    ending_Sound = loadSound("./sounds/hisTheme.m4a");
}

function setup() {
    createCanvas(1000, 800);

    texto = createElement("h2");
    texto.position(100, 600);
    texto.class("texto");

    // bgMoment = createSprite (width/2, height/2, width, height);
    // bgMoment.visible = false
    // bgMoment.addImage("balcony",balcony);
    // bgMoment.addImage("timBedroom",timBedroom);

    tim = createSprite(500, 400, 30, 30);
    tim.addImage(tim_Img);
    tim.visible = false;
    tim.scale = 0.5;
    tim.debug = true;
    tim.setCollider("rectangle", 0, 0, 500, 500, 360);

    arrowD = createSprite(870, 500, 30, 30);
    arrowD.addImage(arrowD_Img);
    arrowD.visible = false;
    arrowD.scale = 0.2

    arrowE = createSprite(130, 500, 30, 30);
    arrowE.addImage(arrowE_Img);
    arrowE.visible = false;
    arrowE.scale = 0.2
    //arrowE.debug = true;

    arrowDOWN = createSprite(500, 700, 30, 30);
    arrowDOWN.addImage(arrowDOWN_Img);
    arrowDOWN.visible = false;
    arrowDOWN.scale = 0.2

    arrowUP = createSprite(500, 100, 30, 30);
    arrowUP.addImage(arrowUP_Img);
    arrowUP.visible = false;
    arrowUP.scale = 0.2

    astronomyBook = createSprite(300, 400, 30, 30);
    astronomyBook.addImage(astronomyBook_Img);
    astronomyBook.visible = false;
    astronomyBook.scale = 0.3
    astronomyBook.setCollider("rectangle", 0, 0, 250, 250, 360);

    bgMoment = balcony;
    locationMoment = "balcony"
}

function draw() {
    background(0);
    textAlign(CENTER);
    textSize(30);
    fill("white");

    if (!background_Sound.isPlaying()) {
        background_Sound.play();
        background_Sound.setVolume(0.3);
    }

    if (gameState = history) {
        if (keyWentDown("space")) {
            historyMoment++;
        }

        if (historyMoment === 1) {
            texto.html(text1);
        }

        if (historyMoment === 2) {
            texto.html(text2);
            tim.visible = true
        }

        if (historyMoment === 3) {
            texto.html(text3);
        }

        if (historyMoment === 4) {
            texto.html(text4);
        }

        if (historyMoment >= 5) {
            gameState = play;
            texto.html("");
        }
    }

    if (gameState === play) {
        image(bgMoment, 0, 0, width, height);
        tim.scale = 0.3;
        timMoving();

        if (locationMoment === "balcony") {
            arrowE.visible = true;
            arrowD.visible = false;
            arrowDOWN.visible = false;
            arrowUP.visible = false;
            astronomyBook.visible = false;

            if (tim.position.x <= 130 && locationMoment === "balcony" && tim.position.y === arrowE.position.y) {
                locationMoment = "timBedroom";
                bgMoment = timBedroom
                tim.position.x = 500;
            }
        }

        if (locationMoment === "timBedroom") {
            arrowE.visible = true;
            arrowD.visible = true;
            arrowDOWN.visible = false;
            arrowUP.visible = false;
            astronomyBook.visible = true;

            if (itemTouched === 1) {
                texto.html(`meu livro... esta imcompleto, vou procurar <br> 
                os adesivos, devem estar pela casa`);
            }

            if (tim.position.x === astronomyBook.position.x && tim.position.y === astronomyBook.position.y) {
                astronomyBook.position.x = 500;
                astronomyBook.scale = 1;
                walking = false;
                itemTouched = 1;
            }

            if (keyIsDown("e")) {
                texto.html("")
            }

            if (tim.position.x <= 130 && locationMoment === "timBedroom" && tim.position.y === arrowE.position.y) {
                locationMoment = "balcony"
                bgMoment = balcony
                tim.position.x = 500;
            }
        }




    }

    drawSprites();
}

function timMoving() {
    if (walking) {
        if (keyIsDown(DOWN_ARROW)) {
            tim.position.y += 5;
            isWalking = true;
            if (isWalking && !steps_Sound.isPlaying()) {
                steps_Sound.play();
                isWalking = false;
            }
        }

        if (keyIsDown(UP_ARROW)) {
            tim.position.y -= 5;
            isWalking = true;
            if (isWalking && !steps_Sound.isPlaying()) {
                steps_Sound.play();
                isWalking = false;
            }
        }
        if (keyIsDown(LEFT_ARROW)) {
            tim.position.x -= 5;
            isWalking = true;
            if (isWalking && !steps_Sound.isPlaying()) {
                steps_Sound.play();
                isWalking = false;
            }
        }

        if (keyIsDown(RIGHT_ARROW)) {
            tim.position.x += 5;
            isWalking = true;
            if (isWalking && !steps_Sound.isPlaying()) {
                steps_Sound.play();
                isWalking = false;
            }
        }
    }
}