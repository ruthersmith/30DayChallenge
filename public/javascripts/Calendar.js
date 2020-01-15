class Calendar{
    
    days =  {
        "Sunday": 0, "Monday": 1, "Tuesday": 2,
        "Wednesday": 3,"Thursday": 4,"Friday": 5,"Saturday":6
      };

    monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    constructor(){
        this.calendarDiv = $("#calendar");

        this.setTodayDate();
        this.displayDayTitle();
        this.displayDays();
        this.displayCalendarHeading();
    }

    displayCalendarHeading(){
        $('#heading').append(`<div>${this.month} ${this.year} </div>`)
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
                this.appendCalenderCell(".",column2, "' style =  'color: #ddd'");
             }else {
                this.appendCalenderCell(day_count,column2);
                day_count++;
            }
        }
    }

    appendCalenderCell(value, column2 = false, style = "' style = '' "){
        let openingDiv1 = "<div class = 'col-md-1 p-3 days text-right" + style ;
        let openingDiv2 = "<div class = 'col-md-2 days text-right" + style;

        if(column2){
            this.calendarDiv.append(openingDiv2 +"' > "+ value + "</div>");
        }else{
            this.calendarDiv.append(openingDiv1 +"' > "+ value + "</div>");
        }
    }

     getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }


     setTodayDate(date = new Date()){
        this.today  = date.getDate();
        this.month = this.monthNames[date.getMonth()];
        this.year = date.getFullYear();
        this.getMonthSetting(this.year,date.getMonth());
    }
    
    getMonthSetting(year = this.year, month = this.month){
        let tempDate = new Date(year,month,0);
        this.maxDays = tempDate.getDate();
        this.firstDay = tempDate.getDay();;

        console.log("max xdays " + tempDate.getDate());
    }
}