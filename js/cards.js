// mustache templating


function renderNewCard(brandName, itemName, calories, protein, carbs, fat) {
    // Reach out and grab the raw template
    var rawTemplate = $('#nutrition-info-template').html();
    console.log(rawTemplate);

    // Define dynamic values (hydrate the template)
    var values = {
        'brandName': brandName,
        'itemName'  : itemName,
        'calories': calories,
        'protein' : protein,
        'carbs'   : carbs,
        'fat'     : fat
    };

    // So you can call it like this:
    // doStuff("4.jpg", "yep, me again", "Zweh!");
    
    // Do the Mustache value placement. Stamp out the template with real values.
    var renderedText = Mustache.render(rawTemplate, values);

    // put it inside the div
    $('#searchResults').append(renderedText);
}   

// Another mustache template

function renderMealsCard(meals, calories, protein, carbs, fats) {
  // Reach out and grab your raw template by its ID.
  // Specifically this gets the <script> tag by its ID, then sucks out its inner HTML,
  // which is your raw template. This raw template is stored in the variable templateText.
  var templateText = $('#meals-template').html();

  // Define your dynamic values. Notice that the keys of this plain ol' JavaScript object match precisely the "placeholder" mustaches in your raw template.
  var values = {
    'meals': meals,
    'calories': calories,
    'protein': protein,
    'carbs': carbs,
    'fats' : fats
  };

  // Substitute the values in your raw template using Mustache.render() function.
  var renderedText = Mustache.render(templateText, values);

  // Finally, take the "stamped out" template and append it into cards-container <div>.
  $('#meals-container').append(renderedText);
}

// Yet another mustache template

function renderCalendarCard(dayOfWeek, dayOfWeekExercise) {
    // Reach out and grab the raw template
    var rawTemplate = $('#calendar-template').html();
    console.log(rawTemplate);

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
    $('.daysOfWeekCardContainer').append(renderedText);
}  

// function renderWorkoutOverviewCard(weight, calories, protein, fat, calories, protein, carbs, fat); {
//     // Reach out and grab the raw template
//     var rawTemplate = $('#calendar-template').html();
//     console.log(rawTemplate);

//     // Define dynamic values (hydrate the template)
//     var values = {
//         'dayOfWeek': dayOfWeek,
//         'dayOfWeekExercise'  : dayOfWeekExercise
//     };

//     // So you can call it like this:
//     // doStuff("4.jpg", "yep, me again", "Zweh!");
    
//     // Do the Mustache value placement. Stamp out the template with real values.
//     var renderedText = Mustache.render(rawTemplate, values);

//     // put it inside the div
//     $('.daysOfWeekCardContainer').append(renderedText);
// }   