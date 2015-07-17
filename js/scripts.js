// Create a program to keep track of my schedule. When and what I eat. When and what to do that which is physical throughout the day.

// Here are the functions used listed in call order...

// 1. 
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
// 2.
// show the program overview
function showProgramOverview(level, goal, weight) {
    if (level == 'beginner') {
        if (goal == 'increase') {
            document.querySelector("#beginnerIncreaseWorkout").style.display = "block";
        }
        else {
            document.getElementById("beginnerDecreaseWorkout").style.display = "block";
        }
    }
    else if (level == "intermediate") {
        if (goal == 'increase') {
            document.getElementById("intermediateIncreaseWorkout").style.display = "block";
        }
        else {
            document.getElementById("intermediateDecreaseWorkout").style.display = "block";
        }
    }
    else if (level == "advanced") {
        if (goal == 'increase') {
            document.getElementById("advancedIncreaseWorkout").style.display = "block";
        }
        else {
            document.getElementById("advancedDecreaseWorkout").style.display = "block";
        }
    }
    if (goal == 'increase') {
        document.getElementById("workoutOverviewForStats").innerHTML = 
        "You weigh " + weight + ".<br>On your rest days you need to eat:" + 
         "<br>calories: " + (18 * weight).toFixed() +
         "<br>protein: " + (1.57 * weight).toFixed() +
         "<br>carbs: " + (1.57 * weight).toFixed() +
         "<br>fat: " + (.6 * weight).toFixed() + 
         "<br><br>On your workout days you need to eat:" + 
         "<br>calories: " + (20 * weight).toFixed() +
         "<br>protein: " + (1.75 * weight).toFixed() +
         "<br>carbs: " + (1.75 * weight).toFixed() +
         "<br>fat: " + (.6 * weight).toFixed();
     }
     if (goal == 'decrease') {
        document.getElementById("workoutOverviewForStats").innerHTML = 
        "You weigh " + weight + ".<br>For both workout days and rest days you need to eat:" + 
         "<br>calories: " + (18 * weight).toFixed() +
         "<br>protein: " + (1.5 * weight).toFixed() +
         "<br>carbs: " + (1.5 * weight).toFixed() +
         "<br>fat: " + (.5 * weight).toFixed();
     }
}

function getDayOfWeek() {
    var todaysDate = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var dayOfWeek = weekday[todaysDate.getDay()];
    document.getElementById("today").innerHTML = "<br>Today is " + dayOfWeek + ".";
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

  $.get('https://api.nutritionix.com/v1_1/search/' + searchItem + '?fields=*&appId=fa29d9c4&appKey=0ba07a98eec4870860353ad5617c973e', function(nutritionFacts) {
      // console.log("food item: " + nutritionFacts.hits[0].fields.item_name + "\n calories: " + nutritionFacts.hits[0].fields.nf_calories + "\n protein: " + nutritionFacts.hits[0].fields.nf_protein + "\n carbs: " + nutritionFacts.hits[0].fields.nf_total_carbohydrate + "\n serving size: " + nutritionFacts.hits[0].fields.nf_serving_size_qty + " " + nutritionFacts.hits[0].fields.nf_serving_size_unit);
      // I can't get the following to work
      limit: 50
      var items = nutritionFacts.hits;
      console.log(items);

      for (var i = 0; i < items.length; i++) {
        document.getElementById("searchResults").innerHTML += 
        "<div class='resultContainer'><label><input type='checkbox' id='group" + i +"' name='group" + i +"'></span><div class='item'>" + items[i].fields.brand_name + " " + items[i].fields.item_name + "</div><div class='calories'>calories: " + items[i].fields.nf_calories + "</div><div class='protein'>protein: " + items[i].fields.nf_protein + "</div><div class='carbs'>carbs: " + items[i].fields.nf_total_carbohydrate + "</div><span class='servingSize'>serving size: " + items[i].fields.nf_serving_size_qty + " " + items[i].fields.nf_serving_size_unit + "</span><div class='fat'>fat: " + items[i].fields.nf_total_fat + "</label></div>";
    };
     document.getElementById("btnAddToMenu").style.display = "block";

});
}

// tick each food item that you have available?



// function renderNutritionFactsForMultipleProductsAPI() {
//   $.getJSON('https://api.nutritionix.com/v1_1/search', function(nutritionFacts) {
//       appId: "fa29d9c4",
//       appKey: "0ba07a98eec4870860353ad5617c973e",
//       fields: [
//         "item_name",
//         "brand_name",
//         "nf_calories",
//         "nf_protein",
//         "nf_total_carbohydrate",
//         "nf_serving_size_qty",
//         "nf_serving_size_unit"
//       ],
//       offset: 0,
//       limit: 50,
//       sort: {
//         field: "nf_protein",
//         order: "desc"
//       },
//       min_score: 0.5,
//       query: "sprouts OR alfalfa",
//       filters: {
//         not: {
//           item_type: 2
//         },
//         nf_calories: {
//           from: 0,
//           to: 400
//         }
//       }
//     }
//       });
// }

// function curlTest() {
//     curl -XPOST https://api.nutritionix.com/v1_1/search -H 'Content-Type: application/json' -d'
//     {
//      "appId":"YOUR_API_ID",
//      "appKey":"YOUR_API_KEY",
//      "query":"Cookies `n Cream"
//     }
// }

// function renderCurl() {
//   $.getJSON('https://api.nutritionix.com/v1_1/search', {
//      appId:"fa29d9c4",
//      appKey:"0ba07a98eec4870860353ad5617c973e",
//      query:"alfalfa AND sprouts",
//      fields:["item_name","brand_name","upc"],
//   sort:{
//     field:"_score",
//     order:"desc"
//   },
//   filters:{
//     item_type:2
//   }
//     }, processCurlData);
// }


// renderNutritionFactsForMultipleProductsAPI()
// renderCurl();


// renderNutritionFactsAPI();
// renderPostsApi();

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