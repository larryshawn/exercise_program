// an object to hold onto the movies
var calendarCardsDictionary = {};

function renderCalendarCards(dayOfWeek, dayOfWeekExercise) {
    // Reach out and grab the raw template
    var rawTemplate = $('#weekly-workout-cards-mustache-template').html();
    // console.log(rawTemplate);

    // Define dynamic values (hydrate the template)
    var values = {
        'dayOfWeek': dayOfWeek,
        'dayOfWeekExercise'  : dayOfWeekExercise
    };

    // So you can call it like this:
    // doStuff("4.jpg", "yep, me again", "Zweh!");
    
    // Do the Mustache value placement. Stamp out the template with real values.
    var renderedText = Mustache.render(rawTemplate, values);

    // put it inside the div
    $('#weekly-workout-cards-container').append(renderedText);
    buildDictionary(values);
    // Stamp out our cards here.
    bindEventListeners();
}



// this function will be in most big applications. It may be named eventHandlers or evenListeners etc. 
// This is called event driven programming
function bindEventListeners() {
        console.log($(".daysOfWeekCard"));
    // $(".daysOfWeekCard").click(function (e) {
        // body...
        // console.log(e.target);

        // find out which card got clicked
        // var targetId = e.target.id;
        // console.log(e.target.id);

        // var info = moviesDictionary[targetId];
        // console.log(moviesDictionary[targetId]);
        // var rawTemplate = $('#lightbox-template').html();
        // console.log(rawTemplate);
        // var stampedTemplate = Mustache.render(rawTemplate, info);
        // console.log(stampedTemplate);
        // $('#lightbox-container').html(stampedTemplate);
        // $('#mask').fadeIn('fast');
        // $('.lightbox').fadeIn('slow');
        // $('#mask').click(function(){
            
        //     $('.lightbox').fadeOut();
        //     $('#mask').fadeOut();
        // })
    // });
    // $("body").keypress(function (e) {
    //     // body...
    //     console.log(e);
    // });
}

function buildDictionary(values) {
  for (var i = 0; i < values.length; i++) {
    var currentCalendarCard = values[i];
    // console.log(currentCalendarCard);
    calendarCardsDictionary[currentCalendarCard.id] = currentCalendarCard;
  }
  console.log(calendarCardsDictionary);
}

renderCalendarCards();
// if I call bindEventListeners() here it's a race template because fetchData() is asynchronous. The get() function is asynchronous because get() is ajax. That's why we put it in a callback method