// mustache template for food item search results
function renderSearchResultsCards(servingSizeQuantity, servingSizeUnit, brandName, itemName, itemId, calories, protein, carbs, fat) {
    // Reach out and grab the raw template
    var mustacheTemplate = $('#search-results-mustache-template').html();
    // console.log(mustacheTemplate);

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
    var renderedText = Mustache.render(mustacheTemplate, values);

    // append each result item from the for loop to the end of the previous result item inside the div
    $('#search-results-container').append(renderedText);
    // or for a result that doesn't tack each search result set on top of the other, do this...

    // return renderedText;

    // This is how it's really done though ;), ugh, not really.
    // var currentTextInSearchResultsArea = $( '#searchResults' ).html();
    // $( '#searchResults' ).text( renderedText );

}   

// Hydrate the Mustache template for individual meals

function renderMealCards(name, calories, protein, carbs, fats) {
  // Reach out and grab your raw template by its ID.
  // Specifically this gets the <script> tag by its ID, then sucks out its inner HTML,
  // which is your raw template. This raw template is stored in the variable templateText.
  var rawTemplate = $('#individual-meal-allowances-mustache-template').html();

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
  $('#individual-meals-container').append(renderedText);
}

function renderDailyAllowanceCards(dayType, calories, protein, carbs, fats) {
    var allowancesTemplate = $('#daily-meal-allowances-mustache-template').html();
    // console.log(allowancesTemplate);
    var values = {
        'dayType'   : dayType,
        'calories'  : calories,
        'protein'   : protein,
        'carbs'     : carbs,
        'fats'      : fats
    };
    var renderedText = Mustache.render(allowancesTemplate, values);
    $('#daily-meal-allowances-container').append(renderedText);
}