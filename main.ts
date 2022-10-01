input.onButtonPressed(Button.A, function () {
    draaien = true
})
let draaien = false

basic.forever(() => {
    while (draaien) {
        basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
        basic.pause(100)
        basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
        basic.pause(100)
        basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
        basic.pause(100)
        basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    }
})
input.onButtonPressed(Button.B, function () {
    draaien = false
})