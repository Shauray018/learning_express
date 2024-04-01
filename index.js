const zod = require("zod"); 

// if this is an array of number with atleaast 1 input, return true, else
// return error
function validateinput(arr) {
    const schema = zod.array(z.number())

    const response = schema.safeParse(arr); 
    console.log(response);
}



validateinput(["1",2,3]);

