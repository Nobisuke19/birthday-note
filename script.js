    const elm = document.getElementById('time')

    setInterval(() => {
        elm.innerText = new Date().toLocaleTimeString();
    }, 1000)


    countdown
    const birthday = new Date('2025-02-19T00:00:00').getTime();
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = birthday - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)  );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText = `${days} DAYS | ${hours}h : ${minutes}m : ${seconds}s`
        console.log(days,hours,minutes,seconds);
    })

