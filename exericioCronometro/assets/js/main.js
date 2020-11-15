const cronometro = () => {

    const cronometro = document.querySelector('.cronometro')
    let pause = false
    let seconds = 0
    let timer;
    let elementStart;
    const setTimer = (seconds) => {
        const timer = new Date(seconds * 1000)
        return timer.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    const startTimer = (element) => {
        clearInterval(timer)
        elementStart = element
        if (pause) {
            cronometro.classList.add('pauseCronometro')
            element.innerHTML = 'start'
            pause = false
        } else {
            cronometro.classList.remove('pauseCronometro')
            element.innerHTML = 'pause'
            pause = true
            timer = setInterval(() => {
                seconds++;
                cronometro.innerHTML = setTimer(seconds)
            }, 1000)
        }
    }
    const resetTime = () => {
        if (elementStart) {
            clearInterval(timer)
            cronometro.classList.remove('pauseCronometro')
            seconds = 0
            elementStart.innerHTML = 'start'
            pause = false
            cronometro.innerHTML = setTimer(0)
        }
    }
    document.addEventListener('click', (e) => {
        const element = e.target;
        if (element.classList.contains('start')) {
            startTimer(element)
        }
        if (element.classList.contains('reset')) {
            resetTime()
        }
    })
}

cronometro()