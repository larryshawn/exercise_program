// Create a program to keep track of my schedule. When and what I eat. When and what to do that which is physical throughout the day.

// Here are some functions that need to start right away...
function handleClickEvents() {
  // If the settings icon gets clicked, slide the mask curtain down.
  $('.glyphicon-cog').click(function(e) {
    // the e.target is the event target. It means, "whichever DOM element was clicked referring to #settingsIcon"
    var mask = $(e.target).parent().children('#preferences-container');
    // var mask = $(e.target).children('.mask');
    // transform has a bunch of methods like 
    // translate(x-axis-in px) y-axis-in-px); - moves it around 
    // rotate(90deg) - rotates clockwise and counter clockwise
    // scale(0.1,14) - everything under 1 goes smaller
    // skewX(139deg) - top and bottom slant
    // skewY(-20deg) - sides slant
    // skew(25deg,186deg) - skews on x and y axis unless you only put one value in. In that case it functions just like a skewX()
    // matrix(scalex, rotate, scaley, translatex, translatey) - all at once
    mask.css('transform', 'translateY(-42px)');
    $("#amountOfDays").focus();
  })

  // If any close button gets clicked, slide the mask curtain up.
  $('.close-btn').click(function(e) {
    var mask = $("#preferences-container");
    mask.css('transform', 'translateY(-560px)');
  });
}



// function toggleSettings() {
//       // $("#preferences-container").toggle("fast");
//       $("#preferences-container").css("fast");
// }

// Here are the functions used listed in call order...

// 1. preferences.js
function setPreferences(days, goal, alertType, weight) {
    var days = "";
    var goal = "";
    var alertType = "";
    var weight = 0;

    days = $("#amountOfDays").val();
    goal = document.getElementById("goal").value;
    // goal = $("#goal").val();
    // gets the value of the alertTypeRadios
    alertType = $('input[name=alertTypeRadios]:radio:checked').val();
    // gets the value of the weight input field
    weight = parseInt(document.getElementById("currentWeight").value);
    // welcome and get how long the user has been on this schedule
    // var days = prompt("Hi. I'm here to guide you. How many days have you been on this schedule?");
    // determine which level they're on and store that in a variable
    // what level are you on?
    if (days <= 14) {
        level = 'beginner';
    }
    else if (days >= 15 && days <= 30) {
        level = "intermediate";
    }
    else {
        level = "advanced";
    }
    // find out what their goal is and store that in a variable
    // goal = prompt("You're a " + level + ". That's nice and stuff. So are you looking to increase or decrease your weight?");
    // if their goal is to increase weight do stuff
    if (goal == "increase") {
        // var alertType = prompt("Ok, we can do that. Would you like to receive an audio alert, video alert or both as a reminder?");
        goal = "increase";
    }
    else if (goal == "decrease") {
        // var alertType = prompt("Okay, we can shed those toxins! Would you like to receive an audio alert, video alert or both as a reminder?");
        goal = "decrease";
    }
    if (alertType == "audio") {
        // showAudioReminder();
        wantsAudio = true;
    }
    else if (alertType == "video") {
        // showVideoReminder();
        wantsVideo = true;
    }
    else if (alertType == "both") {
        // showAudioReminder();
        // showVideoReminder();
        wantsVideo = true;
        wantsAudio = true;
    }
    var preferences = [days, goal, alertType, level, weight];
    // alert(preferences);
    return preferences;
}

// 2-a. set workout

function setBeginnerIncreaseWorkout() {
  var abbreviatedDaysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var workouts = ["Chest & triceps", "Back & biceps", "Rest & relaxation", "Just Shoulders", "Just Legs", "Rest & relaxation", "Rest & relaxation"];
  for (var i = 0; i < abbreviatedDaysOfWeek.length; i++) {
    renderCalendarCard(abbreviatedDaysOfWeek[i], workouts[i]);
  }
}


// 2. programOverview.js
// show the program overview
function showProgramOverview(level, goal, weight) {
    if (level == 'beginner') {
        if (goal == 'increase') {
            // document.querySelector("#beginnerIncreaseWorkout").style.display = "block";
            $("#beginnerIncreaseWorkout").show();
            setBeginnerIncreaseWorkout();
        }
        else {
            // document.getElementById("beginnerDecreaseWorkout").style.display = "block";
            $("#beginnerDecreaseWorkout").show();
        }
    }
    else if (level == "intermediate") {
        if (goal == 'increase') {
            // document.getElementById("intermediateIncreaseWorkout").style.display = "block";
            $("#intermediateIncreaseWorkout").show();
        }
        else {
            // document.getElementById("intermediateDecreaseWorkout").style.display = "block";
            $("#intermediateDecreaseWorkout").show();

        }
    }
    else if (level == "advanced") {
        if (goal == 'increase') {
            // document.getElementById("advancedIncreaseWorkout").style.display = "block";
            $("#advancedIncreaseWorkout").show();
        }
        else {
            // document.getElementById("advancedDecreaseWorkout").style.display = "block";
            $("#advancedDecreaseWorkout").show();
        }
    }
    // Compute daily allowances
    var dailyIncreaseCaloriesOnRestDays = (18 * weight).toFixed();
    var dailyIncreaseProteinOnRestDays = (1.57 * weight).toFixed();
    var dailyIncreaseCarbsOnRestDays = (1.57 * weight).toFixed();
    var dailyIncreaseFatOnRestDays = (.6 * weight).toFixed();

    var dailyIncreaseCaloriesOnWorkoutDays = (20 * weight).toFixed();
    var dailyIncreaseProteinOnWorkoutDays = (1.57 * weight).toFixed();
    var dailyIncreaseCarbsOnWorkoutDays = (1.57 * weight).toFixed();
    var dailyIncreaseFatOnWorkoutDays = (.6 * weight).toFixed();

    var dailyDecreaseCaloriesForAllDays = (18 * weight).toFixed();
    var dailyDecreaseProteinForAllDays = (1.57 * weight).toFixed();
    var dailyDecreaseCarbsForAllDays = (1.57 * weight).toFixed();
    var dailyDecreaseFatForAllDays = (.6 * weight).toFixed();

    // Compute weight gain Meal 1 allowances
    var meal1IncreaseCalories = dailyIncreaseCaloriesOnRestDays * .06;
    var meal1IncreaseProtein = dailyIncreaseProteinOnRestDays * .08;
    var meal1IncreaseCarbs = dailyIncreaseCarbsOnRestDays * .08;
    var meal1IncreaseFat = dailyIncreaseFatOnRestDays * 1.19;

    // Compute weight gain Meal 2 allowances
    var meal2IncreaseCalories = dailyIncreaseCaloriesOnRestDays * .26;
    var meal2IncreaseProtein = dailyIncreaseProteinOnRestDays * .13;
    var meal2IncreaseCarbs = dailyIncreaseCarbsOnRestDays * .23;
    var meal2IncreaseFat = dailyIncreaseFatOnRestDays * .33;

   // Compute weight gain Meal 3 allowances
    var meal3IncreaseCalories = dailyIncreaseCaloriesOnRestDays * .13;
    var meal3IncreaseProtein = dailyIncreaseProteinOnRestDays * .11;
    var meal3IncreaseCarbs = dailyIncreaseCarbsOnRestDays * .16;
    var meal3IncreaseFat = dailyIncreaseFatOnRestDays * .05;

    // Compute weight gain Meal 4 allowances
    var meal4IncreaseCalories = dailyIncreaseCaloriesOnRestDays * .1;
    var meal4IncreaseProtein = dailyIncreaseProteinOnRestDays * .06;
    var meal4IncreaseCarbs = dailyIncreaseCarbsOnRestDays * .21;
    var meal4IncreaseFat = dailyIncreaseFatOnRestDays * .13;

    // Compute weight gain Meal 5 allowances
    var meal5IncreaseCalories = dailyIncreaseCaloriesOnRestDays * .11;
    var meal5IncreaseProtein = dailyIncreaseProteinOnRestDays * .37;
    var meal5IncreaseCarbs = dailyIncreaseCarbsOnRestDays * .14;
    var meal5IncreaseFat = dailyIncreaseFatOnRestDays * .45;

    // Compute weight gain Meal 6 preworkout allowances
    var meal6IncreaseCalories = dailyIncreaseCaloriesOnRestDays * .06;
    var meal6IncreaseProtein = dailyIncreaseProteinOnRestDays * .08;
    var meal6IncreaseCarbs = dailyIncreaseCarbsOnRestDays * .08;
    var meal6IncreaseFat = dailyIncreaseFatOnRestDays * .03;

    // Compute weight gain Meal 7 postworkout allowances
    var meal7IncreaseCalories = dailyIncreaseCaloriesOnRestDays * .06;
    var meal7IncreaseProtein = dailyIncreaseProteinOnRestDays * .14;
    var meal7IncreaseCarbs = dailyIncreaseCarbsOnRestDays * .02;
    var meal7IncreaseFat = dailyIncreaseFatOnRestDays * .02;

    // Compute weight gain Meal 8 allowances
    var meal8IncreaseCalories = dailyIncreaseCaloriesOnRestDays * .14;
    var meal8IncreaseProtein = dailyIncreaseProteinOnRestDays * .19;
    var meal8IncreaseCarbs = dailyIncreaseCarbsOnRestDays * .02;
    var meal8IncreaseFat = dailyIncreaseFatOnRestDays * 3.13;

    // Compute weight gain Meal 9 allowances
    var meal9IncreaseCalories = dailyIncreaseCaloriesOnRestDays * .05;
    var meal9IncreaseProtein = dailyIncreaseProteinOnRestDays * .08;
    var meal9IncreaseCarbs = dailyIncreaseCarbsOnRestDays * .02;
    var meal9IncreaseFat = dailyIncreaseFatOnRestDays * .08;

    // increase and decrease bigger object
    var increaseMeals = [
      meal1 = {
        "meals"     : "Breakfast 1 (Immediately Upon Waking)",
        "calories"  : (dailyIncreaseCaloriesOnRestDays * .06).toFixed(),
        "protein"   : (dailyIncreaseProteinOnRestDays * .08).toFixed(),
        "carbs"     : (dailyIncreaseCarbsOnRestDays * .08).toFixed(),
        "fats"      : (dailyIncreaseFatOnRestDays * 1.19).toFixed()
      },
      meal2 = {
        "meals"     : "Breakfast 2 (30-60 Minutes After Breakfast 1)",
        "calories"  : (dailyIncreaseCaloriesOnRestDays * .26).toFixed(),
        "protein"   : (dailyIncreaseProteinOnRestDays * .13).toFixed(),
        "carbs"     : (dailyIncreaseCarbsOnRestDays * .23).toFixed(),
        "fats"      : (dailyIncreaseFatOnRestDays * 33).toFixed()
      },
      meal3 = {
        "meals"     :"Late Morning Snack",
        "calories"  : (dailyIncreaseCaloriesOnRestDays * .13).toFixed(),
        "protein"   : (dailyIncreaseProteinOnRestDays * .11).toFixed(),
        "carbs"     : (dailyIncreaseCarbsOnRestDays * .16).toFixed(),
        "fats"      : (dailyIncreaseFatOnRestDays * .05).toFixed()
      },
      meal4 = {
        "meals"     : "Lunch",
        "calories"  : (dailyIncreaseCaloriesOnRestDays * .1).toFixed(),
        "protein"   : (dailyIncreaseProteinOnRestDays * .06).toFixed(),
        "carbs"     : (dailyIncreaseCarbsOnRestDays * .21).toFixed(),
        "fats"      : (dailyIncreaseFatOnRestDays * .13).toFixed()
      },
      meal5 = {
        "meals"     : "Afternoon Snack",
        "calories"  : (dailyIncreaseCaloriesOnRestDays * .11).toFixed(),
        "protein"   : (dailyIncreaseProteinOnRestDays * .37).toFixed(),
        "carbs"     : (dailyIncreaseCarbsOnRestDays * .14).toFixed(),
        "fats"      : (dailyIncreaseFatOnRestDays * .45).toFixed()
      },
      meal6 = {
        "meals"     : "Pre-Workout (Within 30 Minutes Before Workouts)",
        "calories"  : (dailyIncreaseCaloriesOnRestDays * .06).toFixed(),
        "protein"   : (dailyIncreaseProteinOnRestDays * .08).toFixed(),
        "carbs"     : (dailyIncreaseCarbsOnRestDays * .08).toFixed(),
        "fats"      : (dailyIncreaseFatOnRestDays * .03).toFixed()
      },
      meal7 = {
        "meals"     : "Post-Workout (Within 30 Minutes After Workouts)",
        "calories"  : (dailyIncreaseCaloriesOnRestDays * .06).toFixed(),
        "protein"   : (dailyIncreaseProteinOnRestDays * .08).toFixed(),
        "carbs"     : (dailyIncreaseCarbsOnRestDays * .08).toFixed(),
        "fats"      : (dailyIncreaseFatOnRestDays * 1.19).toFixed()
      },
      meal8 = {
        "meals"     : "Dinner",
        "calories"  : (dailyIncreaseCaloriesOnRestDays * .14).toFixed(),
        "protein"   : (dailyIncreaseProteinOnRestDays * .19).toFixed(),
        "carbs"     : (dailyIncreaseCarbsOnRestDays * .02).toFixed(),
        "fats"      : (dailyIncreaseFatOnRestDays * 3.13).toFixed()
      },
      meal9 = {
        "meals"     : "Before Bed Snack",
        "calories"  : (dailyIncreaseCaloriesOnRestDays * .05).toFixed(),
        "protein"   : (dailyIncreaseProteinOnRestDays * .08).toFixed(),
        "carbs"     : (dailyIncreaseCarbsOnRestDays * .02).toFixed(),
        "fats"      : (dailyIncreaseFatOnRestDays * .08).toFixed()
      }
    ];
    for (var i = 0; i < increaseMeals.length; i++) {
    renderMealsCard(increaseMeals[i].meals, increaseMeals[i].calories, increaseMeals[i].protein, increaseMeals[i].carbs, increaseMeals[i].fats);
    };

    if (goal == 'increase') {
        document.getElementById("workoutOverviewForStats").innerHTML = 
        "You weigh " + weight + "lbs.<br>Today you need to eat:" + 
         "<br>calories: " + dailyIncreaseCaloriesOnRestDays +
         "<br>protein: " + dailyIncreaseProteinOnRestDays +
         "<br>carbs: " + dailyIncreaseCarbsOnRestDays +
         "<br>fat: " + dailyIncreaseFatOnRestDays + 
         "<br><br>On your workout days you need to eat:" + 
         "<br>calories: " + dailyIncreaseCaloriesOnWorkoutDays +
         "<br>protein: " + dailyIncreaseProteinOnWorkoutDays +
         "<br>carbs: " + dailyIncreaseCarbsOnWorkoutDays +
         "<br>fat: " + dailyIncreaseFatOnWorkoutDays;
         // renderWorkoutOverviewCard(weight, dailyIncreaseCaloriesOnRestDays, dailyIncreaseProteinOnRestDays, dailyIncreaseFatOnRestDays, dailyIncreaseCaloriesOnWorkoutDays, dailyIncreaseProteinOnWorkoutDays, dailyIncreaseCarbsOnWorkoutDays, dailyIncreaseFatOnWorkoutDays);
     }
     if (goal == 'decrease') {
        document.getElementById("workoutOverviewForStats").innerHTML = 
        "You weigh " + weight + ".<br>For both workout days and rest days you need to eat:" + 
         "<br>calories: " + dailyDecreaseCaloriesForAllDays +
         "<br>protein: " + dailyDecreaseProteinForAllDays +
         "<br>carbs: " + dailyDecreaseCarbsForAllDays +
         "<br>fat: " + dailyDecreaseFatForAllDays;
     }

     function computeWeightGainForBreakfast1() {
        var dailyCalories = 3700;
        var dailyProtein = 335;
      }
}

function getDayOfWeek() {
    var todaysDate = new Date();
    var beginnerIncreaseWorkoutDays = ["Monday", "Tuesday", "Thursday", "Friday"];
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dayOfWeek = weekday[todaysDate.getDay()];
    var workoutDayMessage = "";
    document.getElementById("today").innerHTML = "<h3 class='typeOfDay'>Today is " + dayOfWeek + ".</h3>";

    for (var i = 0; i < beginnerIncreaseWorkoutDays.length; i++) {
      if (dayOfWeek == beginnerIncreaseWorkoutDays[i]) {
        workoutDayMessage =(" It's a workout day.<br><a href=''>View workout</a>");
        break;
      }
      else {
        workoutDayMessage = (" It's a rest day.");
      }
    };
    $(".typeOfDay").append(workoutDayMessage);
}

// function determineWorkoutDay {
//     // if today's date is a workout day
//     // say hey, you have a workout today
//     // show today's workout and food schedules 
//     // else say no workout today but here's your food schedule
// }

function showAudioReminder() {
    // play sound
    var audio = document.getElementsByTagName("audio")[0];
    audio.play();
}

function showVideoReminder() {
    document.getElementById("monolog").style.display = "block";
    document.getElementById("videoAlert").style.display = "block";
    // play sound
    var video = document.getElementsByTagName("video")[0];
    video.play();
}

function checkTime() {
    // SETTINGS
    /* Set alert Hours in 24hr Notation ie. the 12 in 12:00 */
    var alertHour=[17, 17, 17];
    /* Set alert Minutes in 24hr Notation ie. the 00 in 12:00 */
    var alertMinute=[0, 30, 59]; 
    /* Set alert Messages */
    var alertMessages=["Breakfast", "Lunch", "Dinner!"];
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
            alert("The time is" + dateStampHours + ":" + dateStampMinutes + ". You need to eat " + alertMessages[i] + ".");
        }
    }
}

        
// how often should I check to see if nowsTime is the same as the set time? 
// check every 60 seconds

// 
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


// code main function
function mainFunction() {
    // setPreferences returns an array called preferences = [days, goal, alertType, level]
    var preferences = setPreferences();
    showProgramOverview(preferences[3], preferences[1], preferences[4]);
    getDayOfWeek();
    setAlerts();
    $("#preferences-container").hide();
    // showWorkout(); // todo
    // showMeals(); // todo
}

// not needed but a cool function
// function convertGramsToCups(grams) {
//      if (grams*236.5882375 != 0) {
//         var cups = grams/236.5882375;
//         alert("your " + grams + " grams is equal to " + cups.toFixed() + " cups.");
//      }
// }

// What do I want to do?
// I want to know how much protein, carbs and calories each food item on my approved list contains. With that information I would like to compose a meal of foods that match up to my protein, complex carbs and calories
// I would like to display certain nutritional facts for certain foods that I would eat while on my whole foods fitness routine.
function renderNutritionFactsAPI() {
    // set up a search bar
    var searchItem = $("#foodSearch").val();
https://nutritionix.com/v1_1/search/
  $.get('https://api.nutritionix.com/v1_1/search/' + searchItem + '?fields=*&appId=fa29d9c4&appKey=0ba07a98eec4870860353ad5617c973e', function(nutritionFacts) {
      // console.log("food item: " + nutritionFacts.hits[0].fields.item_name + "\n calories: " + nutritionFacts.hits[0].fields.nf_calories + "\n protein: " + nutritionFacts.hits[0].fields.nf_protein + "\n carbs: " + nutritionFacts.hits[0].fields.nf_total_carbohydrate + "\n serving size: " + nutritionFacts.hits[0].fields.nf_serving_size_qty + " " + nutritionFacts.hits[0].fields.nf_serving_size_unit);
      // I can't get the following to work
      limit: 50
      var items = nutritionFacts.hits;
      console.log(items);

      for (var i = 0; i < items.length; i++) {
        renderNewCard(items[i].fields.brand_name, items[i].fields.item_name, items[i].fields.nf_calories, items[i].fields.nf_protein, items[i].fields.nf_total_carbohydrate, items[i].fields.nf_total_fat);
    };

// I could have used this...
     // document.getElementById("btnAddToMenu").style.display = "block";
     $("#btnAddToMenu").show();
});
}

handleClickEvents();

// tick each food item that you have available?


// function computeCalories() {
//     var weight = 0;
//     var weightGainCaloriesWorkoutDay = 0;
//     var weightGainCaloriesNonWorkoutDay = 0;
//     var weightLossCalories = 0;

//     weight = $("#currentWeight").val();
//     if (goal == 'increase') {

//     weightGainCaloriesWorkoutDay = weight * 20;
//     weightGainCaloriesNonWorkoutDay = weight * 18;
//     weightLossCalories = weight * 

// }

// Weight gain nutritional needs
// Nonworkout Days: 18 calories per pound of bodyweight, 7 meals per day.
// This would be 18 * 165 = 2970

// Workout Days: 20 calories per pound of bodyweight, 9 meals per day -- including pre- and post-workout nutrition.
// This would be 20 * 165 = 3300

   // function backward() {
   //    with (document.convert) {
   //   unit2.value = unit2.value.toString().replace(/[^\d\.eE-]/g,'');
   //   if (unit2.value/236.5882375 != 0) {
   //      unit1.value = unit2.value/236.5882375;
   //   }
   //    }
   // }
        // tell me what to eat
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

        // weight gain meal plan: http://www.bodybuilding.com/fun/power-plants-ultimate-vegetarian-menu.html

        // Weight gain menu: http://www.bodybuilding.com/fun/shortcut-to-size-nutrition.html
        
        // Breakfast 1 (Immediately Upon Waking)
        // Breakfast 2 (30-60 Minutes After Breakfast 1)
        // Late Morning Snack
        // Lunch
        // Afternoon Snack
        // Pre-Workout (Within 30 Minutes Before Workouts)
        // Post-Workout (Within 30 Minutes After Workouts)
        // Dinner
        // Before Bed Snack

        // greetings
            // Good morning
            // Good afternoon
            // Good evening
            // Good night 
        // tell me when to do a physical activity
        // tell me which physical activity to do
        // tell me when to eat
        // tell me what to eat