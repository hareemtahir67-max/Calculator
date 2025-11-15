let display = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let value = e.target.innerHTML;   // FIXED innerHTML

        if (value === "AC") {
            string = "";
            display.value = string;
        }

        else if (value === "DEL") {
            string = string.slice(0, -1);
            display.value = string;
        }

        else if (value === "=") {
            try {
                string = eval(string);
                display.value = string;
            } catch {
                display.value = "Error";
            }
        }

        else {
            string += value;
            display.value = string;
        }
    });
});
