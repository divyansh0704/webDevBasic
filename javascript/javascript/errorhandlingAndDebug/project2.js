function divide(a, b) {
    try {
        if (b == 0) {

            throw new Error("can't divide by zero");

        }
        console.log("return: ",a/b); 

    } catch (error) {
        console.error("error: ",error.message);

    }

}
divide(5,2);