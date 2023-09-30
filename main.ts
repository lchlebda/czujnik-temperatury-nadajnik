radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    basic.pause(10000)
})
