function myProfile(firstName,lastName,...titles){
    let fullName = (`${firstName} ${lastName}`);
    console.log(fullName);

    titles.forEach((title,index) =>{
        console.log(`${index+1}. ${title}`);
        
    });
    
}
myProfile("Hiba", "V", "Mern Stack Developer","MSC Computer Science", "BSC Mathematics");