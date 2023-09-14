var num = document.querySelectorAll(".drum").length
//console.log(query)

for (var i = 0; i < num; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert("clicked")
        var btn = this.innerHTML
        switch (btn) {
            case 'w': var audio = new Audio("Sounds/tom-1.mp3")
                audio.play();
                break;

            case 'a': var audio = new Audio("Sounds/tom-2.mp3")
                audio.play();
                break;

            case 's': var audio = new Audio("Sounds/tom-3.mp3")
                audio.play();
                break;

            case 'd': var audio = new Audio("Sounds/tom-4.mp3")
                audio.play();
                break;

            case 'j': var audio = new Audio("Sounds/snare.mp3")
                audio.play();
                break;

            case 'k': var audio = new Audio("Sounds/crash.mp3")
                audio.play();
                break;

            case 'l': var audio = new Audio("Sounds/kick-bass.mp3")
                audio.play();
                break;
        }

    })

}

document.addEventListener("keypress", function (e) {
    var key = e.key.toLowerCase()
    switch (key) {
        case 'w': var audio = new Audio("Sounds/tom-1.mp3")
            audio.play();
            break;

        case 'a': var audio = new Audio("Sounds/tom-2.mp3")
            audio.play();
            break;

        case 's': var audio = new Audio("Sounds/tom-3.mp3")
            audio.play();
            break;

        case 'd': var audio = new Audio("Sounds/tom-4.mp3")
            audio.play();
            break;

        case 'j': var audio = new Audio("Sounds/snare.mp3")
            audio.play();
            break;

        case 'k': var audio = new Audio("Sounds/crash.mp3")
            audio.play();
            break;

        case 'l': var audio = new Audio("Sounds/kick-bass.mp3")
            audio.play();
            break;
        default:
            console.log(e.key)
    }
})