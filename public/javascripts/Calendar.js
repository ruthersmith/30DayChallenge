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
            this.appendCalenderCell(this.getKeyByValue(this.days,col),"<div class = 'col-md-2 calendar-cell" );
        }
        this.appendCalenderCell( this.getKeyByValue(this.days,6) )
    }

    displayDays(){
        let day_count = 1;
        let openingDiv = "<div class = 'col-md-1 calendar-cell' " ;
        for (let i = 0; day_count <= this.maxDays; i++){

          if (i < this.firstDay){
            // visibility: hidden;
            this.calendarDiv.append(openingDiv + "style=' '>" + '.' + "</div>");
          }else {
            this.calendarDiv.append("<div class = 'col-md-1 calendar-cell'> "+ day_count + "</div>");
            day_count++;
          }
        }
    }
    appendCalenderCell(value,openingDiv = "<div class = 'col-md-1 calendar-cell" ){
        this.calendarDiv.append(openingDiv +"' > "+ value + "</div>");
    }

     getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}