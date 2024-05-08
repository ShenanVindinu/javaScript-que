var array = ["#C21010", "#E64848", "#FFFDE3", "#CFE8A9", "#FF8A08", "#FFC100"]; // ["F", "A", "B", "C", "D", "E"]

var myInterval = null;

function replaceValues() {
    // change the array
    let lastValue = array.pop();
    array.unshift(lastValue);

    // update the elements
    $("#value1").css({'backgroundColor': array[0]+''});
    $("#value2").css({'backgroundColor': array[1]+''});
    $("#value3").css({'backgroundColor': array[2]+''});
    $("#value4").css({'backgroundColor': array[3]+''});
    $("#value5").css({'backgroundColor': array[4]+''});
    $("#value6").css({'backgroundColor': array[5]+''});
}

$("#start_btn").on("click", () => {
    myInterval = setInterval(replaceValues, 2000);
});

$("#stop_btn").on("click", () => {
    clearInterval(myInterval);
});