var list = ["Push-ups", "Sit-ups", "Lunges (Each side)", "Squats", "Burpees"]
var quan = [5, 8, 10, 12, 14, 16, 18, 20]
var pre = ["Come on, let me see ", "Let's do ", "Don't be lazy, its time for ", "Warm up those muscles, its time for ", ]
let end = "!"
var counter = 0;
let maxCount = 8;

function displayRandExe() {
    document.getElementById("button1").hidden = true;


    
    
    document.getElementById("exeArea").innerHTML = genRandString();
    document.getElementById("exeArea").hidden = false;
    document.getElementById("button2").hidden = false;
    document.getElementById("button3").hidden = false;

    if(counter == maxCount) {
        endSession();
        return;
    } else if(counter == (maxCount-1)) {
        document.getElementById("button2").hidden = true;
        document.getElementById("exeArea").innerHTML = genRandString();
        return;
    }

    counter++;
    document.getElementById("button2").innerHTML = "Continue? " + counter + "/" + maxCount;
    
}

function genRandString() {
    let randList = Math.floor(Math.random()*list.length)
    let randQuan = Math.floor(Math.random()*quan.length)
    let randPre = Math.floor(Math.random()*pre.length)

    return pre[randPre] + quan[randQuan] + " " + list[randList] + end
}

function endSession() {
    counter = 0;
    document.getElementById("exeArea").innerHTML = "We hope you had a great workout!";
    document.getElementById("button1").hidden = false;
    document.getElementById("button2").hidden = true;
    document.getElementById("button3").hidden = true;
    
}
