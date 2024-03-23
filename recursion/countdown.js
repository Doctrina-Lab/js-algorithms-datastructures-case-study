function countdown(num) {
    if (num <= 0) {
        console.log("All Done")
        return
    }
    console.log(num)
    countdown(--num)
}

countdown(5)

module.exports = countdown