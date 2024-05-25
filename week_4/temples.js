let d = new Date();
document.getElementById("currentYear").innerHtml = '&copy;${d.getFullYear()}'
document.querySelector("#lastModified").textContent = 'last Modification: ${document.lastModified}';

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click',() => {});

function toggleActive(element) {};

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Durban,South Africa"
        location: "Durban, South Africa"
        dedicated: "16 February 2020"
        area:
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/1-8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8.jpg"
      },
    {
        templeName: "Johannesburg South Africa"
        location: "Johannesburg South Africa"
        dedicated: "24 August 1985"
        area:
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
      },
    {
        templeName: "Accra Ghana"
        location: "Accra Ghana"
        dedicated: "11 Jan 2004"
        area:
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
      },
];

function createTempleCard(filteredTemples) {
    filteredTemples.array.forEach(element => {
        let card = document.createElement("section")
        let name = document.createElement("h3")
        let location = document.createElement("p")
        let dedication = document.createElement("p")
        let area = document.createElement("p")
        let img = document.createElement("img")
        
        name.textContent = temple.templeName;
        location.innerHTML = '<span class-"label">location: </span> ${temple location}';
        dedicated.innerHTML = '<span class - "label">dedicated: </span> ${dedicated}';
        area.innerHTML = '<span class - "label"> area: </span> ${area} sq ft' ;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', '${temple.templeName} Temple');
        img.setAttribute("loading", "lazy");

        card.appendChild('name');
        card.appendChild('location');
        card.appendChild('dedication');
        card.appendChild('area');
        card.appendChild('img');

        function filterTemples(criteria) {
            switch (criteria) {
                case 'Old':
                    return temples.filter(t => t.yearBuilt < 1900);
                case 'New':
                    return temples.filter(t => t.yearBuilt > 2000);
                case 'Large':
                    return temples.filter(t => t.size > 90000);
                case 'Small':
                    return temples.filter(t => t.size < 10000);
                case 'Home':
                    return temples; 
                default:
                    return []; 
            }
        }
        
        
        const filteredOldTemples = filterTemples('Old');
        console.log(filteredOldTemples);
        
        const filteredNewTemples = filterTemples('New');
        console.log(filteredNewTemples);

        const filteredLargeTemples = filterTemples('Large');
        console.log(filteredLargeTemples);

        const filteredSmallTemples = filterTemples('Small');
        console.log(filteredSmallTemples);

        const filteredHomeTemples = filterTemples('Home');
        console.log(filteredHomeTemples);
    });
}