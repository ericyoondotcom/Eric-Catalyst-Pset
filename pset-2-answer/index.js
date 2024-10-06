function level_10() {
    document.getElementById("l10").innerText = "Hello, World!";
}


function level_11() {
    const s = document.getElementById("l11").style;
    console.log(s.backgroundColor)
    s.backgroundColor = s.backgroundColor == "yellow" ? "inherit" : "yellow";
}

function level_13() {
    const num = document.getElementById("l13_input").value;
    let out = "";
    for(let i = 1; i <= num; i++) {
        for(let j = 1; j <= i; j++) {
            out += "*";
        }
        out += "\n";
    }
    document.getElementById("l13_output").innerText = out;
}