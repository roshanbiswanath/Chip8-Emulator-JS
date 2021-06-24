var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let cmdList = []
let emptyBuffer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]
ctx.fillRect(0, 0, 1, 1)
let keysDict = {}
let romFound
let fontStart = 0x50
let blankChip8 = {
    "memory": new Array(4096),
    "V": new Array(16),
    "delayTimer": 0,
    "soundTimer": 0,
    "PC": 0x200,
    "SP": -1,
    "stack": new Array(16),
    "I": 0,
    "fonts": [
        0xF0, 0x90, 0x90, 0x90, 0xF0,  // 0
        0x20, 0x60, 0x20, 0x20, 0x70,  // 1
        0xF0, 0x10, 0xF0, 0x80, 0xF0,  // 2
        0xF0, 0x10, 0xF0, 0x10, 0xF0,  // 3
        0x90, 0x90, 0xF0, 0x10, 0x10,  // 4
        0xF0, 0x80, 0xF0, 0x10, 0xF0,  // 5
        0xF0, 0x80, 0xF0, 0x90, 0xF0,  // 6
        0xF0, 0x10, 0x20, 0x40, 0x40,  // 7
        0xF0, 0x90, 0xF0, 0x90, 0xF0,  // 8
        0xF0, 0x90, 0xF0, 0x10, 0xF0,  // 9
        0xF0, 0x90, 0xF0, 0x90, 0x90,  // A
        0xE0, 0x90, 0xE0, 0x90, 0xE0,  // B
        0xF0, 0x80, 0x80, 0x80, 0xF0,  // C
        0xE0, 0x90, 0x90, 0x90, 0xE0,  // D
        0xF0, 0x80, 0xF0, 0x80, 0xF0,  // E
        0xF0, 0x80, 0xF0, 0x80, 0x80   // F
    ]
}
let chip8 = blankChip8
let displayMemory = emptyBuffer
let arg_a, arg_x, arg_y, arg_xnnn, arg_xxnn, arg_xxxn
let selectROM = document.getElementById("selectROM")

function findKey(pressedKey) {
    switch (pressedKey) {
        case "1":
            return 0x1
            break;
        case "2":
            return 0x2
            break;
        case "3":
            return 0x3
            break;
        case "4":
            return 0xC
            break;
        case "q":
            return 0x4
            break;
        case "w":
            return 0x5
            break;
        case "e":
            return 0x6
            break;
        case "r":
            return 0xD
            break;
        case "a":
            return 0x7
            break;
        case "s":
            return 0x8
            break;
        case "d":
            return 0x9
            break;
        case "f":
            return 0xE
            break;
        case "z":
            return 0xA
            break;
        case "x":
            return 0x0
            break;
        case "c":
            return 0xB
            break;
        case "v":
            return 0xF
            break;
        case "Q":
            return 0x4
            break;
        case "W":
            return 0x5
            break;
        case "E":
            return 0x6
            break;
        case "R":
            return 0xD
            break;
        case "A":
            return 0x7
            break;
        case "S":
            return 0x8
            break;
        case "D":
            return 0x9
            break;
        case "F":
            return 0xE
            break;
        case "Z":
            return 0xA
            break;
        case "X":
            return 0x0
            break;
        case "C":
            return 0xB
            break;
        case "V":
            return 0xF
            break;
    }
}

document.addEventListener("keydown", (event) => {
    keysDict[findKey(event.key)] = true
});

document.addEventListener("keyup", (event) => {
    keysDict[findKey(event.key)] = false
});

for (var index in chip8["fonts"]) {
    chip8["memory"][fontStart + parseInt(index)] = chip8["fonts"][index]
}


function btn_true(btn_name) {
    keysDict[btn_name] = true
}

function btn_false(btn_name) {
    keysDict[btn_name] = false
}

function printKeys() {
    console.log(keysDict)
}
timer = 0
setInterval(() => {

    if (romFound) {
        cpuCycle()
        timer++
        if (timer % 5 == 0) {
            draw()
            if (chip8["delayTimer"] > 0) {
                chip8["delayTimer"] -= 1
            }
            if (chip8["delayTimer"] > 0) {
                chip8["delayTimer"] -= 1
            }
        }
    }
}, 3);

async function myRom(x) {
    k = await fetch(x)
    romObject = await k.body.getReader().read()
    rom = romObject.value
    for (var index2 in rom) {
        chip8["memory"][0x200 + parseInt(index2)] = rom[index2]
    }
    romFound = true
}

async function romChange() {
    k = await fetch(selectROM.value)
    romObject = await k.body.getReader().read()
    rom = romObject.value
    for (var index3 in rom) {
        chip8["memory"][0x200 + parseInt(index3)] = rom[index3]
    }
    romFound = true
}
function updateDisplayMemory(x, y, value) {
    pixelIndex = (x + y * 64) % 2048
    displayMemory[pixelIndex] ^= 1
    return (displayMemory[pixelIndex] & value)
}

function cpuCycle(){
    x =  getOPCode()
    m =  decode(x)
    execute(m)
}

function pageCycle() {
    draw()
    x = getOPCode()
    m = decode(x)
    execute(m)

}

function draw() {
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, 64, 32)
    for (let i = 0; i < displayMemory.length; i++) {
        if (displayMemory[i] == 0) {
            ctx.fillStyle = "#000000"
        }
        else if (displayMemory[i] == 1) {
            ctx.fillStyle = "#ffffff"
        }
        x = i % 64
        y = Math.floor(i / 64)
        ctx.fillRect(x, y, 1, 1)

    }
    /*
    ind = 0
    for(let j = 0; j < 33; j ++){
        line = ""
        for(k = 0; k < 65;k++){
            pixel = displayMemory[ind]
            line += pixel.toString(10)
            ind += 1
        }
        console.log(line)
    }*/

}

function getOPCode() {
    opcode = chip8["memory"][chip8["PC"]] << 8 | chip8["memory"][chip8["PC"] + 1]
    chip8["PC"] += 2
    return parseInt(opcode)
}

function decode(opcode) {
    if (opcode == 0x00e0) {
        return "CLS"
    }
    else if (opcode == 0x00ee) {
        return "RET"
    }
    else {
        arg_a = (opcode & 0xf000) >> 12
        arg_x = (opcode & 0x0f00) >> 8
        arg_y = (opcode & 0x00f0) >> 4
        arg_xnnn = opcode & 0x0fff
        arg_xxnn = opcode & 0x00ff
        arg_xxxn = opcode & 0x000f
        if (arg_a == 1) {
            return "JP addr"
        }
        else if (arg_a == 2) {
            return "CALL addr"
        }
        else if (arg_a == 3) {
            return "SE Vx, byte"
        }
        else if (arg_a == 4) {
            return "SNE Vx, byte"
        }
        else if (arg_a == 5) {
            return "SE Vx, Vy"
        }
        else if (arg_a == 6) {
            return "LD Vx, byte"
        }
        else if (arg_a == 7) {
            return "ADD Vx, byte"
        }
        else if (arg_a == 8) {
            if (arg_xxxn == 0) {
                return "LD Vx, Vy"
            }
            else if (arg_xxxn == 1) {
                return "OR Vx, Vy"
            }
            else if (arg_xxxn == 2) {
                return "AND Vx, Vy"
            }
            else if (arg_xxxn == 3) {
                return "XOR Vx, Vy"
            }
            else if (arg_xxxn == 4) {
                return "ADD Vx, Vy"
            }
            else if (arg_xxxn == 5) {
                return "SUB Vx, Vy"
            }
            else if (arg_xxxn == 6) {
                return "SHR Vx, Vy"
            }
            else if (arg_xxxn == 7) {
                return "SUBN Vx, Vy"
            }
            else if (arg_xxxn == 14) {
                return "SHL Vx, Vy"
            }
        }
        else if (arg_a == 9) {
            return "SNE Vx, Vy"
        }
        else if (arg_a == 10) {
            return "LD I, addr"
        }
        else if (arg_a == 11) {
            return "JP V0, addr"
        }
        else if (arg_a == 12) {
            return "RND Vx, byte"
        }
        else if (arg_a == 13) {
            return "DRW Vx, Vy, nibble"
        }
        else if (arg_a == 14) {
            if (arg_xxnn == 0x9e) {
                return "SKP Vx"
            }
            else if (arg_xxnn == 0xa1) {
                return "SKNP Vx"
            }
        }
        else if (arg_a == 15) {
            if (arg_xxnn == 0x07) {
                return "LD Vx, DT"
            }
            else if (arg_xxnn == 0x0a) {
                return "LD Vx, K"
            }
            else if (arg_xxnn == 0x15) {
                return "LD DT, Vx"
            }
            else if (arg_xxnn == 0x18) {
                return "LD ST, Vx"
            }
            else if (arg_xxnn == 0x1e) {
                return "ADD I, Vx"
            }
            else if (arg_xxnn == 0x29) {
                return "LD F, Vx"
            }
            else if (arg_xxnn == 0x33) {
                return "LD B, Vx"
            }
            else if (arg_xxnn == 0x55) {
                return "LD [I], Vx"
            }
            else if (arg_xxnn == 0x65) {
                return "LD Vx, [I]"
            }
        }
    }
}

function execute(cmd) {
    console.log(cmd)
    switch (cmd) {
        case "CLS":
            displayMemory = emptyBuffer
            break;
        case "RET":
            chip8["PC"] = chip8["stack"].pop()
            break;
        case "JP addr":
            chip8["PC"] = arg_xnnn
            break;
        case "CALL addr":
            chip8["stack"].push(chip8["PC"])
            chip8["PC"] = arg_xnnn
            break;
        case "SE Vx, byte":
            if (chip8["V"][arg_x] == arg_xxnn) {
                chip8["PC"] += 2
            }
            break;
        case "SNE Vx, byte":
            if (chip8["V"][arg_x] != arg_xxnn) {
                chip8["PC"] += 2
            }
            break;
        case "SE Vx, Vy":
            if (chip8["V"][arg_x] == chip8["V"][arg_y]) {
                chip8["PC"] += 2
            }
            break;
        case "LD Vx, byte":
            chip8["V"][arg_x] = (arg_xxnn)
            break;
        case "ADD Vx, byte":
            let add2 = chip8["V"][arg_x] + arg_xxnn
            chip8["V"][arg_x] = (add2 % 256)
            break;
        case "LD Vx, Vy":
            chip8["V"][arg_x] = chip8["V"][arg_y]
            break;
        case "OR Vx, Vy":
            chip8["V"][arg_x] = chip8["V"][arg_x] | chip8["V"][arg_y]
            break;
        case "AND Vx, Vy":
            chip8["V"][arg_x] = chip8["V"][arg_x] & chip8["V"][arg_y]
            break;
        case "XOR Vx, Vy":
            chip8["V"][arg_x] = chip8["V"][arg_x] ^ chip8["V"][arg_y]
            break;
        case "ADD Vx, Vy":
            let sum = chip8["V"][arg_x] + chip8["V"][arg_y]
            if (sum > 255) {
                chip8["V"][15] = 1
            }
            else {
                chip8["V"][15] = 0
            }
            chip8["V"][arg_x] = sum % 256
            break;
        case "SUB Vx, Vy":
            sub = chip8["V"][arg_x] - chip8["V"][arg_y];
            if (sub >= 0) {
                chip8["V"][arg_x] = sub
                chip8["V"][15] = 1
            }
            else {
                chip8["V"][arg_x] = sub + 256
                chip8["V"][15] = 0
            }

            /*
            Vx = arg_x
            Vy = arg_y
            sub = chip8["V"][Vx] - chip8["V"][Vy]
            if (chip8["V"][Vx] > chip8["V"][Vy]) {
                chip8["V"][15] = 1
            }
            else{
                chip8["V"][15] = 0
            }
            chip8["V"][Vx] = sub %256
            break;*/
            break;
        case "SHR Vx, Vy":
            chip8["V"][15] = chip8["V"][arg_y] & 0x1
            chip8["V"][arg_x] = chip8["V"][arg_y] >> 1
            break;
        case "SUBN Vx, Vy":
            let sub2 = chip8["V"][arg_y] - chip8["V"][arg_x]
            if (sub2 < 0) {
                chip8["V"][15] = 0x00
            }
            else {
                chip8["V"][15] = 0x01
            }
            chip8["V"][arg_x] = sub2
            break;
        case "SHL Vx, Vy":
            if (chip8["V"][arg_y] >= 128) {
                chip8["V"][15] = 1
            }
            else {
                chip8["V"][15] = 0
            }
            /*
            msb = (chip8["V"][arg_x] & 0x80)
            if (msb) {
                chip8["V"][15] = 1
            }
            else {
                chip8["V"][15] = 0
            }*/
            chip8["V"][arg_x] = (chip8["V"][arg_y] << 1) % 256
            break;
        case "SNE Vx, Vy":
            if (chip8["V"][arg_x] != chip8["V"][arg_y]) {
                chip8["PC"] += 2
            }
            break;
        case "LD I, addr":
            chip8["I"] = arg_xnnn
            break;
        case "JP V0, addr":
            chip8["PC"] = (arg_xnnn + chip8["V"][0])
            break;
        case "RND Vx, byte":
            let rnd = Math.floor(Math.random() * 255)
            chip8["V"][arg_x] = rnd & arg_xxnn
            break;
        case "DRW Vx, Vy, nibble":
            chip8["V"][15] = 0
            for (let nibbleNo = 0; nibbleNo < arg_xxxn; nibbleNo++) {
                spriteByte = chip8["memory"][chip8["I"] + nibbleNo]
                for (let pixelNo = 0; pixelNo < 8; pixelNo++) {
                    x = (chip8["V"][arg_x] % 256) + pixelNo
                    y = (chip8["V"][arg_y] % 256) + nibbleNo
                    spritePixel = spriteByte & (0x80 >> pixelNo)
                    screenPixel = (y * 64 + x)
                    if (spritePixel) {
                        if (displayMemory[screenPixel]) {
                            chip8["V"][15] = 1
                        }
                        displayMemory[screenPixel] ^= 1
                    }
                }
            }
            /*
            width = 8
            height = arg_xxxn
            chip8["V"][15] = 0
            for (let row = 0; row < height; row++) {
                sprite = chip8["memory"][chip8["I"] + row]
                for (let col = 0; col < width; col++) {
                    if ((sprite & 0x80) > 0) {
                        if (updateDisplayMemory(chip8["V"][arg_x] + col, chip8["V"][arg_y] + row)) {
                            chip8["V"][15] = 1
                        }
                    }
                    sprite = sprite << 1
                }
            }
            */
            break;
        case "SKP Vx":
            if (keysDict[chip8["V"][arg_x]]) {
                chip8["PC"] += 2
            }
            break;
        case "SKNP Vx":
            if (!keysDict[chip8["V"][arg_x]]) {
                chip8["PC"] += 2
            }
            break;
        case "LD Vx, DT":
            chip8["V"][arg_x] = chip8["delayTimer"]
            break;
        case "LD Vx, K":
            let j = 0
            for (let key in keysDict) {
                if (keysDict[key]) {
                    chip8["V"][arg_x] = key
                    j = 1
                    break
                }
            }
            if (j == 0) {
                chip8["PC"] -= 2
            }
            break;
        case "LD DT, Vx":
            chip8["delayTimer"] = chip8["V"][arg_x]
            break;
        case "LD ST, Vx":
            chip8["soundTimer"] = chip8["V"][arg_x]
            break;
        case "ADD I, Vx":
            chip8["I"] += chip8["V"][arg_x]
            break;
        case "LD F, Vx":
            chip8["I"] = 0x50 + (5 * (chip8["V"][arg_x]))
            break;
        case "LD B, Vx":
            let Vx = chip8["V"][arg_x]
            chip8["memory"][chip8["I"]] = parseInt(Vx / 100)
            chip8["memory"][chip8["I"] + 1] = parseInt((Vx % 100) / 10)
            chip8["memory"][chip8["I"] + 2] = parseInt(Vx % 10)
            break;
        case "LD [I], Vx":
            for (let v = 0; v < arg_x + 1; v++) {
                chip8["memory"][chip8["I"] + v] = chip8["V"][v]
            }
            break;
        case "LD Vx, [I]":
            for (let v = 0; v < arg_x + 1; v++) {
                chip8["V"][v] = chip8["memory"][chip8["I"] + v]
            }
            break;

    }
    cmdList.push(cmd)
}
/*
let data
const readFile = e => {
    const file = e.target.files[0]
    let reader = new FileReader();

    reader.onload = function (e) {
        let arrayBuffer = new Uint8Array(reader.result);
        data = arrayBuffer
        console.log(arrayBuffer);
    }

    reader.readAsArrayBuffer(file);
}

document.querySelector("#fileItem").onchange = readFileF
*/
