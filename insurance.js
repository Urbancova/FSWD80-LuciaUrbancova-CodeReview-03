if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
	var ageInput = document.getElementsByClassName('input-age')
    for (var i = 0; i < ageInput.length; i++) {
        var input = ageInput[i]
        input.addEventListener('change', ageChanged)
    }
    var hpInput = document.getElementsByClassName('power-input')
    for (var i = 0; i < hpInput.length; i++) {
        var input = hpInput[i]
        input.addEventListener('change', hpChanged)
    }
    var countryInput = document.getElementsByClassName('country-input')
    for (var i = 0; i < countryInput.length; i++) {
        var input = countryInput[i]
        input.addEventListener('click', countryClicked)
    }

    document.getElementsByClassName('btn')[0].addEventListener('click', calculateInsurance)

}

function hpChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 18
    }
    calculateInsurance()
}

function ageChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 30
    }
    calculateInsurance()
}

function countryClicked(event) {
    var input = event.target
    var country = document.getElementsByClassName('inputAT')
    calculateInsurance()
}

function calculateInsurance() {
    var inputContainer = document.getElementsByClassName('fields')[0]
    var inputs = inputContainer.getElementsByClassName('input')
    var insurance = 0
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i]
        var age = input.getElementsByClassName('input-age')[0]
        var hp = input.getElementsByClassName('power-input')[0]
        var quantity = quantityElement.value
        if (country == Austria) {
        	document.getElementsByClassName('your-insurance')[0].innerText = insurance
        elif (country == Greece)
        	document.getElementsByClassName('your-insurance')[0].innerText = insurance
        	else 
        		document.getElementsByClassName('your-insurance')[0].innerText = insurance

        }

        insurance = hp * 100 / age + 50
    }
}