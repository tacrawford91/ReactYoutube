function formatSeconds(seconds)
{
    var date = new Date(1970,0,1);
    console.log(date)
    date.setSeconds(seconds);
    console.log(date.toTimeString())
    return date.toTimeString()
    // .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    // .replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
};


formatSeconds(5);

formatSeconds(86399);