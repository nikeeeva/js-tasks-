const path = "/users/download/index.html"

const isHtml = path => {
    const requiredSymbols = ".html";
    const pathSymbols = path.slice(-5);
    

    return pathSymbols === requiredSymbols
    // if (pathSymbols === requiredSymbols) {
    //     return true 
    // }   else {
    //     return false
    // }

}


console.log(isHtml(path));