const app = () => {
    const myFunc = () => {
        console.log("hello from myFunc");
    }

    console.log("inside app");
    myFunc();
}

app();