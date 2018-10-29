// Handlebars setup
var source = document.getElementById("card-template").innerHTML;
var cardTemplate = Handlebars.compile(source);

// Property data
var data = {layout: 
    [{
        name: "One Floor + One Car Garage",
        property: [
            {
                address: '342 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '366 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '432 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '320 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '378 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '116 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '452 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            }
        ]
    },
    {
        name: "One Floor + Two Car Garage",
        property: [
            {
                address: '216 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '364 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '211 Ariel Court',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '402 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '204 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '219 Ariel Court',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '232 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '387 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '391 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '401 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1106 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$137,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1106_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1307 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$139,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1307_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1001 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$139,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1001_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1118 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$147,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1118_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '3314 Nevada Dr',
                city: 'Anderson',
                zip: '46011',
                price: '$148,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/3314_Nevada_Drive',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1226 S Rangeline Rd',
                city: 'Anderson',
                zip: '46011',
                price: '$149,990',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1226_S_Rangeline_Road',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1105 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$149,990',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1105_Oregon_Way',
                imgSrc: 'imgs/properties/'
            }
        ]
    },
    {
        name: "Two Floor + One Car Garage",
        property: [
            {
                address: '386 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '440 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '460 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '126 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            }
        ]
    },
    {
        name: "Two Floor + Two Car Garage",
        property: [
            {
                address: '274 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '354 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '207 Ariel Court',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '220 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '363 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '197 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '205 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '379 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '395 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '392 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '221 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '',
                link: '',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1123 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$154,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1123_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1007 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$154,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1007_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1301 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$155,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1301_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1112 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$156,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1112_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1204 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$161,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1204_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1002 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$161,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1002_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1111 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$163,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1111_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1313 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$163,990',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1313_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1302 S Rangeline Rd',
                city: 'Anderson',
                zip: '46011',
                price: '$163,990',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1302_S_Rangeline_Road',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1302 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$168,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1302_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1008 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$168,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1008_Oregon_Way',
                imgSrc: 'imgs/properties/'
            },
            {
                address: '1117 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '$170,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1117_Oregon_Way',
                imgSrc: 'imgs/properties/'
            }
        ]
    }
]};

// Render the data to the webpage
var html = cardTemplate(data);
var propertyContainer = document.getElementById("property-display");
propertyContainer.innerHTML = html;

