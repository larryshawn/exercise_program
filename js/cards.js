// mustache template for food item search results
function renderNewCard(servingSizeQuantity, servingSizeUnit, brandName, itemName, itemId, calories, protein, carbs, fat) {
    // Reach out and grab the raw template
    var rawTemplate = $('#nutrition-info-template').html();
    // console.log(rawTemplate);

    // Define dynamic values (hydrate the template)
    var values = {
        'servingSizeQuantity'   : servingSizeQuantity,
        'servingSizeUnit'       : servingSizeUnit,
        'brandName'             : brandName,
        'itemName'              : itemName,
        'itemId'                : itemId,
        'calories'              : calories,
        'protein'               : protein,
        'carbs'                 : carbs,
        'fat'                   : fat
    };

    // So you can call it like this:
    // doStuff("4.jpg", "yep, me again", "Zweh!");
    
    // Do the Mustache value placement. Stamp out the template with real values.
    var renderedText = Mustache.render(rawTemplate, values);

    // put it inside the div
    $('#searchResults').append(renderedText);

}   

// Hydrate the Mustache template for individual meals

function renderMealCards(name, calories, protein, carbs, fats) {
  // Reach out and grab your raw template by its ID.
  // Specifically this gets the <script> tag by its ID, then sucks out its inner HTML,
  // which is your raw template. This raw template is stored in the variable templateText.
  var rawTemplate = $('#meals-template').html();

  // Define your dynamic values. Notice that the keys of this plain ol' JavaScript object match precisely the "placeholder" mustaches in your raw template.
  var values = {
    'name'      : name,
    'calories'  : calories,
    'protein'   : protein,
    'carbs'     : carbs,
    'fats'      : fats
  };

  // Substitute the values in your raw template using Mustache.render() function.
  var renderedText = Mustache.render(rawTemplate, values);

  // Finally, take the "stamped out" template and append it into cards-container <div>.
  $('#meals-container').append(renderedText);
}

function renderDailyAllowanceCards(dayType, calories, protein, carbs, fats) {
    var allowancesTemplate = $('#dailyAllowancesTemplate').html();
    // console.log(allowancesTemplate);
    var values = {
        'dayType'   : dayType,
        'calories'  : calories,
        'protein'   : protein,
        'carbs'     : carbs,
        'fats'      : fats
    };
    var renderedText = Mustache.render(allowancesTemplate, values);
    $('#mealAllowances').append(renderedText);
}