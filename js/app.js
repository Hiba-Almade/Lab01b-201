alert('Welcome to our site.. Our mission is to help you find a simple definition of yourself if you find it difficult to do so');
 
 // ask about name
 let userName= prompt("what's your name?");
 alert('Hello '+ userName +', my name is Hiba');
 console.log("what's your name?  "+userName);


// ask about country
 let country= prompt('Where are you from?');
 alert('Hello to all the people of'+country+', I am from Syria');
 console.log('Where are you from?  '+country);

 // ask about study
 let study= prompt('Are you in school or university?');
 alert('I wish you success in '+study+', I finished my university education this year');
 console.log('Are you in school or university?  '+study);

 // ask about hoppy
 let hoppy= prompt('What is your favorite hobby?');
 alert(hoppy+' is really fun I love to read and draw');
 console.log('What is your favorite hobby?  '+hoppy);


// all anser
 alert('Your name is '+userName+', from '+country+', are you in '+study+' now. And you like '+hoppy+' in your spare time.. Nice to meet you');

// write in html doc
 document.write('<p id="anser">Hi, my name is '+userName+". I'm from "+country+" and currently I'm in "+study+".. In my spare time I like to do "+hoppy+"</p>")
