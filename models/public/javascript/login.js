




async function signupFormHandler(event){
    event.preventDefault();
    
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });


      //check the response status
      if (response.ok){
        console.log('success');
      } else {
        alert(response.statusText);
      }
    }
}



document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
