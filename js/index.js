const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Creating the nav
const navItems = document.querySelectorAll('nav a');


const services = navItems[0];
services.textContent = siteContent['nav']['nav-item-1'];
services.style.color = 'green';

const products = navItems[1];
products.textContent = siteContent['nav']['nav-item-2'];
products.style.color = 'green';

const vision = navItems[2];
vision.textContent = siteContent['nav']['nav-item-3'];
vision.style.color = 'green';

const features = navItems[3];
features.textContent = siteContent['nav']['nav-item-4'];
features.style.color = 'green';

const about = navItems[4];
about.textContent = siteContent['nav']['nav-item-5'];
about.style.color = 'green';

const contact = navItems[5];
contact.textContent = siteContent['nav']['nav-item-6'];
contact.style.color = 'green';

// New Nav Item
const newNav1 = document.createElement('a');
const newNav2 = document.createElement('a');

newNav1.textContent = 'Store';
newNav2.textContent = 'Home';
document.querySelector('nav').appendChild(newNav1);
document.querySelector('nav').prepend(newNav2);
newNav1.style.color = 'green';
newNav2.style.color = 'green';



// Header CTA 
const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

const ctaButton = document.getElementsByTagName('button')[0];
ctaButton.textContent = siteContent['cta']['button'];

const ctaH1 = document.getElementsByTagName('h1')[0];
ctaH1.textContent = siteContent['cta']['h1'];


// Main Content Headings
const featuresHeading = document.getElementsByTagName('h4')[0];
featuresHeading.textContent = siteContent['main-content']['features-h4'];

const aboutHeading = document.getElementsByTagName('h4')[1];
aboutHeading.textContent = siteContent['main-content']['about-h4'];

const servicesHeading = document.getElementsByTagName('h4')[2];
servicesHeading.textContent = siteContent['main-content']['services-h4'];

const productHeading = document.getElementsByTagName('h4')[3];
productHeading.textContent = siteContent['main-content']['product-h4'];

const visionHeading = document.getElementsByTagName('h4')[4];
visionHeading.textContent = siteContent['main-content']['vision-h4'];

// Main Content Picture
const mainImage = document.getElementById('middle-img');
mainImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Main Content Paragraphs

const featuresParagraph = document.getElementsByTagName('p')[0];
featuresParagraph.textContent = siteContent['main-content']["features-content"]

const aboutParagraph = document.getElementsByTagName('p')[1];
aboutParagraph.textContent = siteContent['main-content']["about-content"]

const servicesParagraph = document.getElementsByTagName('p')[2];
servicesParagraph.textContent = siteContent['main-content']["services-content"]

const productParagraph = document.getElementsByTagName('p')[3];
productParagraph.textContent = siteContent['main-content']["product-content"]

const visionParagraph = document.getElementsByTagName('p')[4];
visionParagraph.textContent = siteContent['main-content']["vision-content"]

// Contact

const contactHeading = document.getElementsByTagName('h4')[5];
contactHeading.textContent = siteContent['contact']["contact-h4"];

const address = document.getElementsByTagName('p')[5];
address.textContent = siteContent['contact']["address"];

const phone = document.getElementsByTagName('p')[6];
phone.textContent = siteContent['contact']["phone"];

const email = document.getElementsByTagName('p')[7];
email.textContent = siteContent['contact']["email"];

// Footer 

const footerSection = document.getElementsByTagName('p')[8];
footerSection.textContent = siteContent['footer']['copyright'];