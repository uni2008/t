let tenperatura_neurtu = 0
music.setVolume(127)
basic.forever(function () {
    if (tenperatura_neurtu < 30) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (tenperatura_neurtu < 30) {
        music.playTone(698, music.beat(BeatFraction.Quarter))
        music.playTone(587, music.beat(BeatFraction.Quarter))
    }
})
basic.forever(function () {
    tenperatura_neurtu += input.temperature()
    basic.showString("" + (input.temperature()))
    if (input.temperature() < 30) {
        basic.showIcon(IconNames.Chessboard)
    } else if (input.temperature() > 30) {
        basic.showIcon(IconNames.Square)
    }
})
