function showHighscores(params) {
    var highscores = JSON.parse(window.localStorage.getItem("highScores")) || [];

    highscores.sort(function(x, y){
        return y.score - x.score
    })

    highscores.forEach((score) => {
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score

        var olTag = document.getElementById("scores");
        olTag.appendChild(liTag)
    });
}

function clearBoard() {
    window.localStorage.removeItem("highScores");
    window.location.reload()
}

document.getElementById("reset").addEventListener("click", clearBoard);

showHighscores();