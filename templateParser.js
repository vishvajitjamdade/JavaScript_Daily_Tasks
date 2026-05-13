function replacePlaceholders(template,values){
    return template.replace(/{{(.*?)}}/g,(match,key) => {
        key = key.trim();

        //return value if key existes, otherwise keep placeholder
        return values[key] !== undefined ? values[key] : match;
    });
}

//template string
let template = "Hello {{name}}, welcome to {{company}}!";

//object containing values
let data  = {
    name : "vishvajit",
    company : "OpenAI"
};

//generate final string
let result = replacePlaceholders(template,data);

console.log(result);