const screen = document.getElementById("screen")

const addValue = (value) => screen.value += value

const clearScreen = () => screen.value = ""

const result = () => {
    display = eval(screen.value) 
    screen.value = display 
}

const deletedNumber = () => {
    const value = screen.value
    if (value.length > 0) {
        screen.value = value.slice(0, -1)
    }
}



