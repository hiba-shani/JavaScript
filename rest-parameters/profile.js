function myProfile(firstName,lastName,...titles){
    let fullName = (`${firstName} ${lastName}`);
    console.log(fullName);
    console.log(titles.join(","));
    

    
}
myProfile("Hiba", "V", "Mern Stack Developer","MSC Computer Science", "BSC Mathematics");