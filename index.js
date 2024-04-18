const sendData = (event) => {
  event.preventDefault();
  console.log(event);
  const username = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;
  if(username=='' || email=='' || phone==''){
    alert(`Please enter Valid Data`);
  }
  const user = {
    name: username,
    email: email,
    phone: phone,
  };
  const key = username + "$" + phone;
  localStorage.setItem(key, JSON.stringify(user));
  console.log(JSON.parse(localStorage.getItem(key)));
};
