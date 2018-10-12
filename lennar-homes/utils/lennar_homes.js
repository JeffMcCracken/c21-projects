// Initialize my carousel
$(document).ready(function(){
    $('.carousel').slick({
        arrows: false,
        dots: true
    });
});

// Handlebars setup
var source = document.getElementById("card-template").innerHTML;
var cardTemplate = Handlebars.compile(source);

// Property data
var data = {
    neighborhood: [
        {
            name: "Ashford Place",
            property: [
                {
                    imageSrc: "imgs/ashford-place/18753-mcfall-drive.jpeg",
                    address: "18753 McFall Drive",
                    propertyLink: "#"
                },
                {
                    imageSrc: "imgs/ashford-place/4515-andover-parkway.jpeg",
                    address: "4515 Andover Parkway",
                    propertyLink: "#"
                },
                {
                    imageSrc: "imgs/ashford-place/4515-boyd-place.jpeg",
                    address: "4515 Boyd Place",
                    propertyLink: "#"
                }
            ]
        },
        {
            name: "Ashmoor",
            property: [
                {
                    imageSrc: "imgs/ashmoor/3531-moorland-lane.jpeg",
                    address: "3531 Moorland Land",
                    propertyLink: "#"
                }
            ]
        },
        {
            name: "Bridger Pines",
            property: [
                {
                    imageSrc: "imgs/bridger-pines/16252-sedalio-drive.jpeg",
                    address: "16252 Sedalio Drive",
                    propertyLinkk: "#"
                }
            ]
        }
    ]
};

// Render the data to the webpage
var html = cardTemplate(data);
var propertyContainer = document.getElementById("property-display");
propertyContainer.innerHTML = html;

