
// *********************** Dates ***********************

/*
 Date : Date is an object in javascript. 
JavaScript stores dates as number of milliseconds since January 01, 1970
*/

let myDate = new Date()
console.log(typeof myDate);
console.log(myDate) 
//Output : 2023-10-09T14:38:09.847Z
console.log(myDate.toString()) 
//Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)
console.log(myDate.toLocaleString()) 
// Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) 
//Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) 
// Output : 7:45:31 AM
console.log(myDate.toDateString()) 
//Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) 
// Output : 07:46:40 GMT-0700 (Pacific Daylight Time)
console.log(myDate.toISOString()) 
// Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) 
//Output : 2023-10-09T14:40:58.495Z


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

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})



// ************** Temporal Alternative of Dates ********************

/*
The Temporal object enables date and time management in various scenarios, including built-in time zone and calendar representation, wall-clock time conversions, arithmetics, formatting, and more. It is designed as a full replacement for the Date object.
*/


// --------------- Temporal.Now ------------------
// 1️⃣ Current exact system time (UTC)
console.log(Temporal.Now.instant().toString());
// Example Output → 2026-01-28T10:25:30.123456789Z

// 2️⃣ Current system time zone (IANA ID)
console.log(Temporal.Now.timeZoneId());
// Example Output → Asia/Dhaka

// 3️⃣ Current date + time WITH timezone
console.log(Temporal.Now.zonedDateTimeISO().toString());
// Example Output → 2026-01-28T16:25:30.123456789+06:00[Asia/Dhaka]

// 4️⃣ Current date only (no time)
console.log(Temporal.Now.plainDateISO().toString());
// Example Output → 2026-01-28

// 5️⃣ Current time only (no date)
console.log(Temporal.Now.plainTimeISO().toString());
// Example Output → 16:25:30.123456789

// 6️⃣ Current date + time (NO timezone info)
console.log(Temporal.Now.plainDateTimeISO().toString());
// Example Output → 2026-01-28T16:25:30.123456789


// --------------- Temporal Others ------------------
// 1️⃣ Temporal.Instant → exact UTC moment
console.log(Temporal.Instant.from('2026-01-28T10:30Z').toString());
// Output → 2026-01-28T10:30:00Z

// 2️⃣ Temporal.ZonedDateTime → date + time + timezone
console.log(Temporal.ZonedDateTime.from('2026-01-28T16:30+06:00[Asia/Dhaka]').toString());
// Output → 2026-01-28T16:30:00+06:00[Asia/Dhaka]

// 3️⃣ Temporal.PlainDate → date only
console.log(Temporal.PlainDate.from('2026-01-28').toString());
// Output → 2026-01-28

// 4️⃣ Temporal.PlainTime → time only
console.log(Temporal.PlainTime.from('16:30:00').toString());
// Output → 16:30:00

// 5️⃣ Temporal.PlainDateTime → date + time (no timezone)
console.log(Temporal.PlainDateTime.from('2026-01-28T16:30:00').toString());
// Output → 2026-01-28T16:30:00

// 6️⃣ Temporal.PlainYearMonth → year + month
console.log(Temporal.PlainYearMonth.from('2026-01').toString());
// Output → 2026-01

// 7️⃣ Temporal.PlainMonthDay → month + day
console.log(Temporal.PlainMonthDay.from('--01-28').toString());
// Output → --01-28

// 8️⃣ Temporal.Duration → length of time
console.log(Temporal.Duration.from({ hours: 2, minutes: 30 }).toString());
// Output → PT2H30M






