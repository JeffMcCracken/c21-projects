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
    "neighborhood": {
        "ashfordPlace": {
            "id": 1,
            "property": [
                {
                    "imageSrc": "imgs/ashford-place/18753-mcfall-drive.jpeg",
                    "address": "18753 McFall Drive",
                    "propertyLink": "#"
                },
                {
                    "imageSrc": "imgs/ashford-place/4515-andover-parkway.jpeg",
                    "address": "4515 Andover Parkway",
                    "propertyLink": "#"
                },
                {
                    "imageSrc": "imgs/ashford-place/4515-boyd-place.jpeg",
                    "address": "4515 Boyd Place",
                    "propertyLink": "#"
                }
            ]
        },
        "ashmoor": {
            "id": 2,
            "property": [
                {
                    "imageSrc": "imgs/ashmoor/3531-moorland-lane.jpeg",
                    "address": "3531 Moorland Land",
                    "propertyLink": "#"
                }
            ]
        }
    }
};

// Render the data to the template
var html = cardTemplate(data);
var propertyContainer = document.getElementById("property-container");
propertyContainer.innerHTML = html;

