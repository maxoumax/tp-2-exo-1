function Mouvement () {
    led1 = led2
    led2 = led3
    led3 = led4
    led4 = led5
    if (led5 == 4) {
        Dir = -1
    } else if (led5 == 0) {
        Dir = 1
    }
    led5 += Dir
}
let Dir = 0
let led1 = 0
let led2 = 0
let led3 = 0
let led4 = 0
let led5 = 0
let liste = [0, 1, 2, 3, 4]
led5 = liste.pop()
led4 = liste.pop()
led3 = liste.pop()
led2 = liste.pop()
led1 = liste.pop()
basic.forever(function () {
    led.unplot(0, led1)
    led.unplot(1, led2)
    led.unplot(2, led3)
    led.unplot(3, led4)
    led.unplot(4, led5)
    Mouvement()
    led.plot(0, led1)
    led.plot(1, led2)
    led.plot(2, led3)
    led.plot(3, led4)
    led.plot(4, led5)
    basic.pause(100)
})
