const cronometro = () => {
    let pause = false
    let seconds = 0
    let timer;
    let elementStart;
    const cronometro = document.querySelector('.cronometro')

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
            pause = false
            elementStart.innerHTML = 'start'
            cronometro.classList.add('pauseCronometro')
        } else {
            pause = true
            element.innerHTML = 'pause'
            cronometro.classList.remove('pauseCronometro')
            timer = setInterval(() => {
                ++seconds;
                cronometro.innerHTML = setTimer(seconds)
            }, 1000)
        }
    }

    const resetTime = () => {
        if (elementStart) {
            seconds = 0
            pause = false
            clearInterval(timer)
            cronometro.classList.remove('pauseCronometro')
            elementStart.innerHTML = 'start'
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