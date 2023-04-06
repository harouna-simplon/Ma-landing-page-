const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // récupérer les valeurs des champs du formulaire
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  
  // validation des champs
  if (!nom || !email || !telephone) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }
   else{
    
    alert('Merci pour votre demande. local eat vous contactera sous peu !');
    form.submit();
    
  }
  form.reset();
});

