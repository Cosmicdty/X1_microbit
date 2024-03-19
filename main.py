def on_button_pressed_a():
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
    OLED12864_I2C.show_string(2, 1, "Press", 1)
    OLED12864_I2C.show_string(2, 2, "button", 1)
    OLED12864_I2C.show_string(2, 3, "to start!", 1)
    OLED12864_I2C.rect(38, 0, 63, 14, 1)
    if Pulse_detection >= 0 and Pulse_out <= 120:
        OLED12864_I2C.show_number(9, 1, Math.constrain(Pulse_out, 0, 99), 1)
    else:
        OLED12864_I2C.show_number(9, 1, 0, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    strip.set_brightness(50)
    for j in range(8):
        strip.set_pixel_color(j, neopixel.colors(NeoPixelColors.RED))
        strip.show()
        basic.pause(500)
    music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.tone_playable(294, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    strip.clear()
    strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
    basic.pause(7000)
    music.play(music.tone_playable(330, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.tone_playable(294, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.tone_playable(262, music.beat(BeatFraction.HALF)),
        music.PlaybackMode.UNTIL_DONE)
    strip.clear()
    strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    for k in range(8):
        strip.show()
        strip.set_pixel_color(k, neopixel.colors(NeoPixelColors.BLACK))
        basic.pause(1000)
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    strip.clear()
input.on_button_pressed(Button.B, on_button_pressed_b)

time1 = 0
T = 0
time2 = 0
Counter = 0
Pulse_out = 0
Pulse_detection = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.show_icon(IconNames.HEART)
OLED12864_I2C.init(60)
OLED12864_I2C.clear()
music.set_volume(35)

def on_every_interval():
    OLED12864_I2C.rect(56, 29, 62, 30, 1)
    OLED12864_I2C.rect(58, 26, 61, 27, 1)
    OLED12864_I2C.rect(59, 23, 60, 24, 1)
loops.every_interval(500, on_every_interval)

def on_every_interval2():
    if Pulse_detection >= 0 and Pulse_out <= 120:
        OLED12864_I2C.show_number(9, 1, Math.constrain(Pulse_out, 0, 99), 1)
    else:
        OLED12864_I2C.show_number(9, 1, 0, 1)
loops.every_interval(500, on_every_interval2)

def on_every_interval3():
    OLED12864_I2C.clear()
    OLED12864_I2C.off()
loops.every_interval(300000, on_every_interval3)

def on_forever():
    global Pulse_detection
    Pulse_detection = pins.analog_read_pin(AnalogPin.P2)
basic.forever(on_forever)

def on_forever2():
    serial.write_value("BPM", Pulse_out)
basic.forever(on_forever2)

def on_forever3():
    while input.button_is_pressed(Button.B):
        OLED12864_I2C.clear()
        OLED12864_I2C.rect(0, 0, 63, 30, 1)
        OLED12864_I2C.show_number(9, 1, Math.constrain(Pulse_out, 0, 99), 1)
        OLED12864_I2C.rect(38, 0, 63, 14, 1)
        OLED12864_I2C.show_string(1, 1, "Inhale", 1)
        OLED12864_I2C.show_string(1, 2, "\\ | /", 1)
        basic.pause(4000)
        OLED12864_I2C.clear()
        OLED12864_I2C.rect(0, 0, 63, 30, 1)
        OLED12864_I2C.show_number(9, 1, Math.constrain(Pulse_out, 0, 99), 1)
        OLED12864_I2C.rect(38, 0, 63, 14, 1)
        OLED12864_I2C.show_string(1, 1, "Hold", 1)
        OLED12864_I2C.show_string(1, 2, "---", 1)
        basic.pause(7000)
        OLED12864_I2C.clear()
        OLED12864_I2C.rect(0, 0, 63, 30, 1)
        OLED12864_I2C.show_number(9, 1, Math.constrain(Pulse_out, 0, 99), 1)
        OLED12864_I2C.rect(38, 0, 63, 14, 1)
        OLED12864_I2C.show_string(1, 1, "Exhale", 1)
        OLED12864_I2C.show_string(1, 2, "/ | \\", 1)
        basic.pause(8000)
        OLED12864_I2C.clear()
        OLED12864_I2C.show_string(1, 1, "Done!", 1)
        OLED12864_I2C.rect(0, 0, 63, 30, 1)
        OLED12864_I2C.rect(38, 0, 63, 14, 1)
        basic.pause(15000)
        OLED12864_I2C.off()
basic.forever(on_forever3)

def on_forever4():
    global time2, T, time1, Counter, Pulse_out
    led.plot_bar_graph(Pulse_detection, 1023)
    if Pulse_detection > 870 and Counter == 0:
        time2 = input.running_time()
        T = time2 - time1
        time1 = time2
        Counter = 1
        Pulse_out = (60000 - 60000 % T) / T
    elif Pulse_detection < 430 and Counter == 1:
        Counter = 0
    if Counter == 1:
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
    elif Pulse_out < 30:
        OLED12864_I2C.pixel(48, 3, 1)
        OLED12864_I2C.pixel(49, 3, 1)
        OLED12864_I2C.pixel(50, 3, 1)
        OLED12864_I2C.pixel(51, 3, 1)
        OLED12864_I2C.pixel(52, 3, 1)
    else:
        OLED12864_I2C.pixel(48, 3, 1)
        OLED12864_I2C.pixel(49, 3, 1)
        OLED12864_I2C.pixel(50, 3, 1)
        OLED12864_I2C.pixel(51, 3, 1)
        OLED12864_I2C.pixel(52, 3, 1)
basic.forever(on_forever4)
