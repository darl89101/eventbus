class Broadcaster {

    subscribers = [];

    register(subscriber) {
        this.subscribers.push(subscriber);
    }

    signal(arg1, arg2, arg3, arg4, arg5, arg6) {
        this.subscribers.forEach(subscriber => {
            subscriber(arg1);
            subscriber(arg2);
            subscriber(arg3);
            subscriber(arg4);
            subscriber(arg5);
            subscriber(arg6);
        });
    }
}

const broadcast = new Broadcaster();
broadcast.register(functionA)
broadcast.register(functionB)
broadcast.register(functionC)
broadcast.signal(100, 200, 300, 'a', 'b', 'c')

function functionA(args) {
    console.log('functionA: ', args);
}

function functionB(args) {
    console.log('functionB: ', args);
}

function functionC(args) {
    console.log('functionC: ', args);
}
