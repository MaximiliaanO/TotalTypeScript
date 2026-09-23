const func = () => {
    //Refactor this to be its own function.
    function randomPercentage() {
        return `${(Math.random() * 100).toFixed(2)}`
    };

    console.log(randomPercentage())
}