// Create a program to keep track of my schedule. When and what I eat. When and what to do that which is physical throughout the day.

// Here are some functions that need to start right away...
function handleClickEvents() {
  // If the settings icon gets clicked, slide the mask curtain down.
  $('.glyphicon-cog').click(function(e) {
    // the e.target is the event target. It means, "whichever DOM element was clicked referring to #settingsIcon"
    var mask = $(e.target).parent().next('#preferences-container');
    console.log(mask);
    // transform has a bunch of methods like 
    // translate(x-axis-in px) y-axis-in-px); - moves it around 
    // rotate(90deg) - rotates clockwise and counter clockwise
    // scale(0.1,14) - everything under 1 goes smaller
    // skewX(139deg) - top and bottom slant
    // skewY(-20deg) - sides slant
    // skew(25deg,186deg) - skews on x and y axis unless you only put one value in. In that case it functions just like a skewX()
    // matrix(scalex, rotate, scaley, translatex, translatey) - all at once
    mask.css('transform', 'translateY(-48px)');
    $("#amountOfDays").focus();
  });

  // If any close button gets clicked, slide the mask curtain up.
  $('.close-btn').click(function(e) {
    var mask = $("#preferences-container");
    mask.css('transform', 'translateY(-514px)');
  });
}

// just playing with .blur... it fires whenever something loses focus either by tabbing away from an element or selecting something else on the page. Remember to call the function at the bottom of the page.
function handleBlurEvents() {
  $("[type=radio]").blur(function(e) {
    // console.log("Dang! Something just lost focus. It was probably a radio button.");
  });
}



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
    if (days <= 7) {
        level = 'week1';
    }
    else if (days >= 8 && days <= 14) {
        level = "week2";
    }
    else if (days >= 15 && days <= 21) {
        level = "week3";
    }
    else if (days >= 22 && days <= 28) {
        level = "week3";
    }
    else if (days >= 29 && days <= 35) {
        level = "week4";
    }
    else if (days >= 36 && days <= 42) {
        level = "week5";
    }
    else if (days >= 43 && days <= 49) {
        level = "week6";
    }
    else if (days >= 50 && days <= 56) {
        level = "week7";
    }
    else if (days >= 57 && days <= 63) {
        level = "week8";
    }
    else if (days >= 64 && days <= 70) {
        level = "week9";
    }
    else if (days >= 71 && days <= 77) {
        level = "week10";
    }
    else if (days >= 78 && days <= 84) {
        level = "week11";
    }
    else if (days >= 85 && days <= 91) {
        level = "week12";
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
    var rawTemplate = $('#calendar-template').html();
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
    $('.daysOfWeekCardContainer').append(renderedText);
}

// 2-a. set workout

function setIncreaseWorkout() {
// JSON data lives here.
  var workoutWeeks = {
    'week1': [
    {
      day       : '1',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-1-day-1.html"
    },
    {
      day       : '2',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-1-day-2.html"
    },
    {
      day       : '3',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-1-day-3.html"
    },
    {
      day       : '4',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-1-day-4.html"
    },
    {
      day       : '5',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-1-day-5.html"
    },
    {
      day       : '6',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-1-day-6.html"
    },
    {
      day       : '7',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-1-day-7.html"
    }
  ],
  'week2': [
    {
      day       : '8',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-2-day-8.html"
    },
    {
      day       : '9',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-2-day-9.html"
    },
    {
      day       : '10',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-2-day-10.html"
    },
    {
      day       : '11',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-2-day-11.html"
    },
    {
      day       : '12',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-2-day-12.html"
    },
    {
      day       : '13',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-2-day-13.html"
    },
    {
      day       : '14',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-2-day-14.html"
    }
  ],
  'week3': [
    {
      day       : '15',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-3-day-15.html"
    },
    {
      day       : '16',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-3-day-16.html"
    },
    {
      day       : '17',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-3-day-17.html"
    },
    {
      day       : '18',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-3-day-18.html"
    },
    {
      day       : '19',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-3-day-19.html"
    },
    {
      day       : '20',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-3-day-20.html"
    },
    {
      day       : '21',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-3-day-21.html"
    }
  ],
  'week4': [
    {
      day       : '22',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-4-day-22.html"
    },
    {
      day       : '23',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-4-day-23.html"
    },
    {
      day       : '24',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-4-day-24.html"
    },
    {
      day       : '25',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-4-day-25.html"
    },
    {
      day       : '26',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-4-day-26.html"
    },
    {
      day       : '27',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-4-day-27.html"
    },
    {
      day       : '28',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-1-week-4-day-28.html"
    }
  ],
  'week5': [
    {
      day       : '29',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-5-day-29.html"
    },
    {
      day       : '30',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-5-day-30.html"
    },
    {
      day       : '31',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-5-day-31.html"
    },
    {
      day       : '32',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-5-day-32.html"
    },
    {
      day       : '33',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-5-day-33.html"
    },
    {
      day       : '34',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-5-day-34.html"
    },
    {
      day       : '35',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-5-day-35.html"
    }
  ],
  'week6': [
    {
      day       : '36',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-6-day-36.html"
    },
    {
      day       : '37',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-6-day-37.html"
    },
    {
      day       : '38',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-6-day-38.html"
    },
    {
      day       : '39',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-6-day-39.html"
    },
    {
      day       : '40',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-6-day-40.html"
    },
    {
      day       : '41',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-6-day-41.html"
    },
    {
      day       : '42',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-6-day-42.html"
    }
  ],
  'week7': [
    {
      day       : '43',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-7-day-43.html"
    },
    {
      day       : '44',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-7-day-44.html"
    },
    {
      day       : '45',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-7-day-45.html"
    },
    {
      day       : '46',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-7-day-46.html"
    },
    {
      day       : '47',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-7-day-47.html"
    },
    {
      day       : '48',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-7-day-48.html"
    },
    {
      day       : '49',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-7-day-49.html"
    }
  ],
  'week8': [
    {
      day       : '50',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-8-day-50.html"
    },
    {
      day       : '51',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-8-day-51.html"
    },
    {
      day       : '52',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-8-day-52.html"
    },
    {
      day       : '53',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-8-day-53.html"
    },
    {
      day       : '54',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-8-day-54.html"
    },
    {
      day       : '55',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-8-day-55.html"
    },
    {
      day       : '56',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-2-week-8-day-56.html"
    }
  ],
  'week9': [
    {
      day       : '57',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-9-day-57.html"
    },
    {
      day       : '58',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-9-day-58.html"
    },
    {
      day       : '59',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-9-day-59.html"
    },
    {
      day       : '60',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-9-day-60.html"
    },
    {
      day       : '61',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-9-day-61.html"
    },
    {
      day       : '62',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-9-day-62.html"
    },
    {
      day       : '63',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-9-day-63.html"
    }
  ],
  'week10': [
    {
      day       : '64',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-10-day-64.html"
    },
    {
      day       : '65',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-10-day-65.html"
    },
    {
      day       : '66',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-10-day-66.html"
    },
    {
      day       : '67',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-10-day-67.html"
    },
    {
      day       : '68',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-10-day-68.html"
    },
    {
      day       : '69',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-10-day-69.html"
    },
    {
      day       : '70',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-10-day-70.html"
    }
  ],
  'week11': [
    {
      day       : '71',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-11-day-71.html"
    },
    {
      day       : '72',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-11-day-72.html"
    },
    {
      day       : '73',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-11-day-73.html"
    },
    {
      day       : '74',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-11-day-74.html"
    },
    {
      day       : '75',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-11-day-75.html"
    },
    {
      day       : '76',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-11-day-76.html"
    },
    {
      day       : '77',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-11-day-77.html"
    }
  ],
  'week12': [
    {
      day       : '78',
      dayOfWeek : 'Monday',
      workout   : 'Chest, triceps & calves',
      id        : "chestTricepsAndCalves",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-12-day-78.html"
    },
    {
      day       : '79',
      dayOfWeek : 'Tuesday',
      workout   : 'Back & biceps',
      id        : "backAndBiceps",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-12-day-79.html"
    },
    {
      day       : '80',
      dayOfWeek : 'Wednesday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-12-day-80.html"
    },
    {
      day       : '81',
      dayOfWeek : 'Thursday',
      workout   : 'Shoulders, traps & calves',
      id        : "shoulders",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-12-day-81.html"
    },
    {
      day       : '82',
      dayOfWeek : 'Friday',
      workout   : 'Legs',
      id        : "legs",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-12-day-82.html"
    },
    {
      day       : '83',
      dayOfWeek : 'Saturday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-12-day-83.html"
    },
    {
      day       : '84',
      dayOfWeek : 'Sunday',
      workout   : 'Rest',
      id        : "rest",
      link      : "http://www.bodybuilding.com/fun/shortcut-to-size-phase-3-week-12-day-84.html"
    }
  ]
};

console.log(workoutWeeks);


  getLevel(workoutWeeks);
  
  bindEventListeners();
}

function bindEventListeners() {
        // console.log($(".daysOfWeekCard"));
    $(".daysOfWeekCard").click(function (e) {
        // body...
        // find out which card got clicked
        var targetId = e.currentTarget.id;
        // grab the link from an attribute
        var targetLink = $(e.currentTarget).attr("value");
        var rawTemplate = $('#lightbox-template').html();

        $( "#daysIframe" ).attr( "src", targetLink );
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
    if (level == 'week1') {
        if (goal == 'increase') {
            $("#overview-container").fadeIn();
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            $("#beginnerDecreaseWorkout").fadeIn();
        }
    }
    else if (level == "week2") {
        if (goal == 'increase') {
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            $("#intermediateDecreaseWorkout").fadeIn();

        }
    }
    else if (level == "week3") {
        if (goal == 'increase') {
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            $("#advancedDecreaseWorkout").fadeIn();
        }
    }
    else if (level == "week4") {
        if (goal == 'increase') {
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            $("#advancedDecreaseWorkout").fadeIn();
        }
    }
    else if (level == "week5") {
        if (goal == 'increase') {
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            $("#advancedDecreaseWorkout").fadeIn();
        }
    }
    else if (level == "week6") {
        if (goal == 'increase') {
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            $("#advancedDecreaseWorkout").fadeIn();
        }
    }
    else if (level == "week7") {
        if (goal == 'increase') {
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            $("#advancedDecreaseWorkout").fadeIn();
        }
    }
    else if (level == "week8") {
        if (goal == 'increase') {
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            $("#advancedDecreaseWorkout").fadeIn();
        }
    }
    else if (level == "week9") {
        if (goal == 'increase') {
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            $("#advancedDecreaseWorkout").fadeIn();
        }
    }
    else if (level == "week10") {
        if (goal == 'increase') {
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            // document.getElementById("advancedDecreaseWorkout").style.display = "block";
            $("#advancedDecreaseWorkout").fadeIn();
        }
    }
    else if (level == "week11") {
        if (goal == 'increase') {
            // document.getElementById("increaseWorkout").style.display = "block";
            $("#increaseWorkout").fadeIn();
            setIncreaseWorkout();
        }
        else {
            // document.getElementById("advancedDecreaseWorkout").style.display = "block";
            $("#advancedDecreaseWorkout").fadeIn();
        }
    }
    else if (level == "week12") {
        if (goal == 'increase') {
            // document.getElementById("increaseWorkout").style.display = "block";
            $("#increaseWorkout").show();
            setIncreaseWorkout();
        }
        else {
            // document.getElementById("advancedDecreaseWorkout").style.display = "block";
            $("#advancedDecreaseWorkout").show();
        }
    }

    // Compute increase daily allowances
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

    // daily allowance object
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
      }
    ];

    for (var i = 0; i < dailyAllowances.length; i++) {
      renderDailyAllowances(dailyAllowances[i].dayType, dailyAllowances[i].calories, dailyAllowances[i].protein, dailyAllowances[i].carbs, dailyAllowances[i].fats);
    };

    // increase object
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
        "fats"      : (dailyIncreaseFatOnRestDays * .33).toFixed()
      },
      meal3 = {
        "meals"     : "Late Morning Snack",
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
      var weightString = "You weigh " + weight + " pounds."
      $("#weight").append(weightString); 
    }
    if (goal == 'decrease') {
      document.getElementById("workoutOverviewForStats").innerHTML = 
      "You weigh " + weight + 
      ".<br>For both workout days and rest days you need to eat:" + 
      "<br>calories: " + dailyDecreaseCaloriesForAllDays +
      "<br>protein: " + dailyDecreaseProteinForAllDays +
      "<br>carbs: " + dailyDecreaseCarbsForAllDays +
      "<br>fat: " + dailyDecreaseFatForAllDays;
    }
}

function getDayOfWeek() {
    var todaysDate = new Date();
    var increaseWorkoutDays = ["Monday", "Tuesday", "Thursday", "Friday"];
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dayOfWeek = weekday[todaysDate.getDay()];
    var workoutDayMessage = "";
    var whichDayMessage = "<span class='typeOfDay'>Today is " + dayOfWeek + ".</span>";
    $("#today").append(whichDayMessage);

    for (var i = 0; i < increaseWorkoutDays.length; i++) {
      if (dayOfWeek == increaseWorkoutDays[i]) {
        workoutDayMessage =("<span class='workoutMessage2'> It's a workout day. <a href=''>View workout</a></span>");
        break;
      }
      else {
        workoutDayMessage = ("<span class='workoutMessage2'> It's a rest day.</span>");
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
    var alertHour=[9, 9, 9];
    /* Set alert Minutes in 24hr Notation ie. the 00 in 12:00 */
    var alertMinute=[06, 07, 08]; 
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
            
            $('#alert-container').fadeIn(function() {
              alert("The time is" + dateStampHours + ":" + dateStampMinutes + ". You need to eat " + alertMessages[i] + ".");
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


// code main function
function mainFunction() {
    // setPreferences returns an array called preferences = [days, goal, alertType, level]
    var preferences = setPreferences();
    var level = preferences[3],
        goal = preferences[1],
        weight = preferences[4];
    showProgramOverview(level, goal, weight);
    getDayOfWeek();
    setAlerts();
    $("#preferences-container").hide();
}

function renderNutritionFactsAPI() {
    // set up a search bar
    var searchItem = $("#foodSearch").val();
https://nutritionix.com/v1_1/search/
  $.get('https://api.nutritionix.com/v1_1/search/' + searchItem + '?fields=*&appId=fa29d9c4&appKey=0ba07a98eec4870860353ad5617c973e', 

    function(nutritionFacts) {
      var items = nutritionFacts.hits;
      console.log(items);
      for (var i = 0; i < items.length; i++) {
        renderNewCard(items[i].fields.brand_name, items[i].fields.item_name, items[i].fields.nf_calories, items[i].fields.nf_protein, items[i].fields.nf_total_carbohydrate, items[i].fields.nf_total_fat);
    };
});
}

function saveToMeal(e) {
  var buttons = $(".saveToMealButton");

  buttons.click(function(e) {
    var thisButton = e.target;
    var mealToAddTo = $(".mealToAddTo option:selected").val();
    console.log(mealToAddTo);
  });

}

handleClickEvents();
handleBlurEvents();

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
