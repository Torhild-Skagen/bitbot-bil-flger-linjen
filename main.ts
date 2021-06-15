bitbot.select_model(BBModel.XL)
bitbot.ledRainbow()
bitbot.ledRotate()
bitbot.buzz(false)
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 0)
        bitbot.move(BBMotor.Right, BBDirection.Forward, 15)
        bitbot.setLedColor(0x0000FF)
    } else if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 15)
        bitbot.move(BBMotor.Right, BBDirection.Forward, 0)
        bitbot.setLedColor(0xFF0000)
    } else {
        bitbot.move(BBMotor.Both, BBDirection.Forward, 15)
        bitbot.setLedColor(0x18E600)
    }
})
