const text = document.getElementById('text')
const copy = document.getElementById('copy')

const length = document.getElementById('length')
const upper = document.getElementById('upper')
const lower = document.getElementById('lower')
const numbers = document.getElementById('numbers')
const symbol = document.getElementById('symbol')

const generate = document.getElementById('generate')

const upperGen = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerGen = 'abcdefghijklmnopqrstuvwxyz'
const numberGen = '0123456789'
const symbolGen = '!@#$%^&*()_+-=./'


function getUpperGen() {
    return upperGen[Math.floor(Math.random() * upperGen.length)]
}
function getLowerGen() {
    return lowerGen[Math.floor(Math.random() * lowerGen.length)]
}
function getNumberGen() {
    return numberGen[Math.floor(Math.random() * numberGen.length)]
}
function getSymbolGen() {
    return symbolGen[Math.floor(Math.random() * symbolGen.length)]
}


function genPass() {
    let password = ''
    const len = length.value

    if (len >= 1) {
        if (lower.checked || upper.checked || numbers.checked || symbol.checked) {
            for (let i = 0; i < len; i++) {
                let x = genX()
                password += x
                text.innerText = password
            }
        }
        else {
            alert('Please select atleast one CheckBox!')
        }
    }
    else {
        alert('Please enter Length of the Password!')
    }
}


function genX() {
    let arr = []
    if (lower.checked) {
        arr.push(getLowerGen())
    }
    if (upper.checked) {
        arr.push(getUpperGen())
    }
    if (numbers.checked) {
        arr.push(getNumberGen())
    }
    if (symbol.checked) {
        arr.push(getSymbolGen())
    }
    return arr[Math.floor(Math.random() * arr.length)]
}


generate.addEventListener('click', () => {
    genPass()
})

copy.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea')
    const password = text.innerText

    if(!password){
        alert("No Password Generated Yet!")
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    copy.innerText = 'Copied!'
    setTimeout(()=>{
        copy.innerText = 'Copy'
    },5000)
    // alert('Password copied to Clipboard!')
})