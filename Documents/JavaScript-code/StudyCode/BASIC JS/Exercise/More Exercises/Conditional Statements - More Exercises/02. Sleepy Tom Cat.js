function restdays (freeDays){
    workingDays = parseInt (365 - freeDays)
    norm = 30000; 
    timeToPlay = workingDays * 63 + freeDays * 127
    diferenceInMinutes = norm - timeToPlay
    h = Math.abs (diferenceInMinutes / 60)
    m = Math.abs (diferenceInMinutes % 60) 
        if (diferenceInMinutes > 0 ) {
            console.log ("Tom sleeps well")
            console.log(`${Math.floor(h)} hours and ${Math.floor(m)} minutes less for play`)
        } else { (diferenceInMinutes < 0 ) 
            console.log("Tom will run away")
            console.log(`${Math.floor(h)} hours and ${Math.floor(m)} minutes more for play`)
        }
    }
    restdays (113);
    // Result 100/100