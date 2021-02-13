class Question{
    constructor(){
        this.title = createElement('h1');
        this.input1 = createInput("Enter Your Name Here");
        this.input2= createInput("Enter the Correct Option");
        this.button=createButton('Submit');
        this.question=createElement('h2');
        this.option1=createElement('h3');
        this.option2=createElement('h3');
        this.option3=createElement('h3');
        this.option4=createElement('h3');
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input1.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);
        this.question.html("Question:What starts and ends with the letter 'E' but only has one letter?");
        this.question.position(30,80);
        this.option1.html("1: Everyone");
        this.option1.position(150,110);
        // Hagrid is the right answer.
        this.option2.html("2: Envelope");
        this.option2.position(150,130);
        this.option3.html("3: Example");
        this.option3.position(150,150);
        this.option4.html("4: Estimate");
        this.option4.position(150,170);
        this.input1.position(150,230);
        this.input2.position(350,230);
        this.button.position(290,300);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input1.hide();
            this.title.hide();
            this.input2.hide();
            contestant.name=this.input1.value();
            contestant.answer=this.input2.value();
            contestantCount+=1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
    });
}
}