const aplicants = Array(10500000)
const selected = []
for (let i = 0; i < aplicants.length; i++){
    aplicants[i] = 'aplicant for applicant ' + i
}

for (let i = 0 ; i < aplicants.length ; i++){
    const select = Math.floor(Math.random() * aplicants.length)
    selected.push(select)
}

console.log({selected})