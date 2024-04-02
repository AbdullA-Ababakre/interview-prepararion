const promiseTimeOut = (promise,duration)=>{
    const timeOut = new Promise((_,reject)=>{
        setTimeout(()=>{
            reject("time out");
        },duration);
    })
  
  
    return Promise.race([promise,timeOut])
  }