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
      for(let col = 0; col < 7; col++){
        this.calendarDiv.append("<div>" + this.getKeyByValue(this.days,col) + "</div>");
      }
      this.calendarDiv.append("<div class=\"end\"></div>");
    }

    displayDays(){
        let day_count = 1;
        for (let i = 0; day_count <= this.maxDays; i++){

          if (i <= this.firstDay){
            this.calendarDiv.append("<div style='visibility: hidden; '>" + '.' + "</div>");
          }else {
            this.calendarDiv.append("<div> "+ day_count + "</div>");
            day_count++;
          }

          if (i % 7 === 0){
            this.calendarDiv.append("<div class=\"end\"></div>");
          }
        }
    }

     getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}