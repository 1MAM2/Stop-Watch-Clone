let buttons =document.querySelector('#buttons');
let clock = document.querySelector('#clock');
let second = 0;
let second2 = 0;
let second3 = 0;
let saat;
    [...buttons.children].forEach((button,index) =>
    {

        if(button.classList.contains('startButton'))
        { 
            button.addEventListener('click', () =>
            {
                saat = setInterval(startWatch,10);
                button.classList.toggle("active");
            })
        }
        else  if(button.classList.contains('stopButton'))
        {
            button.addEventListener('click', () =>
            {
                button.classList.toggle("active");
                clearInterval(saat);
            })
        }
        else
        {
            button.addEventListener('click', () =>
            {
                second = 0;
                second2 = 0;
                second3 = 0;
                clearInterval(saat);
                clock.innerText = `0${second}:${second2}${second3}`;
            })
        }
    })
 function startWatch()
 {
    
    second3 += 1;
    if(second3 >9)
    {
        second2 += 1;
        second3 = 0;
    }
    if(second2 > 9)
    {
        second += 1;
        second2 = 0;
    }
    if(second < 10)
    {
        clock.innerText = `0${second}:${second2}${second3}`;
    }
    else
    {
        clock.innerText = `${second}:${second2}${second3}`;
    }
 }