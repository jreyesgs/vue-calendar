const app = new Vue({
  el: '#app',
  data: {
    calendar: [],
    week: ['Dom','Lun', 'Mar','Mie','Jue','Vie','Sab'],
    y: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    d: '',
    month: '',
    year: '',
    initMonth: '',
    initYear: ''
  },
  mounted(){
    let now = new Date();
    this.year = now.getFullYear();
    this.initYear = this.year;
    this.month = now.getMonth();
    this.initMonth = this.month;
    this.d = now.getDate();
    this.getDate();
  },
  methods:{
    getDate(){

      let calendar = [];
      let numberOfDays = new Date(this.year, this.month + 1, 0).getDate();
      let firstWeekday = new Date(this.year, this.month, 1).getDay();
      let lastWeekday = new Date(this.year, this.month, numberOfDays).getDay();
      let totalWeeks = Math.ceil((numberOfDays + firstWeekday) / 7);
      var lastWeek = totalWeeks - 1;
      let firtDay = firstWeekday * -1;
      for(let i = 0; i < totalWeeks; i++){
        let week = [];
        for(let d = 0; d < 7; d++){
          firtDay++;
          let date = new Date(this.year, this.month, firtDay);
          var data = {
            date: date,
            day: date.getDate(),
            isInPrimaryMonth: date.getMonth() === this.month,
            isInLastWeekOfPrimaryMonth: week === lastWeek,
            weekday: date.getDay(),
            
            index: {
              day: firtDay,
              week: i,
            },
          };
          week.push(data)
        }
        calendar.push(week);       
      }
      console.log(calendar)
      this.calendar = calendar;
    //return calendar;
    }
  }
});
