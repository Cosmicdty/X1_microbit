input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.clear()
    OLED12864_I2C.on()
    OLED12864_I2C.pixel(0, 0, 1)
    OLED12864_I2C.pixel(0, 1, 1)
    OLED12864_I2C.pixel(0, 2, 1)
    OLED12864_I2C.pixel(0, 3, 1)
    OLED12864_I2C.pixel(0, 4, 1)
    OLED12864_I2C.pixel(0, 5, 1)
    OLED12864_I2C.pixel(0, 6, 1)
    OLED12864_I2C.pixel(1, 1, 1)
    OLED12864_I2C.pixel(2, 2, 1)
    OLED12864_I2C.pixel(3, 3, 1)
    OLED12864_I2C.pixel(4, 4, 1)
    OLED12864_I2C.pixel(5, 5, 1)
    OLED12864_I2C.pixel(6, 6, 1)
    OLED12864_I2C.pixel(6, 5, 1)
    OLED12864_I2C.pixel(6, 4, 1)
    OLED12864_I2C.pixel(6, 3, 1)
    OLED12864_I2C.pixel(6, 2, 1)
    OLED12864_I2C.pixel(6, 1, 1)
    OLED12864_I2C.pixel(6, 0, 1)
    OLED12864_I2C.showString(
    2,
    1,
    "Press",
    1
    )
    OLED12864_I2C.showString(
    2,
    2,
    "button",
    1
    )
    OLED12864_I2C.showString(
    2,
    3,
    "to start!",
    1
    )
    OLED12864_I2C.rect(
    38,
    0,
    63,
    14,
    1
    )
    if (Pulse_detection >= 0 && Pulse_out <= 120) {
        OLED12864_I2C.showNumber(
        9,
        1,
        Math.constrain(Pulse_out, 0, 99),
        1
        )
    } else {
        OLED12864_I2C.showNumber(
        9,
        1,
        0,
        1
        )
    }
})
input.onButtonPressed(Button.B, function () {
    strip.setBrightness(50)
    for (let j = 0; j <= 7; j++) {
        strip.setPixelColor(j, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(500)
    }
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    strip.clear()
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(7000)
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    strip.clear()
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    for (let k = 0; k <= 7; k++) {
        strip.show()
        strip.setPixelColor(k, neopixel.colors(NeoPixelColors.Black))
        basic.pause(1000)
    }
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.clear()
})
let time1 = 0
let T = 0
let time2 = 0
let Counter = 0
let Pulse_out = 0
let Pulse_detection = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.showIcon(IconNames.Heart)
OLED12864_I2C.init(60)
OLED12864_I2C.clear()
music.setVolume(35)
loops.everyInterval(500, function () {
    OLED12864_I2C.rect(
    56,
    29,
    62,
    30,
    1
    )
    OLED12864_I2C.rect(
    58,
    26,
    61,
    27,
    1
    )
    OLED12864_I2C.rect(
    59,
    23,
    60,
    24,
    1
    )
})
loops.everyInterval(500, function () {
    if (Pulse_detection >= 0 && Pulse_out <= 120) {
        OLED12864_I2C.showNumber(
        9,
        1,
        Math.constrain(Pulse_out, 0, 99),
        1
        )
    } else {
        OLED12864_I2C.showNumber(
        9,
        1,
        0,
        1
        )
    }
})
loops.everyInterval(300000, function () {
    OLED12864_I2C.clear()
    OLED12864_I2C.off()
})
basic.forever(function () {
    Pulse_detection = pins.analogReadPin(AnalogPin.P2)
})
basic.forever(function () {
    serial.writeValue("BPM", Pulse_out)
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        OLED12864_I2C.clear()
        OLED12864_I2C.rect(
        0,
        0,
        63,
        30,
        1
        )
        OLED12864_I2C.showNumber(
        9,
        1,
        Math.constrain(Pulse_out, 0, 99),
        1
        )
        OLED12864_I2C.rect(
        38,
        0,
        63,
        14,
        1
        )
        OLED12864_I2C.showString(
        1,
        1,
        "Inhale",
        1
        )
        OLED12864_I2C.showString(
        1,
        2,
        "\\ | /",
        1
        )
        basic.pause(4000)
        OLED12864_I2C.clear()
        OLED12864_I2C.rect(
        0,
        0,
        63,
        30,
        1
        )
        OLED12864_I2C.rect(
        38,
        0,
        63,
        14,
        1
        )
        OLED12864_I2C.showString(
        1,
        1,
        "Hold",
        1
        )
        OLED12864_I2C.showString(
        1,
        2,
        "---",
        1
        )
        basic.pause(7000)
        OLED12864_I2C.clear()
        OLED12864_I2C.rect(
        0,
        0,
        63,
        30,
        1
        )
        OLED12864_I2C.showNumber(
        9,
        1,
        Math.constrain(Pulse_out, 0, 99),
        1
        )
        OLED12864_I2C.rect(
        38,
        0,
        63,
        14,
        1
        )
        OLED12864_I2C.showString(
        1,
        1,
        "Exhale",
        1
        )
        OLED12864_I2C.showString(
        1,
        2,
        "/ | \\",
        1
        )
        basic.pause(8000)
        OLED12864_I2C.clear()
        OLED12864_I2C.showString(
        1,
        1,
        "Done!",
        1
        )
        OLED12864_I2C.rect(
        0,
        0,
        63,
        30,
        1
        )
        OLED12864_I2C.rect(
        38,
        0,
        63,
        14,
        1
        )
        basic.pause(15000)
        OLED12864_I2C.off()
    }
})
basic.forever(function () {
    led.plotBarGraph(
    Pulse_detection,
    1023
    )
    if (Pulse_detection > 870 && Counter == 0) {
        time2 = input.runningTime()
        T = time2 - time1
        time1 = time2
        Counter = 1
        Pulse_out = (60000 - 60000 % T) / T
    } else if (Pulse_detection < 430 && Counter == 1) {
        Counter = 0
    }
    if (Counter == 1) {
        OLED12864_I2C.pixel(50, 3, 1)
        OLED12864_I2C.pixel(50, 4, 1)
        OLED12864_I2C.pixel(49, 2, 1)
        OLED12864_I2C.pixel(51, 4, 1)
        OLED12864_I2C.pixel(51, 2, 1)
        OLED12864_I2C.pixel(48, 3, 1)
        OLED12864_I2C.pixel(52, 3, 1)
        OLED12864_I2C.pixel(49, 4, 1)
        OLED12864_I2C.pixel(51, 4, 1)
        OLED12864_I2C.pixel(50, 5, 1)
    } else if (Pulse_out < 30) {
        OLED12864_I2C.pixel(48, 3, 1)
        OLED12864_I2C.pixel(49, 3, 1)
        OLED12864_I2C.pixel(50, 3, 1)
        OLED12864_I2C.pixel(51, 3, 1)
        OLED12864_I2C.pixel(52, 3, 1)
    } else {
        OLED12864_I2C.pixel(48, 3, 1)
        OLED12864_I2C.pixel(49, 3, 1)
        OLED12864_I2C.pixel(50, 3, 1)
        OLED12864_I2C.pixel(51, 3, 1)
        OLED12864_I2C.pixel(52, 3, 1)
    }
})
