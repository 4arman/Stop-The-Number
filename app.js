const number = document.getElementById('text')
const stopBtn = document.getElementById('stop-btn')
const showText = document.getElementById('text2')
const continueBtn = document.getElementById('cont-btn')
//const clearBtn = document.getElementById('re-btn')

let r = 's'

stopBtn.onclick = function() {
    r = 'stop'
}

continueBtn.onclick = function () {
    r = 'cont'
}

/*clearBtn.onclick = function () {
    r = 'c'
}
*/

function delay (setting,time) {
    setInterval(setting,time)
}

let num = 10
if (r === 'cont') {
    num = 50
}

const interval = delay(() => {
    if (r === 'stop') {
        clearInterval(interval)
        showText.textContent = 'You Stop Number' + ' ' + number.textContent + '!'
        number.textContent -=1
    }
    number.textContent++

/*    if (r === 'start') {
        const interval1 = setInterval(() => {
            if (r === 'stop') {
                clearInterval(interval1)
            }
            number.textContent++
        },100)
    }
*/
},num)