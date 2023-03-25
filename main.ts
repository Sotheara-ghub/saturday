let list: number[] = []
input.onButtonPressed(Button.A, function () {
    list = [
    0,
    1,
    2,
    3,
    4
    ]
    for (let value of list) {
        basic.showNumber(value)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index)
    }
})
basic.forever(function () {
	
})
