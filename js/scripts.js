// Create a program to keep track of my schedule. When and what I eat. When and what to do that which is physical throughout the day.

        // features/functions
        // tell me when to eat
        function determineLevel(days) {
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
            return level;
        }

        function showBeginnerIncreaseWeightRoutine() {
            document.querySelector("#beginnerIncreaseWorkout").style.display = "block";

        }

        function showBeginnerDecreaseWeightRoutine() {
            document.getElementById("beginnerDecreaseWorkout").style.display = "block";
        }

        function showIntermediateIncreaseWeightRoutine() {
            document.getElementById("intermediateIncreaseWorkout").style.display = "block";
        }

        function showIntermediateDecreaseWeightRoutine() {
            document.getElementById("intermediateDecreaseWorkout").style.display = "block";
        }

        function showAdvancedIncreaseWeightRoutine() {
            document.getElementById("advancedIncreaseWorkout").style.display = "block";
        }

        function showAdvancedDecreaseWeightRoutine() {
            document.getElementById("advancedDecreaseWorkout").style.display = "block";
        }

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

        // set user preferences
        function setPreferences() {
            // welcome and get how long the user has been on this schedule
            var days = prompt("Hi. I'm here to guide you. How many days have you been on this schedule?");
            // determine which level they're on and store that in a variable
            level = determineLevel(days);
            // find out what their goal is and store that in a variable
            goal = prompt("You're a " + level + ". That's nice and stuff. So are you looking to increase or decrease your weight?");
            // if their goal is to increase weight do stuff
            if (goal == "increase" || goal == "Increase") {
                var alertType = prompt("Ok, we can do that. Would you like to receive an audio alert, video alert or both as a reminder?");
                goal = "increase";
            }
            else if (goal == "decrease" || goal == "Decrease") {
                var alertType = prompt("Okay, we can shed those toxins! Would you like to receive an audio alert, video alert or both as a reminder?");
                goal = "decrease";
            }
            if (alertType == "audio" || alertType == "Audio") {
                // showAudioReminder();
                wantsAudio = true;
            }
            else if (alertType == "video" || alertType == "Video") {
                // showVideoReminder();
                wantsVideo = true;
            }
            else if (alertType == "both" || alertType == "Both") {
                // showAudioReminder();
                // showVideoReminder();
                wantsVideo = true;
                wantsAudio = true;
            }
        }
        function getFormValues() {
            var days = "";
            var goal = "";
            var alertType = "";

            days = $("#amountOfDays").val();
            goal = $("#goal").val();
            alertType = $('input:radio[name=alertTypeRadios]').val();

            // Do something
            setPreferences(days, goal, alertType)
            alert(days + " and " + goal + " and " + alertType);

        }

        // show the program overview
        function showProgramOverview(level, goal) {
            if (level == 'beginner') {
                if (goal == 'increase') {
                    showBeginnerIncreaseWeightRoutine();
                }
                else {
                    showBeginnerDecreaseWeightRoutine();
                }
            }
            else if (level == "intermediate") {
                if (goal == 'increase') {
                    showIntermediateIncreaseWeightRoutine();
                }
                else {
                    showIntermediateDecreaseWeightRoutine();
                }
            }
            else if (level == "advanced") {
                if (goal == 'increase') {
                    showAdvancedIncreaseWeightRoutine();
                }
                else {
                    showAdvancedDecreaseWeightRoutine();
                }
            }
        }

        
        // how often should I check to see if nowsTime is the same as the set time? 
        // check every 60 seconds

        

        // 
        function setAlerts() {
            var iFrequency = 60000; // how often
            var myInterval = 0;
            if(myInterval > 0) {
                // stop
                clearInterval(myInterval); 
            } else {
                // run
                checkTime();
                myInterval = setInterval( "checkTime()", iFrequency ); 
            }      
        }

        function checkTime() {
            // SETTINGS
            /* Set alert Hours in 24hr Notation ie. the 12 in 12:00 */
            var alertHour=[19, 19, 19];
            /* Set alert Minutes in 24hr Notation ie. the 00 in 12:00 */
            var alertMinute=[28, 29, 30]; 
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

        // code main function
        function mainFunction() {
            setPreferences();
            showProgramOverview(level, goal);
            setAlerts();
            // showWorkout(); // todo
            // showMeals(); // todo
        }   

        
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