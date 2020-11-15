const cronometro = () => {
    let pause = false
        // let seconds = 0
    let time = [0, 0, 0]
    let timer;
    let elementStart;
    const cronometro = document.querySelector('.cronometro')

    // const setTimer = (seconds) => {
    //     const data = new Date(seconds * 1000)
    //     return data.toLocaleTimeString('pt-BR', {
    //         hour12: false,
    //         timeZone: 'UTC'
    //     })
    // }

    const testTimer = () => {
        if (time[2] == 59) {
            time[2] = 00
            if (time[1] == 59) {
                time[1] = 00
                if (time[0] == 23) {
                    time[0] = 00
                } else {
                    time[0] += 1
                }
            } else {
                time[1] += 1
            }
        } else {
            time[2] += 1
        }
        return ((time[0] <= 9) ? '0' + time[0] : time[0]) + ':' + ((time[1] <= 9) ? '0' + time[1] : time[1]) + ':' + ((time[2] <= 9) ? '0' + time[2] : time[2])
    }

    // const startTimer = (element) => {
    //     clearInterval(timer)
    //     elementStart = element
    //     if (pause) {
    //         pause = false
    //         elementStart.innerHTML = 'start'
    //         cronometro.classList.add('pauseCronometro')
    //     } else {
    //         pause = true
    //         element.innerHTML = 'pause'
    //         cronometro.classList.remove('pauseCronometro')
    //         timer = setInterval(() => {
    //             ++seconds;
    //             cronometro.innerHTML = setTimer(seconds)
    //         }, 1000)
    //     }
    // }

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
                cronometro.innerHTML = testTimer()
            }, 1000)
        }
    }

    const resetTime = () => {
        if (elementStart) {
            // seconds = 0
            time = [0, 0, 0]
            pause = false
            clearInterval(timer)
            cronometro.classList.remove('pauseCronometro')
            elementStart.innerHTML = 'start'
            cronometro.innerHTML = '00:00:00'
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