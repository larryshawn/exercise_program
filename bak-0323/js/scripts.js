
function handleClickEvents() {
  // When user clicks on the hint that fades in and out
  $('#hint').click(function(e) {
    var mask = $(e.target).parent().next('#preferences-container');
    $("#preferences-container").fadeIn();
    mask.css('transform', 'translateY(-48px)');
  });

  // If any close button gets clicked, slide the mask curtain up.
  $('#preferencesCloseButton').click(function(e) {
    var mask = $("#preferences-container");
    mask.css({
      "transform": "translateY(-532px)",
      "transition": "transform 2s ease-in-out",
      "-webkit-transition": "transform 2s ease-in-out",
      "-moz-transition": "transform 2s ease-in-out",
      "-o-transition": "transform 2s ease-in-out"
    });
  });

  $('#alertCloseButton').click(function(e) {
    var mask = $("#preferences-container");
    mask.css('transform', 'translateY(-514px)');
    $("#alert-container").fadeOut();
  });

  $('#preferencesSubmitButton').click(function(e) {
    init();
  });
}

function setLevel(days) { level = "week" + Math.ceil(days / 7);
console.log(level); 
return level;
}

function setAlertType(alertType) {
  // set alert type
  if (alertType == "audio") {
    wantsAudio = true;
  }
  if (alertType == "video") {
      wantsVideo = true;
  }
}
// 1. preferences.js
function setPreferences() {
    let days = $("#amount-of-days").val(),
        goal = $("#goal").val(),
        alertType = $('input[name=alertTypeCheckBoxes]:checkbox:checked').val(),
        weight = parseInt(document.getElementById("currentWeight").value),
        preferences,
        level;
    
    level = setLevel(days);
    setAlertType(alertType);
    
    preferences = [days, goal, alertType, level, weight];
    return preferences;
}

// function thisWeeksWorkout(workoutWeeks,) {
//   if (level == "week1") {

//     for (var i = 0; i < workoutWeeks.week1.length; i++) {
//       renderCalendarCard(workoutWeeks.week1[i].dayOfWeek, workoutWeeks.week1[i].workout, workoutWeeks.week1[i].id, workoutWeeks.week1[i].link);
//     }
//   }
// }
// refactoring the below into the top
function getLevel(workoutWeeks) {
  if (level == "week1") {

    for (var i = 0; i < workoutWeeks.week1.length; i++) {
      renderCalendarCard(workoutWeeks.week1[i].dayOfWeek, workoutWeeks.week1[i].workout, workoutWeeks.week1[i].id, workoutWeeks.week1[i].link);
    }
  }
  else if (level == "week2") {
    for (var i = 0; i < workoutWeeks.week2.length; i++) {
      renderCalendarCard(workoutWeeks.week2[i].dayOfWeek, workoutWeeks.week2[i].workout, workoutWeeks.week2[i].id, workoutWeeks.week2[i].link);
    }
  }
  else if (level == "week3") {
    for (var i = 0; i < workoutWeeks.week3.length; i++) {
      renderCalendarCard(workoutWeeks.week3[i].dayOfWeek, workoutWeeks.week3[i].workout, workoutWeeks.week3[i].id, workoutWeeks.week3[i].link);
    }
  }
  else if (level == "week4") {
    for (var i = 0; i < workoutWeeks.week4.length; i++) {
      renderCalendarCard(workoutWeeks.week4[i].dayOfWeek, workoutWeeks.week4[i].workout, workoutWeeks.week4[i].id, workoutWeeks.week4[i].link);
    }
  }
  else if (level == "week5") {
    for (var i = 0; i < workoutWeeks.week5.length; i++) {
      renderCalendarCard(workoutWeeks.week5[i].dayOfWeek, workoutWeeks.week5[i].workout, workoutWeeks.week5[i].id, workoutWeeks.week5[i].link);
    }
  }
  else if (level == "week6") {
    for (var i = 0; i < workoutWeeks.week6.length; i++) {
      renderCalendarCard(workoutWeeks.week6[i].dayOfWeek, workoutWeeks.week6[i].workout, workoutWeeks.week6[i].id, workoutWeeks.week6[i].link);
    }
  }
  else if (level == "week7") {
    for (var i = 0; i < workoutWeeks.week7.length; i++) {
      renderCalendarCard(workoutWeeks.week7[i].dayOfWeek, workoutWeeks.week7[i].workout, workoutWeeks.week7[i].id, workoutWeeks.week7[i].link);
    }
  }
  else if (level == "week8") {
    for (var i = 0; i < workoutWeeks.week8.length; i++) {
      renderCalendarCard(workoutWeeks.week8[i].dayOfWeek, workoutWeeks.week8[i].workout, workoutWeeks.week8[i].id, workoutWeeks.week8[i].link);
    }
  }
  else if (level == "week9") {
    for (var i = 0; i < workoutWeeks.week9.length; i++) {
      renderCalendarCard(workoutWeeks.week9[i].dayOfWeek, workoutWeeks.week9[i].workout, workoutWeeks.week9[i].id, workoutWeeks.week9[i].link);
    }
  }
  else if (level == "week10") {
    for (var i = 0; i < workoutWeeks.week10.length; i++) {
      renderCalendarCard(workoutWeeks.week10[i].dayOfWeek, workoutWeeks.week10[i].workout, workoutWeeks.week10[i].id, workoutWeeks.week10[i].link);
    }
  }
  else if (level == "week11") {
    for (var i = 0; i < workoutWeeks.week11.length; i++) {
      renderCalendarCard(workoutWeeks.week11[i].dayOfWeek, workoutWeeks.week11[i].workout, workoutWeeks.week11[i].id, workoutWeeks.week11[i].link);
    }
  }
  else if (level == "week12") {
    for (var i = 0; i < workoutWeeks.week12.length; i++) {
      renderCalendarCard(workoutWeeks.week12[i].dayOfWeek, workoutWeeks.week12[i].workout, workoutWeeks.week12[i].id, workoutWeeks.week12[i].link);
    }
  };
}

// Yet another mustache template. I moved this one out of cards.js to make it work.

function renderCalendarCard(dayOfWeek, dayOfWeekExercise, ids, link) {
    // Reach out and grab the raw template
    var rawTemplate = $('#weekly-workout-cards-mustache-template').html();
    // console.log(rawTemplate);

    // Define dynamic values (hydrate the template)
    var values = {
        'dayOfWeek'          : dayOfWeek,
        'dayOfWeekExercise'  : dayOfWeekExercise,
        'ids'                : ids,
        'link'               : link
    };
    
    // Do the Mustache value placement. Stamp out the template with real values.
    var renderedText = Mustache.render(rawTemplate, values);

    // put it inside the div
    $('#weekly-workout-cards-container').append(renderedText);
    $('#overview-container').fadeIn();
}

// 2-a. set workout




function bindEventListeners() {
    $(".daysOfWeekCard").click(function (e) {
        // body...
        // find out which card got clicked
        var targetId = e.currentTarget.id;
        // grab the link from an attribute
        var targetLink = $(e.currentTarget).attr("value");
        var rawTemplate = $('#lightbox-template').html();

        $( "#daily-workout-iframe" ).attr( "src", targetLink );
        // console.log(consoleTest);
        // console.log(rawTemplate);
        // the extraneous stuff is being added below.
        // var stampedTemplate = Mustache.render(rawTemplate, targetLink);

        // console.log(stampedTemplate);
        // $('#lightbox-container').append(stampedTemplate);
        $('#mask').fadeIn('fast');
        $('.lightbox').fadeIn('slow');
        $('#mask').click(function(){
            
            $('.lightbox').fadeOut();
            $('#mask').fadeOut();
        })
    // });
    // $("body").keypress(function (e) {
    //     // body...
    //     console.log(e);
    });
}


// 2. programOverview.js
// show the program overview
function showProgramOverview(level, goal, weight) {
  $("#overview-container").fadeIn(1000);
  $("#daily-meal-allowances-container").fadeIn(1000);
  $("#food-container").fadeIn(1000);

  // Compute increase daily allowances
  // ratio * weight = units
  // ratio = units / weight
  var dailyIncreaseCaloriesOnRestDays = (18 * weight).toFixed();
  var dailyIncreaseProteinOnRestDays = (1.57 * weight).toFixed();
  var dailyIncreaseCarbsOnRestDays = (1.57 * weight).toFixed();
  var dailyIncreaseFatOnRestDays = (.6 * weight).toFixed();

  var dailyIncreaseCaloriesOnWorkoutDays = (20 * weight).toFixed();
  var dailyIncreaseProteinOnWorkoutDays = (1.75 * weight).toFixed();
  var dailyIncreaseCarbsOnWorkoutDays = (1.75 * weight).toFixed();
  var dailyIncreaseFatOnWorkoutDays = (.6 * weight).toFixed();

  // calories are not so important here. They can be flexible
  var dailyDecreaseCaloriesForAllDays = "flex";
  // protein remains the same for all 3 phases at 1.5 g per pound
  var dailyDecreaseProteinForAllDays = (1.5 * weight).toFixed();
  // fats remains the same for all 3 phases at .5 g per pound
  var dailyDecreaseFatForAllDays = (.5 * weight).toFixed();
  // phase 1 = first week
  if (level == 'week1') {
    var dailyDecreaseCarbsForAllDays = (1.5 * weight).toFixed();
  }
  // phase 2 = weeks 2 & 3
  else if (level == 'week2' || level == 'week3') {
    var dailyDecreaseCarbsForAllDays = (1 * weight).toFixed();
  }
  // phase 3 = weeks 4, 5 and 6
  else if (level == 'week4' || level == 'week5' || level == 'week6') {
    var dailyDecreaseCarbsForAllDays = (.5 * weight).toFixed();
  }
  

  if (goal == 'increase') {
    var dailyAllowances = [
    increaseRestDays = {
      "dayType"   : "Rest",
      "calories"  : dailyIncreaseCaloriesOnRestDays,
      "protein"   : dailyIncreaseProteinOnRestDays,
      "carbs"     : dailyIncreaseCarbsOnRestDays,
      "fats"      : dailyIncreaseFatOnRestDays
    },
    increaseWorkoutDays = {
      "dayType"   : "Exercise",
      "calories"  : dailyIncreaseCaloriesOnWorkoutDays,
      "protein"   : dailyIncreaseProteinOnWorkoutDays,
      "carbs"     : dailyIncreaseCarbsOnWorkoutDays,
      "fats"      : dailyIncreaseFatOnWorkoutDays
    }, 
  ];
  for (var i = 0; i < dailyAllowances.length; i++) {
    renderDailyAllowanceCards(dailyAllowances[i].dayType, 
    dailyAllowances[i].calories, 
    dailyAllowances[i].protein, 
    dailyAllowances[i].carbs, 
    dailyAllowances[i].fats);
  };
  // increase object
  var increaseMeals = [
    meal1 = {
      "name"     : "Breakfast 1 (Immediately Upon Waking)",
      "calories"  : (dailyIncreaseCaloriesOnRestDays * .06).toFixed(),
      "protein"   : (dailyIncreaseProteinOnRestDays * .08).toFixed(),
      "carbs"     : (dailyIncreaseCarbsOnRestDays * .08).toFixed(),
      "fats"      : (dailyIncreaseFatOnRestDays * 1.19).toFixed(),
    },
    meal2 = {
      "name"     : "Breakfast 2 (30-60 Minutes After Breakfast 1)",
      "calories"  : (dailyIncreaseCaloriesOnRestDays * .26).toFixed(),
      "protein"   : (dailyIncreaseProteinOnRestDays * .13).toFixed(),
      "carbs"     : (dailyIncreaseCarbsOnRestDays * .23).toFixed(),
      "fats"      : (dailyIncreaseFatOnRestDays * .33).toFixed()
    },
    meal3 = {
      "name"     : "Late Morning Snack",
      "calories"  : (dailyIncreaseCaloriesOnRestDays * .13).toFixed(),
      "protein"   : (dailyIncreaseProteinOnRestDays * .11).toFixed(),
      "carbs"     : (dailyIncreaseCarbsOnRestDays * .16).toFixed(),
      "fats"      : (dailyIncreaseFatOnRestDays * .05).toFixed()
    },
    meal4 = {
      "name"     : "Lunch",
      "calories"  : (dailyIncreaseCaloriesOnRestDays * .1).toFixed(),
      "protein"   : (dailyIncreaseProteinOnRestDays * .06).toFixed(),
      "carbs"     : (dailyIncreaseCarbsOnRestDays * .21).toFixed(),
      "fats"      : (dailyIncreaseFatOnRestDays * .13).toFixed()
    },
    meal5 = {
      "name"     : "Afternoon Snack",
      "calories"  : (dailyIncreaseCaloriesOnRestDays * .11).toFixed(),
      "protein"   : (dailyIncreaseProteinOnRestDays * .37).toFixed(),
      "carbs"     : (dailyIncreaseCarbsOnRestDays * .14).toFixed(),
      "fats"      : (dailyIncreaseFatOnRestDays * .45).toFixed()
    },
    meal6 = {
      "name"     : "Pre-Workout (Within 30 Minutes Before Workouts)",
      "calories"  : (dailyIncreaseCaloriesOnRestDays * .06).toFixed(),
      "protein"   : (dailyIncreaseProteinOnRestDays * .08).toFixed(),
      "carbs"     : (dailyIncreaseCarbsOnRestDays * .08).toFixed(),
      "fats"      : (dailyIncreaseFatOnRestDays * .03).toFixed()
    },
    meal7 = {
      "name"     : "Post-Workout (Within 30 Minutes After Workouts)",
      "calories"  : (dailyIncreaseCaloriesOnRestDays * .06).toFixed(),
      "protein"   : (dailyIncreaseProteinOnRestDays * .08).toFixed(),
      "carbs"     : (dailyIncreaseCarbsOnRestDays * .08).toFixed(),
      "fats"      : (dailyIncreaseFatOnRestDays * 1.19).toFixed()
    },
    meal8 = {
      "name"     : "Dinner",
      "calories"  : (dailyIncreaseCaloriesOnRestDays * .14).toFixed(),
      "protein"   : (dailyIncreaseProteinOnRestDays * .19).toFixed(),
      "carbs"     : (dailyIncreaseCarbsOnRestDays * .02).toFixed(),
      "fats"      : (dailyIncreaseFatOnRestDays * 3.13).toFixed()
    },
    meal9 = {
      "name"     : "Before Bed Snack",
      "calories"  : (dailyIncreaseCaloriesOnRestDays * .05).toFixed(),
      "protein"   : (dailyIncreaseProteinOnRestDays * .08).toFixed(),
      "carbs"     : (dailyIncreaseCarbsOnRestDays * .02).toFixed(),
      "fats"      : (dailyIncreaseFatOnRestDays * .08).toFixed()
    }
  ];
  for (var i = 0; i < increaseMeals.length; i++) {
  renderMealCards(increaseMeals[i].name, increaseMeals[i].calories, increaseMeals[i].protein, increaseMeals[i].carbs, increaseMeals[i].fats);
  };
  }

  else if (goal == 'decrease') {
    var dailyAllowances = [
    decreaseAllDays = {
      "dayType"   : "all",
      "calories"  : dailyDecreaseCaloriesForAllDays,
      "protein"   : dailyDecreaseProteinForAllDays,
      "carbs"     : dailyDecreaseCarbsForAllDays,
      "fats"      : dailyDecreaseFatForAllDays
    }
    ];
    for (var i = 0; i < dailyAllowances.length; i++) {
    renderDailyAllowanceCards(dailyAllowances[i].dayType, 
    dailyAllowances[i].calories, 
    dailyAllowances[i].protein, 
    dailyAllowances[i].carbs, 
    dailyAllowances[i].fats);
  };
  // decrease object
  console.log("I'm the dailyDecreaseProteinForAllDays var: ", dailyDecreaseProteinForAllDays);
  console.log("I'm the dailyDecreaseProteinForAllDays times .08: ", (dailyDecreaseProteinForAllDays * .08));
  var decreaseMeals = [
    meal1 = {
      "name"      : "Breakfast 1 (Immediately Upon Waking)",
      "calories"  : "flex",
      "protein"   : (dailyDecreaseProteinForAllDays * .08).toFixed(),
      "carbs"     : (dailyDecreaseCarbsForAllDays * .08).toFixed(),
      "fats"      : (dailyDecreaseFatForAllDays * .17).toFixed(),
      "items"     : [
        {
          "name"      : "Whole eggs",
          "quantity"  : "3 large",
          "proteins"  : 18,
          "carbs"     : 0,
          "fats"      : 5
        },
        {
          "name"      : "Egg whites",
          "quantity"  : "3 large",
          "proteins"  : 11,
          "carbs"     : 1,
          "fats"      : 0
        },
        {
          "name"      : "Cooked oatmeal",
          "quantity"  : "1 cup",
          "proteins"  : 6,
          "carbs"     : 28,
          "fats"      : 4
        },
        {
          "name"      : "Honey",
          "quantity"  : "1 Tbs",
          "proteins"  : 0,
          "carbs"     : 17,
          "fats"      : 0
        },
        {
          "name"      : "Grapefruit",
          "quantity"  : "1/2 large",
          "proteins"  : 0,
          "carbs"     : 6,
          "fats"      : 0
        },
      ]
    },
    meal2 = {
      "name"      : "Breakfast 2 (30-60 Minutes After Breakfast 1)",
      "calories"  : "flex",
      "protein"   : (dailyDecreaseProteinForAllDays * .13).toFixed(),
      "carbs"     : (dailyDecreaseCarbsForAllDays * .23).toFixed(),
      "fats"      : (dailyDecreaseFatForAllDays * .33).toFixed()
    },
    meal3 = {
      "name"      : "Late Morning Snack",
      "calories"  : "flex",
      "protein"   : (dailyDecreaseProteinForAllDays * .11).toFixed(),
      "carbs"     : (dailyDecreaseCarbsForAllDays * .16).toFixed(),
      "fats"      : (dailyDecreaseFatForAllDays * .05).toFixed()
    },
    meal4 = {
      "name"      : "Lunch",
      "calories"  : "flex",
      "protein"   : (dailyDecreaseProteinForAllDays * .06).toFixed(),
      "carbs"     : (dailyDecreaseCarbsForAllDays * .21).toFixed(),
      "fats"      : (dailyDecreaseFatForAllDays * .13).toFixed()
    },
    meal5 = {
      "name"      : "Afternoon Snack",
      "calories"  : "flex",
      "protein"   : (dailyDecreaseProteinForAllDays * .37).toFixed(),
      "carbs"     : (dailyDecreaseCarbsForAllDays * .14).toFixed(),
      "fats"      : (dailyDecreaseFatForAllDays * .45).toFixed()
    },
    meal6 = {
      "name"      : "Pre-Workout (Within 30 Minutes Before Workouts)",
      "calories"  : "flex",
      "protein"   : (dailyDecreaseProteinForAllDays * .08).toFixed(),
      "carbs"     : (dailyDecreaseCarbsForAllDays * .08).toFixed(),
      "fats"      : (dailyDecreaseFatForAllDays * .03).toFixed()
    },
    meal7 = {
      "name"      : "Post-Workout (Within 30 Minutes After Workouts)",
      "calories"  : "flex",
      "protein"   : (dailyDecreaseProteinForAllDays * .08).toFixed(),
      "carbs"     : (dailyDecreaseCarbsForAllDays * .08).toFixed(),
      "fats"      : (dailyDecreaseFatForAllDays * .17).toFixed()
    },
    meal8 = {
      "name"      : "Dinner",
      "calories"  : "flex",
      "protein"   : (dailyDecreaseProteinForAllDays * .19).toFixed(),
      "carbs"     : (dailyDecreaseCarbsForAllDays * .02).toFixed(),
      "fats"      : (dailyDecreaseFatForAllDays * .13).toFixed()
    },
    meal9 = {
      "name"      : "Before Bed Snack",
      "calories"  : "flex",
      "protein"   : (dailyDecreaseProteinForAllDays * .08).toFixed(),
      "carbs"     : (dailyDecreaseCarbsForAllDays * .02).toFixed(),
      "fats"      : (dailyDecreaseFatForAllDays * .08).toFixed()
    }
  ];
  for (var i = 0; i < decreaseMeals.length; i++) {
  renderMealCards(decreaseMeals[i].name, decreaseMeals[i].calories, decreaseMeals[i].protein, decreaseMeals[i].carbs, decreaseMeals[i].fats);
  };
  }

// show weight
    if (goal == 'increase') {
      var weightString = "You weigh " + weight + " pounds."
      $("#weight").append(weightString); 
    }
    if (goal == 'decrease') {
      var weightString = "You weigh " + weight + " pounds."
      $("#weight").append(weightString); 
    }
}

function getDayOfWeek() {
    var increaseWorkoutDays = ["Monday", "Tuesday", "Thursday", "Friday"],
        weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayOfWeek = weekday[new Date().getDay()],
        workoutDayMessage = ("<span class='workoutMessage2'> It's a rest day.</span>"),
        whichDayMessage = "<span class='typeOfDay'>Today is " + dayOfWeek + ".</span>";
    $("#today").append(whichDayMessage);
    for (var i = 0; i < increaseWorkoutDays.length; i++) {
      if (dayOfWeek == increaseWorkoutDays[i]) {
        workoutDayMessage =("<span class='workoutMessage2'> It's a workout day.</span>");
      }
    };

    $("#today").append(workoutDayMessage);
}

function showAudioReminder() {
    // play sound
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
}

function showVideoReminder() {
    $("#monolog").css("display", "block");
    $("#videoAlert").css("display", "block");
    // play sound
    var video = document.getElementsByTagName("video")[0];
    video.play();
}



function checkTime() {
    // SETTINGS
    /* Set alert Hours in 24hr Notation ie. the 12 in 12:00 */
    var alertHour=[8, 9, 12, 14, 16, 17, 18, 21, 22];
    /* Set alert Minutes in 24hr Notation ie. the 00 in 12:00 */
    var alertMinute=[0, 0, 0, 0, 0, 0, 0, 48, 0]; 
    /* Set alert Messages */

    var alertMessages=["Breakfast 1", "Breakfast 2", "Late morning snack", "Lunch", "Afternoon snack", "Pre-Workout", "Post-Workout", "Dinner", "Before bed snack"];
    // check to see what?
    // if nowsDateStamp
    // Now's date stamp. The keyword "new" creates Date() as an object.
    //.length counts how many elements are in the array
    for (i = 0; i < alertHour.length; i++) {
        // for each item in the alertHour array check to see if nowsDateStamp is equal to alertHour
        // getHours returns nowsDatestamp's first 2 digits
        // if nowsDateStamp's first 2 digits are eqal to alertHour AND nowsDateStamp's last 2 digits are equal to alertMinute then
        var nowsDateStamp = new Date();
        var dateStampHours = nowsDateStamp.getHours();
        var dateStampMinutes = nowsDateStamp.getMinutes();
        // if it's time for an alert
        if (dateStampHours == alertHour[i] && dateStampMinutes == alertMinute[i]) {
            if (wantsAudio == true) {
                showAudioReminder();
            }
            if (wantsVideo == true) {
                showVideoReminder();
            }
            var ampm = dateStampHours >= 12 ? 'pm' : 'am';
            dateStampHours = dateStampHours % 12;
            dateStampHours = dateStampHours ? dateStampHours : 12; // the hour '0' should be '12'
            dateStampMinutes = dateStampMinutes < 10 ? '0'+dateStampMinutes : dateStampMinutes;

            var message = "It's " + dateStampHours + ':' + dateStampMinutes + ' ' + ampm + ". You need to eat " + alertMessages[i] + ".";

            $('#alert-container').fadeIn(function() {
              $('#alertMessage').html(message);
              alert("Pardon the intrusion. We just wanted to make sure you saw this.");
            });
        }
    }
}

// check every 60 seconds

function setAlerts() {
    var intervalFrequency = 60000; // how often
    var myInterval = 0;
    if(myInterval > 0) {
        // stop
        clearInterval(myInterval); 
    } else {
        // run
        checkTime();
        myInterval = setInterval( "checkTime()", intervalFrequency ); 
    }      
}

// function setDefaultMeal() {
//   meal1 = [<p>3 whole eggs</p>
//     <p>3 egg whites</p>
//     <p>1 cup cooked oatmeal</p>
//     <p>1 tbsp honey</p>
//     <p>1/2 large grapefruit</p> ];

// }


// code main function
function init() {
    // setPreferences returns an array called preferences = [days, goal, alertType, level]
    var preferences = setPreferences();
    var level = preferences[3],
        goal = preferences[1],
        weight = preferences[4],
        workoutWeeks = getWorkoutWeeks(goal);;
    showProgramOverview(level, goal, weight);

    getDayOfWeek();
    
    for (var contents in workoutWeeks) {
      console.log("the contents are ", contents,", and the values are ", workoutWeeks[contents]);
    }


    getLevel(workoutWeeks);
    bindEventListeners();
    setAlerts();
    $("#preferences-container").hide();
}

function renderNutritionFactsAPI() {
  // set up a search bar
  // clear current search results
  $('#search-results-container').html("");

  var searchItem = $("#foodSearch").val();
  $.get('https://api.nutritionix.com/v1_1/search/' + searchItem + '?fields=*&appId=fa29d9c4&appKey=0ba07a98eec4870860353ad5617c973e', 

    function(nutritionFacts) {
      var items = nutritionFacts.hits;
      console.log("these are the returned items: ", items);
      for (var i = 0; i < items.length; i++) {
        renderSearchResultsCards(items[i].fields.nf_serving_size_qty, items[i].fields.nf_serving_size_unit, items[i].fields.brand_name, items[i].fields.item_name, items[i].fields.item_id, items[i].fields.nf_calories, items[i].fields.nf_protein, items[i].fields.nf_total_carbohydrate, items[i].fields.nf_total_fat);
      };
  });
}



function saveToMeal(e) {
  var buttons = $(".saveToMealButton");

  buttons.click(function(e) {
    var thisButton = e.target;
    console.log("thisButton is: ", thisButton);
    // grab the value from the data-link attribute
    var theButtonsItemId = $(e.currentTarget).attr("id");
    var mealToAddTo = $(".mealToAddTo option:selected").val();
    console.log("the theButtonsItemId is ", theButtonsItemId);
    // getting the .html() from the .resultsContainer label
    var addedHtml = $(".nutritionInfo").html;
    console.log(addedHtml);

    // so now I need to get the id out of mealToAddTo...

    // Click the menu, all spans in all .foo, and paragraphs after headers
    var currentlySelectMealId = $(".mealToAddTo").attr("id");
    console.log("You clicked on ", thisButton, " which has an id of ", theButtonsItemId, ". You need to grab the preceding select value which we think is ", mealToAddTo, ".");
    console.log(currentlySelectMealId);
    // console.log(theButtonsItemId);
    console.log(thisButton);
    console.log(mealToAddTo);
    var itemSearchResult = renderItemIdNutritionFactsAPI(currentlySelectMealId, mealToAddTo);
    console.log(itemSearchResult);
  });
}

// function saveToMeal(e) {
//   $(".saveToMealButton").click(function(e) {
//     var mealToAddTo = $(e.target).parents(".mealToAddTo option:selected").val();
//     console.log(mealToAddTo);
//   });
// }

handleClickEvents();

// Weight gain nutritional needs
// Nonworkout Days: 18 calories per pound of bodyweight, 7 meals per day.
// This would be 18 * 165 = 2970

// Workout Days: 20 calories per pound of bodyweight, 9 meals per day -- including pre- and post-workout nutrition.
// This would be 20 * 165 = 3300

// food for building muscle
// Eggs - protein
// soy - protein
// pea - protein
// hemp seeds - protein
// a barrage of fresh fruits and vegetables
// legumes (beans, lentils, peas,)
// nuts - protein
// seeds - protein
// tempeh - protein
// tofo - protein
// soy beans - protein
// seitan - protein
// brown rice, 
// quinoa, 
// potatoes, 
// legumes, 
// beans,
// lentils, 
// nuts, 
// seeds, 
// nut butters,
// avocados
// Dark, leafy greens like spinach, kale, and collard greens - iron
// Dried peas - iron
// Beans and lentils - iron
// Artichokes - iron
// Dried fruit: raisins, prunes, and black currents - iron
// Spinach - calcium
// Collard greens - calcium
// Kale - calcium
// Broccoli - calcium
// Almonds - calcium
// Pumpkin seeds - zinc
// Sesame seeds - zinc
// Almonds, walnuts, or macadamia nuts - zinc
