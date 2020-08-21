class Checker{
    constructor(){
        this.input = createInput("Answer");
        this.nextProblem = createButton("Next Problem");
        this.checkProblem = createButton("Check Problem");
    }

    display(){
        this.input.position(displayWidth/2,displayHeight/2);
        this.nextProblem.position(displayWidth/4,displayHeight/3);
        this.checkProblem.position(displayWidth/4,displayHeight/3 + 20);

        this.checkProblem.mousePressed(()=>{
            var checking = this.input.value();
            if(checking === bigNumber){
              alert("Correct Answer!");
            }
            /*else{
              alert("Wrong!");
            }*/
          });
        
          this.nextProblem.mousePressed(()=>{
            firstNumber = Math.round(random(1000,9999));
            secondNumber = Math.round(random(1000,9999));

            bigNumber = firstNumber + secondNumber;
        });
    }
}