
// *********************** Dates ***********************

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

 

// ************** Temporal Alternative of Dates ********************

/*
The Temporal object enables date and time management in various scenarios, including built-in time zone and calendar representation, wall-clock time conversions, arithmetics, formatting, and more. It is designed as a full replacement for the Date object.
*/

// 1. --------------- Current time (most common use) ------------------
const now = Temporal.Now.zonedDateTimeISO();              
// Current time in your local timezone (e.g. Asia/Dhaka)
const nowDhaka = Temporal.Now.zonedDateTimeISO('Asia/Dhaka'); 
// Explicitly in Dhaka timezone
const nowUTC = Temporal.Now.instant();                    
// Pure UTC instant (no timezone)


// 2. --------- Create date/time from string or object -------------
const birthday = Temporal.PlainDate.from('1995-12-25');   
// Just a date (no time)
const meeting = Temporal.PlainDateTime.from({ 
  year: 2026, month: 2, day: 5, hour: 14, minute: 30 
}); // Date + time (no timezone)


// 3. -------- Add/subtract (arithmetic) — immutable and safe ----------
const after10Days = now.add({ days: 10 });                
// Add 10 days to current time
const duration = Temporal.Duration.from({ months: 1, days: 15 });
const future = birthday.add(duration);                    
// Add duration to birthday


// 4. -------- Difference / age / countdown (since / until) ----------
const age = birthday.since(Temporal.Now.plainDateISO());
console.log(`Age: ${age.years} years, ${age.months} months`);

// Days until birthday (very common)
function daysToBirthday(month, day) {
  const today = Temporal.Now.plainDateISO();
  let next = Temporal.PlainDate.from({ year: today.year, month, day });
  
  // If birthday already passed this year → move to next year
  if (Temporal.PlainDate.compare(next, today) < 0) {
    next = next.add({ years: 1 });
  }
  
  return today.until(next).days;
}
console.log(daysToBirthday(12, 25));  // Days until BirthDate


// 5. ---- Timezone conversion (essential for international apps) -----
const nyTime = now.withTimeZone('America/New_York');
console.log(nyTime.toString());       
// Same moment, shown in New York time


// 6. --- Formatting (with locale support — Bengali / English etc.) ---
const dt = Temporal.Now.plainDateTimeISO();
console.log(dt.toLocaleString('bn-BD', { 
  dateStyle: 'full', 
  timeStyle: 'short' 
})); 
// Bengali: full date + short time (e.g. Wednesday, 28 January 2026, 6:41 PM)
console.log(dt.toString());  // ISO string format


// 7. - Duration from milliseconds (useful for API responses / timers) -
const dur = Temporal.Duration.from({ milliseconds: 3600000 * 2.5 }); 
// 2.5 hours
console.log(dur.toString());  // Output: PT2H30M