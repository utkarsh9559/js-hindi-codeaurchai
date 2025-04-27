//dates
 const myDate = new Date()
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toISOString());
 console.log(myDate.toLocaleString());
 console.log(typeof myDate);

 //let mydesigneddate = new Date(2023 , 0 , 23 , 5 , 3)
 let mydesigneddate = new Date("01-14-2023")
 console.log(mydesigneddate.toLocaleString());//local string also includes hour , min and seconds but datestring does not
 
 let myTimeStamp = Date.now()

//  console.log(myTimeStamp);
//  console.log(mydesigneddate.getTime());
//  console.log(Math.floor(Date.now()/1000));
 
 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth());//gives the current month .. and starts jan as 0 and inc accordingly
 console.log(newDate.getDay());
 

 newDate.toLocaleString('default'{
    weekday:"long"
    
 })

 
 
 
 