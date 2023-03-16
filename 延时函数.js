function timer() {
    setTimeout(() => {
        console.log(3)
    }, 1000);
}

async function delay() {
    await timer()
}



console.log(1)

delay()

console.log(2)