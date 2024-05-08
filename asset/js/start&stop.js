var array = ["A", "B", "C", "D", "E", "F"]; // ["F", "A", "B", "C", "D", "E"]

var myInterval = null;

function replaceValues() {
    // change the array
    let lastValue = array.pop();
    array.unshift(lastValue);

    // update the elements
    $("#value1").text(array[0]);
    $("#value2").text(array[1]);
    $("#value3").text(array[2]);
    $("#value4").text(array[3]);
    $("#value5").text(array[4]);
    $("#value6").text(array[5]);
}

$("#start_btn").on("click", () => {
    myInterval = setInterval(replaceValues, 2000);
});

$("#stop_btn").on("click", () => {
    clearInterval(myInterval);
});