function getWorkoutWeeks(goal) {
    if (goal == "increase") {
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
      var targetLink = "https://www.youtube.com/embed/qfkRhT3WTH0?rel=0";
      $( "#youtube-player-iframe" ).attr( "src", targetLink );
      $('#increase-overview-text').fadeIn();
    }
    else if (goal == 'decrease') {
      var workoutWeeks = {
          'week1': [
          {
            day       : '1',
            dayOfWeek : 'Monday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-1-chest-triceps-abs.html"
          },
          {
            day       : '2',
            dayOfWeek : 'Tuesday',
            workout   : 'Shoulders, legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-2-shoulders-legs.html"
          },
          {
            day       : '3',
            dayOfWeek : 'Wednesday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-3-back-biceps.html"
          },
          {
            day       : '4',
            dayOfWeek : 'Thursday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-4-chest-triceps-abs.html"
          },
          {
            day       : '5',
            dayOfWeek : 'Friday',
            workout   : 'Shoulders, Legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-5-shoulders-legs.html"
          },
          {
            day       : '6',
            dayOfWeek : 'Saturday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-6-back-biceps.html"
          },
          {
            day       : '7',
            dayOfWeek : 'Sunday',
            workout   : 'Rest',
            id        : "rest",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-7-rest.html"
          }
        ],
        'week2': [
          {
            day       : '8',
            dayOfWeek : 'Monday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-8-chest-triceps-abs.html"
          },
          {
            day       : '9',
            dayOfWeek : 'Tuesday',
            workout   : 'Shoulders, legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-9-shoulders-legs.html"
          },
          {
            day       : '10',
            dayOfWeek : 'Wednesday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-10-back-biceps.html"
          },
          {
            day       : '11',
            dayOfWeek : 'Thursday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-11-chest-triceps.html"
          },
          {
            day       : '12',
            dayOfWeek : 'Friday',
            workout   : 'Shoulders, Legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-12-shoulders-legs.html"
          },
          {
            day       : '13',
            dayOfWeek : 'Saturday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-13-back-biceps.html"
          },
          {
            day       : '14',
            dayOfWeek : 'Sunday',
            workout   : 'Rest',
            id        : "rest",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-14-rest.html"
          }
        ],
        'week3': [
          {
            day       : '15',
            dayOfWeek : 'Monday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-15-chest-triceps-abs.html"
          },
          {
            day       : '16',
            dayOfWeek : 'Tuesday',
            workout   : 'Shoulders, legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-16-shoulders-legs.html"
          },
          {
            day       : '17',
            dayOfWeek : 'Wednesday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-17-back-biceps.html"
          },
          {
            day       : '18',
            dayOfWeek : 'Thursday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-18-chest-triceps.html"
          },
          {
            day       : '19',
            dayOfWeek : 'Friday',
            workout   : 'Shoulders, Legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-19-shoulders-legs.html"
          },
          {
            day       : '20',
            dayOfWeek : 'Saturday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-20-back-biceps.html"
          },
          {
            day       : '21',
            dayOfWeek : 'Sunday',
            workout   : 'Rest',
            id        : "rest",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-21-rest.html"
          }
        ],
        'week4': [
          {
            day       : '22',
            dayOfWeek : 'Monday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-22-chest-triceps-abs.html"
          },
          {
            day       : '23',
            dayOfWeek : 'Tuesday',
            workout   : 'Shoulders, legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-23-shoulders-legs.html"
          },
          {
            day       : '24',
            dayOfWeek : 'Wednesday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-24-back-biceps.html"
          },
          {
            day       : '25',
            dayOfWeek : 'Thursday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-25-chest-triceps-ab.html"
          },
          {
            day       : '26',
            dayOfWeek : 'Friday',
            workout   : 'Shoulders, Legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-26-shoulders-legs.html"
          },
          {
            day       : '27',
            dayOfWeek : 'Saturday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-27-back-biceps.html"
          },
          {
            day       : '28',
            dayOfWeek : 'Sunday',
            workout   : 'Rest',
            id        : "rest",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-28-rest.html"
          }
        ],
        'week5': [
          {
            day       : '29',
            dayOfWeek : 'Monday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-29-chest-triceps.html"
          },
          {
            day       : '30',
            dayOfWeek : 'Tuesday',
            workout   : 'Shoulders, legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-30-shoulders-legs.html"
          },
          {
            day       : '31',
            dayOfWeek : 'Wednesday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-31-back-biceps.html"
          },
          {
            day       : '32',
            dayOfWeek : 'Thursday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-32-chest-triceps.html"
          },
          {
            day       : '33',
            dayOfWeek : 'Friday',
            workout   : 'Shoulders, Legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-33-shoulders-legs.html"
          },
          {
            day       : '34',
            dayOfWeek : 'Saturday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-34-back-biceps.html"
          },
          {
            day       : '35',
            dayOfWeek : 'Sunday',
            workout   : 'Rest',
            id        : "rest",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-35-rest.html"
          }
        ],
        'week6': [
          {
            day       : '36',
            dayOfWeek : 'Monday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-36-chest-triceps.html"
          },
          {
            day       : '37',
            dayOfWeek : 'Tuesday',
            workout   : 'Shoulders, legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-37-shoulders-legs.html"
          },
          {
            day       : '38',
            dayOfWeek : 'Wednesday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-38-back-biceps.html"
          },
          {
            day       : '39',
            dayOfWeek : 'Thursday',
            workout   : 'Chest, triceps & abs',
            id        : "chestTricepsAndAbs",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-39-chest-triceps.html"
          },
          {
            day       : '40',
            dayOfWeek : 'Friday',
            workout   : 'Shoulders, Legs & calves',
            id        : "shouldersLegsAndCalves",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-40-shoulders-legs.html"
          },
          {
            day       : '41',
            dayOfWeek : 'Saturday',
            workout   : 'Back, traps & biceps',
            id        : "backTrapsAndBiceps",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-41-back-biceps.html"
          },
          {
            day       : '42',
            dayOfWeek : 'Sunday',
            workout   : 'Rest',
            id        : "rest",
            link      : "http://www.bodybuilding.com/fun/jim-stoppani-six-week-shortcut-to-shred-day-42-rest.html"
          }
        ]
      };
      var targetLink = "https://www.youtube.com/embed/0ITs-atk8Qk?rel=0";
      $( "#youtube-player-iframe" ).attr( "src", targetLink );
      $('#decrease-overview-text').fadeIn();
    }
    return workoutWeeks;
}