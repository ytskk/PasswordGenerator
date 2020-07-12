// Global variables
let copyBtnText = document.getElementById('copy')

function configureString() {
    let alph = 'abcdefghijklmnopqrstuvwxyz' // future result

    let alphC = alph.toUpperCase()
    let num = '0123456789'
    let specSym = ';:\|/.,[]{}()*&^%$#@!+=-_'

    let useAlphC = document.getElementById('diffCase').checked
    let useNum = document.getElementById('numbers').checked
    let useSpedSym = document.getElementById('specSym').checked

    if (useAlphC)
        alph += alphC
    if (useNum)
        alph += num
    if (useSpedSym)
        alph += specSym

    return alph
}

function generate() {
    let lenght = sliderV.value
    let alph = configureString()

    let res = ''
    for (let i = 0; i < lenght; i += 1) {
        res += (alph.charAt(Math.floor(Math.random() *
         (alph.length - 0 + 1))))
    }

    document.getElementById('Password').innerHTML = res // output generated string
    copyBtnText.innerHTML = 'Copy to clipboard' // change copy button text
}

let slider = document.getElementById("range")
let sliderV = document.getElementById("rangeValue")
sliderV.innerHTML = slider.value;

slider.oninput = function() {
  sliderV.value = this.value;
}
sliderV.oninput = function() {
    slider.value = this.value
}

function copy() {
  const copyText = document.getElementById('Password')
  let range = document.createRange()
  range.selectNode(copyText)
  window.getSelection().addRange(range)
  document.execCommand('copy')
  window.getSelection().removeAllRanges()

  copyBtnText.innerHTML = 'Copied' // change copy button text
}
