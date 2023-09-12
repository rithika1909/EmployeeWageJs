//uc1
const IS_ABSENT=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HR=4;
const FULL_TIME_HR=8;
const NUM_OF_WORKING_DAYS=5;
const WAGE_PER_HR=20;
const MAX_HRS_IN_A_MONTH=160;
let empcheck = Math.floor(Math.random()*10)%2;
if(empCheck=IS_ABSENT){
    console.log("Employee is Absent");
}else{
    console.log("Employee is present");
}

//uc2
let emphrs=0;
empCheck = Math.floor(Math.random()*10)%3;
switch(empcheck){
    case IS_PART_TIME: emphrs=PART_TIME_HR;
        break;
    case IS_FULL_TIME: emphrs=FULL_TIME_HR;
        break;
    case IS_ABSENT: emphrs=IS_ABSENT;
}
let empWage=emphrs*WAGE_PER_HR;
console.log(empWage);

//uc3
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME: emphrs=PART_TIME_HR;
            break;
        case IS_FULL_TIME: emphrs=FULL_TIME_HR;
            break;
        case IS_ABSENT: emphrs=IS_ABSENT;
    }
}
let totalEmphrs=0;
empCheck =Math.floor(Math.random()*10)%3;
totalEmphrs=getWorkingHours(empCheck);
let totalEmpWage = emphrs+WAGE_PER_HR;
console.log(totalEmpWage);

//uc4
totalEmphrs=0;
for(let i=0;i<NUM_OF_WORKING_DAYS;i++){
    empCheck=Math.floor(Math.random()*10)%3;
    totalEmphrs+=getWorkingHours(empCheck);
}
totalEmpWage=totalEmphrs*WAGE_PER_HR;
console.log(totalEmpWage);

//uc5
let totalEmphrs=0;
let totalWorkingDays=0;
while (totalEmpHours < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
    
    {
    
        totalWorkingDays++;
    
        empCheck = Math.floor(Math.random()*10) % 3;
    
        totalEmphrs += getWorkingHours(empCheck);
    
    }
    
    let empWage1 = totalEmphrs * WAGE_PER_HR;
    
    console.log("Total days :"+totalWorkingDays+" Total Hours : "+totalEmphrs+" Emp Wages "+empWage1);
    
    console.log(DailyWageArray);
    
    const wagesPerDay = DailyWageArray.includes(160);
    
    console.log("Wages Per Day "+wagesPerDay);
    
     
    
    //UC6
    
    function CalcDailyWage(empHrs){
    
        return emphrs * WAGE_PER_HR;
    
    }
    
    let empDailyWageArr = new Array();
    
    let totalWorkingDays = 0;
    
    totalEmphrs = 0;
    
    while (totalWorkingDays <= NUM_OF_WORKING_DAYS){
    
        totalWorkingDays ++;
    
        empCheck = Math.floor(Math.random() * 10) % 3;
    
        let empHrs = getWorkingHours(empCheck);
    
        totalEmphrs += empHrs;
    
        empDailyWageArr.push(CalcDailyWage(empHrs));
    
    }
    
     
    
    //UC7
    
    //A
    
    totalEmpWage = 0;
    
    function sum (dailyWage){
    
        totalEmpWage += dailyWage;
    
    }
    
    empDailyWageArr.forEach(sum);
    
    console.log(totalEmpWage);
    
     
    
    //B
    
    let dayCount = 0;
    
    function mapDayWithWage(dailyWage){
    
        dayCount ++;
    
        return dayCount + " " + dailyWage;
    
    }
    
    let mapWithDayArray = empDailyWageArr.map(mapDayWithWage);
    
    console.log(mapWithDayArray);
    
     
    
    //C
    
    function fullTimeWage(dailyWage){
    
        return dailyWage.include("160");
    
    }
    
    let fullTimeWageArr = empDailyWageArr.filter(fullTimeWage);
    
    console.log(fullTimeWageArr);
    
     
    
    //D
    
    console.log(mapWithDayArray.find(fullTimeWage));
    
    console.log(empDailyWageArr.find(fullTimeWage));
    
     
    
    //E
    
    console.log(fullTimeWageArr.every(fullTimeWage));
    
     
    
    //F
    
    function partTimeWage(dailyWage){
    
        return dailyWage.include("80");
    
    }
    
    console.log(mapWithDayArray.some(partTimeWage));
    
     
    
    //G
    
    function totalDaysWorked(numOfDays, dailyWage){
    
        if(dailyWage > 0){
    
            numOfDays ++;
    
        }
    
        return numOfDays;
    
    }
    
    console.log(empDailyWageArr.reduce(totalDaysWorked,0));