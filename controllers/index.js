
const home = (req, res) => {
    res.send('FullStack Master!! !!')
}

const pageOne = (req, res) => {
    res.send('Page one!! !')
}
const calculator = (req, res) => {
    //console.log(req.query)

    if(req.query.num1 && req.query.num2){
        //const sum = parseFloat(req.query.num1) + parseFloat(req.query.num2)
        const { num1, num2} = req.query
        const sum = parseFloat(num1) + parseFloat(num2)
        console.log('The sum is: ' +sum)
    }else{
        res.send('Calculator!! !!')
    }
}
const pair = (req, res) => {
    const isPair = (req.params.num % 2) ===0
    if(isPair){
        res.send('Number is pair!')
    }else{
        res.send('Num is odd!')
    }
}

module.exports = {
    home, pageOne, calculator, pair
}

//Code WEB:
// ? => to start an operation
// num1=1 => name variable i want
// = => continue
// & => more the one
// "test": "echo \"Error: no test specified\" && exit 1"