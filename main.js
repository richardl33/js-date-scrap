// Date re-format

function changeDateFormat(inputDate){
   var splitDate = inputDate.split('-');
   if(splitDate.count == 0){
       return null;
   }

   var year = splitDate[0];
   var month = splitDate[1];
   var day = splitDate[2]; 

   return month + '\/' + day + '\/' + year;
}

var inputDate = '2018-11-28';
var newDate = changeDateFormat(inputDate);

console.log(newDate);

// Date array sort

var myArray = [{
   name: "Joe Blow",
   date: "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)"
}, {
   name: "Sam Snead",
   date: "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)"
}, {
   name: "John Smith",
   date: "Sat Oct 29 2016 00:00:00 GMT-0700 (PDT)"
}];

myArray.sort(function compare(a, b) {
   var dateA = new Date(a.date);
   var dateB = new Date(b.date);
   return dateA - dateB;
});

console.log(myArray);
