function firstTask(callback) {
    setTimeout(() => {
        console.log("First task done");
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log("Second task done");
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log("Third task done");
        callback();
    }, 1000);
}

function fourthTask(callback) {
    setTimeout(() => {
        console.log("Fourth task done");
        callback();
    }, 1000);
}

// Callback Hell
firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            fourthTask(() => {
                console.log("All tasks done!");
            });
        });
    });
});
