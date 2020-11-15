const cronometro = document.querySelector('.cronometro')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')
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
    timer = setInterval(() => {
        seconds++;
        cronometro.innerHTML = setTimer(seconds)
    }, 1000)
}

const pauseTimer = () => {
    clearInterval(timer)
}

const resetTime = () => {
    clearInterval(timer)
    seconds = 0
    cronometro.innerHTML = setTimer(0)
}

start.addEventListener('click', function() {
    startTimer()
})
pause.addEventListener('click', () => {
    pauseTimer()
})
reset.addEventListener('click', () => {
    resetTime()
})