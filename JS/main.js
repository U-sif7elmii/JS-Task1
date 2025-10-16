// Home Page
document.getElementById("navItem1").innerHTML = "About Us";
document.getElementById("navItem2").innerHTML = "Our Products";
document.getElementById("navItem3").innerHTML = "We Supply";
document.getElementById("navItem4").innerHTML = "Contact Us";
document.getElementById("homeContent1").innerHTML = "BUILDING MATERIALS";
document.getElementById("homeContent2").innerHTML = `Building success, <br>
one material, <br>
at a time`;

function scrollIcon(x,y){
  window.scrollBy(x,y)
}

function scrollToDiv(sec){
  document.getElementById(sec).scrollIntoView()
}

// About Page
document.getElementById("aboutContent1").innerHTML = "About Us";
document.getElementById("aboutContent2").innerHTML = "What We Do?";
document.getElementById("aboutContent3").innerHTML ="We are specialized in sourcing and providing high-quality building materials to meet the diverse needs of construction projects, ensuring excellence in every structure we contribute to.";
document.getElementById("aboutContent4").innerHTML = "What we offer?";
document.getElementById("aboutContent5").innerHTML ="We offer a comprehensive range of top-notch building materials, providing clients with a one-stop solution for their construction needs.";
document.getElementById("aboutContent6").innerHTML = "Our Services";
document.getElementById("aboutContent7").innerHTML ="Your one-stop solution for hassle-free project material procurement, providing top-quality materials and expert guidance.";

// Contact Page
function checkForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("sub").value;
    let message = document.getElementById("mes").value;

    if (name == "" || email == "" || phone == "" || subject == "" || message == "") {
      alert("Please fill all fields!");
    } else {
      alert("Form submitted successfully!");
    }
  }