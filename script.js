// try and catch 
function divide (a,b) {
    try {   
       if(b == 0) {
        throw Error("Cannot divide by zero")
       } 
       console.log(a/b);
    }
    catch(err) {
        console.error(err);
    }
}
divide(10,0)


//fetch api 
fetch(`https://randomuser.me/api/`)
//raw.json converts the raw data into json
.then(raw => raw.json())
.then(data => console.log(data.results[0].gender))





//axious
 axios.get('https://randomuser.me/api/')
 .then(result => console.log(result.data.results[0].gender))
 



 //promise 
  const promise = new Promise((resolve,reject)=> {
    fetch(`https://randomuser.me/api/`)
    .then (raw => raw.json())
    .then(data => {
        if (data.results[0].gender == "male") resolve();
        else reject();
    });
});

promise .then(()=> console.log("success"))
.catch(()=> console.log("error"))


//call backs
 function fetchingdata(url,cb) {
    fetch(url)
    .then(raw => raw.json())
    .then(data => {
        cb();
    })
 }
fetchingdata("https://randomuser.me/api/",function(){
    console.log("hello")
})


//async/await
async function abcd () {
    let a = await fetch(`https://randomuser.me/api/`);
    a = await a.json();
    console.log(a.results[0].gender)

}



//generators
function* print() {
    yield 1;
    console.log("print1")
    yield 2;
    console.log("print2")
    yield 3;
    console.log("print3")
}
const ans = print();
console.log(ans.next().value)
console.log(ans.next().value)
console.log(ans.next().value)
console.log(ans.next())


//webworkers
