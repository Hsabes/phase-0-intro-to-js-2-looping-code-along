let array = ['name1', 'name2', 'name3'];

function writeCards(array, event){
    for (let i = 0; i < 3; i++){
        array[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }
    return array;
}

function countDown(){
    for (let i = 10; i >= 0; i--){
        console.log(i);
    }
}

countDown();