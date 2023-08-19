const screen = document.getElementById("screen")

const addValue = (value) => screen.value += value

const clearScreen = () => screen.value = ""

const result = () => {
    display = eval(screen.value) 
    screen.value = display 
}




