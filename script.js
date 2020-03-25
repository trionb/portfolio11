
var app = {}

//submit function for submit button on contact page

app.events = function () {
    console.log("hello")
    $('.btn btn-info').on("click", function (event) {
        event.preventdefault();
        console.log("click")

    })
}
app.events()