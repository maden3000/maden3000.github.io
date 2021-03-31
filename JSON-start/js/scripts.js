fetch ("info.json")
.then((mydata)=> (mydata.json))
.then((mydata) => {
        console.log(mydata);
    });