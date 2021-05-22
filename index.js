setInterval(() => {
    d = new Date();
    // getting real time and setting variables
    hclock = d.getHours();
    mclock = d.getMinutes();
    sclock = d.getSeconds();
    // calculation of each deg rotation respect to hour min and sec
    hrotation = 30*hclock+mclock/2;
    mrotation = 6*mclock;
    srotation = 6*sclock;
    // combining css to rotate each variable
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
// 1000 means 1sec
}, 1000);