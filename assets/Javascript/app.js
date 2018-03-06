// Jquery used to remove the submit button
$('#start').on('click',function(){
    game.start();
    
    });
    $(document).on('click','#end',function(){
        game.done();
    });
    
    var questions=[{
      question:"What is Honda's best selling sedan?",
      answers: ["Civic ","Accord ","Ridgeline ","Jetta "],
      correctAnswer: "Civic"
    }, {
      question:"Which car has the highest top speed?",
      answers:["Hennessey Venom GT","Bugatti Veyron Supersport","Mclaren F1,","BMW 4 Series"],
      correctAnswer: "Bugatti Veyron Supersport"
    }, {
      question:"What is the most sold car in the world?", 
      answers: ["Ford F-series","Toyota Corolla","Honda Accord","Nissan Sentra"],
      correctAnswer: "Ford F-series"
    }, {
        question:"What is the most expensive production car in the world?", 
        answers: ["Koenigsegg CCXR Trevita","Lamborghini Gallardo","W Motors Lykan Hypersport","Toyota Prius"],
        correctAnswer: "Koenigsegg CCXR Trevita"
    }, {
        question:"Which car company was responsible for Diesel-gate?", 
        answers: ["Volkswagen","Toyota","Honda","Nissan"],
        correctAnswer: "Volkswagen"
    }, {
        question:"Which car comes with a 1.8 turbo charged engine standard?", 
        answers: ["Ferrari California","Volkswagen Passat","Honda Accord","Ford Mustang"],
        correctAnswer: "Volkswagen Passat"
    }, {
        question:"Which brand makes fully electric cars?", 
        answers: ["Ford","Toyota","Hyundai","Tesla"],
        correctAnswer: "Tesla"
    }, {
        question:"What is the worst car on this list in terms of value?", 
        answers: ["Audi A3","Hyundai Sonata","Honda Accord","Mazda CX-5"],
        correctAnswer: "Audi A3"
    }];
    
    var game = {
        correct: 0,
        incorrect: 0,
        counter: 120,
        countdown: function (){
            game.counter--;
            $('#counter').html(game.counter);
            if(game.counter<=0){
                console.log("Time is Up!");
                game.done();
            }
        },
        start: function(){
           timer = setInterval(game.countdown,1000);
           $('#subwrapper').prepend('<h2>Time remaining: <span id="counter">120</span>Seconds</header>'); 
           $('#start').remove();
            for(var i=0;i<questions.length;i++){
                $('#subwrapper').append('<h2>'+questions[i].question +'</h2');
                for(var j=0;j<questions[i].answers.length;j++){
                    $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'/>"+questions[i].answers[j]);
                    }
                }
                $('#subwrapper').append('<br><button id="end">Done</button');
            },
            done: function(){
                $.each($('input[name="question-0"]:checked'),function(){
                    if($(this).val()==questions[0].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-1"]:checked'),function(){
                    if($(this).val()==questions[1].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-2"]:checked'),function(){
                    if($(this).val()==questions[2].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-3"]:checked'),function(){
                    if($(this).val()==questions[3].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-4"]:checked'),function(){
                    if($(this).val()==questions[4].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-5"]:checked'),function(){
                    if($(this).val()==questions[5].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-6"]:checked'),function(){
                    if($(this).val()==questions[6].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                $.each($('input[name="question-7"]:checked'),function(){
                    if($(this).val()==questions[7].correctAnswer){
                        game.correct++;
                    } else {
                        game.incorrect++;
                    }
                });
                this.result();
            },
    
            result: function(){
                clearInterval(timer);
                $('#subwrapper h2').remove();
                $('#subwrapper').html("<h2>All done!</h2>");
                $('#subwrapper').append("<h3>Correct Answers:"+this.correct+"</h3>");
                $('#subwrapper').append("<h3>Incorrect Answers:"+this.incorrect+"</h3>");
                $('#subwrapper').append("<h3>Unanswered:"+(questions.length-(this.incorrect+this.correct))+"</h3>");
            }
    
            }