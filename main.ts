bitbot.select_model(BBModel.XL)
bitbot.ledRainbow()
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.setLedColor(0xFF0000)
        bitbot.rotate(BBRobotDirection.Left, 10)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.setLedColor(0x0000FF)
        bitbot.rotate(BBRobotDirection.Right, 10)
    } else {
        bitbot.go(BBDirection.Forward, 25)
        bitbot.setLedColor(0x18E600)
    }
})
