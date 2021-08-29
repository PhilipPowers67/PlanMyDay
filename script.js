// putting time into header
var currentDate = new Date()
document.getElementById("currentDay").innerHTML = currentDate.toDateString();

var timeCheck = parseInt(moment().format('HH'))
var containerEl = $(".container")

// recall from local storage
for (let i = 0; i < 9; i++) {
    var description = containerEl.children()[i].querySelector(".description");
    var id = containerEl.children()[i].id;
    description.innerHTML = localStorage.getItem(id)
    // console.log(description);
}

$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        var data = $(this).parent().attr("id")
        var textArea = $(this).siblings(".description").val()
         localStorage.setItem(data, textArea);
    //  console.log(textArea);
    
    
    
    })
    for (var i = 0; i < containerEl.children().length; i++) {
        var row = parseInt(containerEl.children()[i].id);
        // console.log(row);
        // console.log(timeCheck);
        
        if (timeCheck === row) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
            // console.log("they are equal");
        } else if(timeCheck > row) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
            // console.log("timecheck greater than row");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
            // console.log("timecheck is less than row")
        }
        //  console.log(row, timeCheck);
    }
    
    //   console.log(containerEl.children()[0].id);  
})

