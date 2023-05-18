const emailList = ['ginetta@gmail.com', 'robertino@gmail.com', 'tortellino@gmail.com', 'daho@boolean.careers', 'timoncini@gmail.com'];

const userEmail = prompt('type your email address');

let isMailFound = false;

for( let i = 0; i < emailList.length ; i++){
    if (emailList[i] === userEmail){
        isMailFound = true;
    }
}

if ( isMailFound ){
    console.log('Access valid');
} else {
    console.log('Access denied');
}