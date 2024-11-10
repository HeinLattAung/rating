let selectedRating = "";

    document.querySelectorAll(".bt").forEach(button => {
    button.addEventListener("click", function() {
            selectedRating = this.value;});
    });

    document.getElementById("submitbt").onclick = function() {
        let submit = document.getElementById("f_main");
        let second = document.getElementById("s_main");

        submit.style.display = "none";
        second.style.display = "block";

        document.getElementById("finalrate").innerText = rating();
};

function rating() {
    let result = "";

    switch (selectedRating) {
        case "1":
            result = "You selected 1 out of 5";
        break;
        case "2":
            result = "You selected 2 out of 5";
        break;
        case "3":
            result = "You selected 3 out of 5";
        break;
        case "4":
            result = "You selected 4 out of 5";
        break;
        case "5":
            result = "You selected 5 out of 5";
        break;
        default:
            result = "bla bla bla";
        }
        return result;
}

