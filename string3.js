module.exports = function monthOfDate(dateString){

    // return month for date
    if (dateString){
        
        // Splitting the date components
        let dateSplit = dateString.split('/');
        let dd = Number(dateSplit[0]);
        let mm = Number(dateSplit[1]);
        let yy = dateSplit[2];

        //check if its a valid date and return month
        if (dd <= 31 && dd >=1 && mm <=12 && mm >=1 && yy.length === 4 && !isNaN(Number(yy))) return mm; 
     }

    // return undefined for undefined, null, empty string or invalid date
    return undefined;
}