const messageOne = ['this is message one', 'keep it up', 'you are doing great job'];
const messageTwo = ['this is message two', 'well done my boy so what you want to do', 'nohing just chill'];
const messageThree = ['this id message three', 'now you know three', 'its three'];

const getrandomMessage = () =>{
    const randomNumberOne = Math.floor(Math.random() * messageOne.length);
    const randomNumberTwo = Math.floor(Math.random() * messageTwo.length);
    const randomNumberThree = Math.floor(Math.random() * messageThree.length);

    const randomText1 = messageOne[randomNumberOne];
    const randomText2 = messageTwo[randomNumberTwo];
    const randomText3 = messageThree[randomNumberThree];

    const finalText = `${randomText1} ${randomText2} ${randomText3}`;
    return finalText; 
}

const randomMessage = getrandomMessage();
console.log(randomMessage);