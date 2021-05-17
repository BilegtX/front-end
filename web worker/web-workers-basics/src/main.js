const worker = new Worker(URL.createObjectURL(new Blob(["("+worker_function.toString()+")()"], {type: 'text/javascript'})));

worker.onmessage = e => {
    const message = e.data;
    console.log(`[From Worker]: ${message}`);

    const reply = setTimeout(() => worker.postMessage("Marco!"), 3000)
};

function worker_function() {
    onmessage = e => {
        const message = e.data;
      console.log(`[From Main]: ${message}`);
    
      const reply = setTimeout(() => postMessage("Polo!"), 3000);
    };
}

// if(window != self)
//   worker_function();

worker.postMessage("Marco!");