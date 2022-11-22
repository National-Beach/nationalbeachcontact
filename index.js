function sendMail(){
  var params = {
    name: document.getElementById("name").value ,
    message: document.getElementById("message").value ,
  };
}
const serviceID = "service_hxgy4pq";
const templateID = "template_88xvqpg";

emailjs.send(serviceID,templateID,params)
.then(
  res =>{
    name: document.getElementById("name").value = "";
    message: document.getElementById("message").value = "";
    console.log(res);
    alert("Your message has been sent successfully. We will contact you in discord as soon as we can!")
  });
.catch((err) => console.log(err));
