const cronometro = () => {

    const cronometro = document.querySelector('.cronometro')
    const start = document.querySelector('.start')
    const reset = document.querySelector('.reset')
    let pause = false
    let seconds = 0
    let timer;

    const setTimer = (seconds) => {
        const timer = new Date(seconds * 1000)
        return timer.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    const startTimer = () => {
        clearInterval(timer)
        if (pause) {
            cronometro.classList.add('pauseCronometro')
            start.innerHTML = 'start'
            pause = false
        } else {
            cronometro.classList.remove('pauseCronometro')
            start.innerHTML = 'pause'
            pause = true
            timer = setInterval(() => {
                seconds++;
                cronometro.innerHTML = setTimer(seconds)
            }, 1000)
        }
    }
    const resetTime = () => {
        clearInterval(timer)
        cronometro.classList.remove('pauseCronometro')
        seconds = 0
        start.innerHTML = 'start'
        pause = false
        cronometro.innerHTML = setTimer(0)
    }

    start.addEventListener('click', function() {
        startTimer()

    })

    reset.addEventListener('click', () => {
        resetTime()
    })
}
cronometro()