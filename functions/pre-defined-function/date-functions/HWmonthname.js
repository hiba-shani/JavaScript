let now = new Date();
let formateDate = now.toLocaleDateString('en-IN', {
    day:'2-digit',
    month:'long',
    year:'numeric',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit',
    hour12:true

});
console.log(formateDate);
