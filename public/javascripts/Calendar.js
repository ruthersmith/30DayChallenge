class Calendar{
    
    days =  {
        "Sunday": 0, "Monday": 1, "Tuesday": 2,
        "Wednesday": 3,"Thursday": 4,"Friday": 5,"Saturday":6
      }
    constructor(){
        this.year = 2019;
        this.month = 'Oct';
        this.firstDay = 2;
        this.maxDays = 31;
        this.calendarDiv = $("#calendar");

        this.displayDayTitle();
        this.displayDays();
        
    }

    displayDayTitle(){
        this.appendCalenderCell( this.getKeyByValue(this.days,0) )
        for(let col = 1; col < 6; col++){
            this.appendCalenderCell(this.getKeyByValue(this.days,col),true);
        }
        this.appendCalenderCell( this.getKeyByValue(this.days,6) )
    }

    displayDays(){
        let day_count = 1;
        
        for (let i = 0; day_count <= this.maxDays; i++){
            let column2 = true;

            if(i % 7 == 0 || i  % 7 == 6){
                column2 = false;
            }

            if (i < this.firstDay){
                this.appendCalenderCell(".",column2, "' style =  'visibility: hidden'");
             }else {
                this.appendCalenderCell(day_count,column2);
                day_count++;
            }
        }
    }

    appendCalenderCell(value, column2 = false, style = "' style = '' "){
        let openingDiv1 = "<div class = 'col-md-1  text-right" + style ;
        let openingDiv2 = "<div class = 'col-md-2  text-right" + style;

        if(column2){
            this.calendarDiv.append(openingDiv2 +"' > "+ value + "</div>");
        }else{
            this.calendarDiv.append(openingDiv1 +"' > "+ value + "</div>");
        }
    }

     getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}