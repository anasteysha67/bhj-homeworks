const signin = document.querySelector('.signin');
const form = document.getElementById('signin__form');                       
const userId = document.getElementById('user_id');                          

if((localStorage.getItem('userID')) !== null){                              
   welcome(localStorage.getItem('userID'));
}

function welcome(idValue){                                                  
    signin.classList.remove('signin_active');                                     
    userId.textContent = idValue;
    document.querySelector('.welcome').classList.add('welcome_active');
    setTimeout(() => {                                                      
        document.querySelector('.welcome').classList.remove('welcome_active');
    }, 4000 )
}

form.addEventListener('submit', function(e) { 
    e.preventDefault();                                                        
                                          
    let xhr = new XMLHttpRequest(); 
    formData = new FormData(form); 

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php'); 
           
    xhr.addEventListener('readystatechange', () => {                            
        if(xhr.readyState === xhr.DONE) {
            if(JSON.parse(xhr.responseText)["success"] === true) {
                let userIdValue = JSON.parse(xhr.responseText)["user_id"];  
                localStorage.setItem('userID', userIdValue)                 
                welcome(userIdValue);                                        
            } else {                                            
                alert('Неверный логин/пароль')
            }
            document.querySelectorAll('input.control')[0].value = null;     
            document.querySelectorAll('input.control')[1].value = null;
        }
    })

    xhr.onerror = function(){
        alert('Проверьте соединение с интернетом!');
    };

    xhr.send(formData);
})