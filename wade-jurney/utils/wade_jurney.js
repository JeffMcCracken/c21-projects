// Initialize my carousel
$(document).ready(function(){
    $('.carousel').slick({
        dots: true
    });
});

// Handlebars setup
var source = document.getElementById("card-template").innerHTML;
var cardTemplate = Handlebars.compile(source);

// Property data
var data = {model: 
    [{
        id: '1001a',
        name: 'Elevation A',
        squareFeet: '1001',
        numBed: '3',
        numBath: '2',
        numGarage: '1',
        stockImg: 'imgs/models/1001-a.jpg',
        realImg: 'imgs/models/1001-a-real.jpg',
        layoutImg: 'imgs/models/1001-a-layout.jpg',
        property: [
            {
                address: '342 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '115,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-5835/Kokomo/342_W_300_N'
            },
            {
                address: '432 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '121,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-5835/Kokomo/432_W_300_N'
            }
        ]
    },
    {   
        id: '1001b',
        name: 'Elevation B',
        squareFeet: '1001',
        numBed: '3',
        numBath: '2',
        numGarage: '1',
        stockImg: 'imgs/models/1001-b.jpg',
        realImg: 'imgs/models/1001-b-real.jpg',
        layoutImg: 'imgs/models/1001-b-layout.jpg',
        property: [
            {
                address: '366 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '116,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-5835/Kokomo/366_W_300_N'
            }
        ]
    },
    {
        id: '1201a',
        name: 'Elevation A',
        squareFeet: '1201',
        numBed: '4',
        numBath: '2',
        numGarage: '1',
        stockImg: 'imgs/models/1201-a.jpg',
        realImg: 'imgs/models/1201-a-real.jpg',
        layoutImg: 'imgs/models/1201-a-layout.jpg',
        property: [
            {
                address: '320 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '125,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-5835/Kokomo/320_W_300_N'
            },
            {
                address: '116 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '131,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-5835/Kokomo/116_W_300_N'
            }
        ]
    },
    {
        id: '1201b',
        name: 'Elevation B',
        squareFeet: '1201',
        numBed: '4',
        numBath: '2',
        numGarage: '1',
        stockImg: 'imgs/models/1201-b.jpg',
        realImg: 'imgs/models/1201-b-real.jpg',
        layoutImg: 'imgs/models/1201-b-layout.jpg',
        property: [
            {
                address: '378 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '127,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-5835/Kokomo/378_W_300_N'
            },
            {
                address: '452 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '133,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-5835/Kokomo/452_W_300_N'
            }
        ]
    },
    {
        id: '1202a',
        name: 'Elevation A',
        squareFeet: '1202',
        numBed: '3',
        numBath: '2',
        numGarage: '2',
        stockImg: 'imgs/models/1202-a.jpg',
        realImg: 'imgs/models/1202-a-real.jpg',
        layoutImg: 'imgs/models/1202-a-layout.jpg',
        property: [
            {
                address: '216 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '133,490',
                link: 'https://www.century21.com/property/216-Luke-Ct-Kokomo-IN-46901/29031955/detail'
            },
            {
                address: '364 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '133,490',
                link: 'https://www.century21.com/property/364-Ariel-Dr-Kokomo-IN-46901/94637617/detail'
            },
            {
                address: '402 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '139,490',
                link: 'https://www.century21.com/property/402-Ariel-Dr-Kokomo-IN-46901/94875485/detail'
            },
            {
                address: '1106 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '137,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1106_Oregon_Way'
            }
        ]
    },
    {
        id: '1202b',
        name: 'Elevation B',
        squareFeet: '1202',
        numBed: '3',
        numBath: '2',
        numGarage: '2',
        stockImg: 'imgs/models/1202-b.jpg',
        realImg: 'imgs/models/1202-b-real.jpg',
        layoutImg: 'imgs/models/1202-b-layout.jpg',
        property: [
            {
                address: '211 Ariel Court',
                city: 'Kokomo',
                zip: '46901',
                price: '135,490',
                link: 'https://www.century21.com/property/211-Ariel-Ct-Kokomo-IN-46901/94637611/detail'
            },
            {
                address: '391 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '141,490',
                link: 'https://www.century21.com/property/391-Ariel-Dr-Kokomo-IN-46901/94875495/detail'
            },
            {
                address: '1307 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '139,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1307_Oregon_Way'
            },
            {
                address: '1001 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '139,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1001_Oregon_Way'
            }
        ]
    },
    {
        id: '1402a',
        name: 'Elevation A',
        squareFeet: '1402',
        numBed: '3',
        numBath: '2',
        numGarage: '2',
        stockImg: 'imgs/models/1402-a.jpg',
        realImg: 'imgs/models/1402-a-real.jpg',
        layoutImg: 'imgs/models/1402-a-layout.jpg',
        property: [
            {
                address: '204 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '139,490',
                link: 'https://www.century21.com/property/204-Luke-Ct-Kokomo-IN-46901/29031958/detail'
            },
            {
                address: '219 Ariel Court',
                city: 'Kokomo',
                zip: '46901',
                price: '139,490',
                link: 'https://www.century21.com/property/219-Ariel-Ct-Kokomo-IN-46901/94638209/detail'
            },
            {
                address: '232 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '139,490',
                link: 'https://www.century21.com/property/232-Luke-Ct-Kokomo-IN-46901/94638211/detail'
            },
            {
                address: '387 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '139,490',
                link: 'https://www.century21.com/property/387-Ariel-Dr-Kokomo-IN-46901/94637629/detail'
            },
            {
                address: '1118 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '147,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1118_Oregon_Way'
            },
            {
                address: '3314 Nevada Dr',
                city: 'Anderson',
                zip: '46011',
                price: '148,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/3314_Nevada_Drive'
            },
            {
                address: '1226 S Rangeline Rd',
                city: 'Anderson',
                zip: '46011',
                price: '149,990',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1226_S_Rangeline_Road'
            }
        ]
    },
    {
        id: '1402b',
        name: 'Elevation B',
        squareFeet: '1402',
        numBed: '3',
        numBath: '2',
        numGarage: '2',
        stockImg: 'imgs/models/1402-b.jpg',
        layoutImg: 'imgs/models/1402-b-layout.jpg',
        property: [
            {
                address: '401 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '151,490',
                link: 'https://www.century21.com/property/401-Ariel-Dr-Kokomo-IN-46901/94869025/detail'
            },
            {
                address: '1105 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '149,990',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1105_Oregon_Way'
            }
        ]
    },
    {
        id: '1602a',
        name: 'Elevation A',
        squareFeet: '1602',
        numBed: '3',
        numBath: '2.5',
        numGarage: '2',
        stockImg: 'imgs/models/1602-a.jpg',
        realImg: 'imgs/models/1602-a-real.jpg',
        layoutImg: 'imgs/models/1602-a-layout.jpg',
        layoutTwoImg: 'imgs/models/1602-a-layout-two.jpg',
        property: [
            {
                address: '1123 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '154,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1123_Oregon_Way'
            },
            {
                address: '1007 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '154,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1007_Oregon_Way'
            },
            {
                address: '1301 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '155,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1301_Oregon_Way'
            }
        ]
    },
    {
        id: '1602b',
        name: 'Elevation B',
        squareFeet: '1602',
        numBed: '3',
        numBath: '2.5',
        numGarage: '2',
        stockImg: 'imgs/models/1602-b.jpg',
        layoutImg: 'imgs/models/1602-b-layout.jpg',
        layoutTwoImg: 'imgs/models/1602-b-layout-two.jpg',
        property: [
            {
                address: '1112 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '156,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1112_Oregon_Way'
            }
        ]
    },
    {
        id: '1801a',
        name: 'Elevation A',
        squareFeet: '1801',
        numBed: '4',
        numBath: '2.5',
        numGarage: '1',
        stockImg: 'imgs/models/1801-a.jpg',
        realImg: 'imgs/models/1801-a-real.jpg',
        layoutImg: 'imgs/models/1801-a-layout.jpg',
        layoutTwoImg: 'imgs/models/1801-a-layout-two.jpg',
        property: [
            {
                address: '274 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '146,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-7819/Kokomo/274_W_300_N'
            },
            {
                address: '354 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '146,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-7819/Kokomo/354_W_300_N'
            },
            {
                address: '386 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '$152,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-5835/Kokomo/386_W_300_N'
            }
        ]
    },
    {
        id: '1801b',
        name: 'Elevation B',
        squareFeet: '1801',
        numBed: '4',
        numBath: '2.5',
        numGarage: '1',
        stockImg: 'imgs/models/1801-b.jpg',
        layoutImg: 'imgs/models/1801-b-layout.jpg',
        layoutTwoImg: 'imgs/models/1801-b-layout-two.jpg',
        property: [
            {
                address: '440 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '154,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-5835/Kokomo/440_W_300_N'
            }
        ]
    },
    {
        id: '1802a',
        name: 'Elevation A',
        squareFeet: '1802',
        numBed: '4',
        numBath: '3',
        numGarage: '2',
        stockImg: 'imgs/models/1802-a.jpg',
        realImg: 'imgs/models/1802-a-real.jpg',
        layoutImg: 'imgs/models/1802-a-layout.jpg',
        layoutTwoImg: 'imgs/models/1802-a-layout-two.jpg',
        property: [
            {
                address: '207 Ariel Court',
                city: 'Kokomo',
                zip: '46901',
                price: '157,490',
                link: 'https://www.century21.com/property/207-Ariel-Ct-Kokomo-IN-46901/94638215/detail'
            },
            {
                address: '220 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '157,490',
                link: 'https://www.century21.com/property/220-Luke-Ct-Kokomo-IN-46901/29031954/detail'
            },
            {
                address: '363 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '157,490',
                link: 'https://www.century21.com/property/363-Ariel-Dr-Kokomo-IN-46901/94638217/detail'
            },
            {
                address: '1204 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '161,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1204_Oregon_Way'
            },
            {
                address: '1002 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '161,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1002_Oregon_Way'
            },
            {
                address: '1302 S Rangeline Rd',
                city: 'Anderson',
                zip: '46011',
                price: '163,990',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1302_S_Rangeline_Road'
            }
        ]
    },
    {
        id: '1802b',
        name: 'Elevation B',
        squareFeet: '1802',
        numBed: '4',
        numBath: '3',
        numGarage: '2',
        stockImg: 'imgs/models/1802-b.jpg',
        realImg: 'imgs/models/1802-b-real.jpg',
        layoutImg: 'imgs/models/1802-b-layout.jpg',
        layoutTwoImg: 'imgs/models/1802-b-layout-two.jpg',
        property: [
            {
                address: '197 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '159,490',
                link: 'https://www.century21.com/property/197-Luke-Ct-Kokomo-IN-46901/29031960/detail'
            },
            {
                address: '395 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '165,490',
                link: 'https://www.century21.com/property/395-Ariel-Dr-Kokomo-IN-46901/94875497/detail'
            },
            {
                address: '1111 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '163,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1111_Oregon_Way'
            },
            {
                address: '1313 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '163,990',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1313_Oregon_Way'
            }
        ]
    },
    {
        id: '2001a',
        name: 'Elevation A',
        squareFeet: '2001',
        numBed: '4',
        numBath: '3',
        numGarage: '1',
        stockImg: 'imgs/models/2001-a.jpg',
        layoutImg: 'imgs/models/2001-a-layout.jpg',
        layoutTwoImg: 'imgs/models/2001-a-layout-two.jpg',
        property: [
            {
                address: '460 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '155,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-7820/Kokomo/460_W_300_N'
            }
        ]
    },
    {
        id: '2001b',
        name: 'Elevation B',
        squareFeet: '2001',
        numBed: '4',
        numBath: '3',
        numGarage: '1',
        stockImg: 'imgs/models/2001-b.jpg',
        layoutImg: 'imgs/models/2001-b-layout.jpg',
        layoutTwoImg: 'imgs/models/2001-b-layout-two.jpg',
        property: [
            {
                address: '126 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '157,990',
                link: 'http://www.century21scheetz.com/property/IN/46901-7820/Kokomo/126_W_300_N'
            }
        ]
    },
    {
        id: '2002a',
        name: 'Elevation A',
        squareFeet: '2002',
        numBed: '4',
        numBath: '2.5',
        numGarage: '2',
        stockImg: 'imgs/models/2002-a.jpg',
        layoutImg: 'imgs/models/2002-a-layout.jpg',
        layoutTwoImg: 'imgs/models/2002-a-layout-two.jpg',
        property: [
            {
                address: '205 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '164,490',
                link: 'https://www.century21.com/property/205-Luke-Ct-Kokomo-IN-46901/29031964/detail'
            },
            {
                address: '379 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '164,490',
                link: 'https://www.century21.com/property/379-Ariel-Dr-Kokomo-IN-46901/94638213/detail'
            },
            ,
            {
                address: '392 Ariel Drive',
                city: 'Kokomo',
                zip: '46901',
                price: '170,490',
                link: 'https://www.century21.com/property/392-Ariel-Dr-Kokomo-IN-46901/94875469/detail'
            },
            {
                address: '1302 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '168,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1302_Oregon_Way'
            },
            {
                address: '1008 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '168,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1008_Oregon_Way'
            }
        ]
    },
    {
        id: '2002b',
        name: 'Elevation B',
        squareFeet: '2002',
        numBed: '4',
        numBath: '2.5',
        numGarage: '2',
        stockImg: 'imgs/models/2002-b.jpg',
        layoutImg: 'imgs/models/2002-b-layout.jpg',
        layoutTwoImg: 'imgs/models/2002-b-layout-two.jpg',
        property: [
            {
                address: '221 Luke Court',
                city: 'Kokomo',
                zip: '46901',
                price: '172,490',
                link: 'https://www.century21.com/property/221-Luke-Ct-Kokomo-IN-46901/94875479/detail'
            },
            {
                address: '1117 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '170,490',
                link: 'http://www.century21scheetz.com/property/IN/46011/Anderson/1117_Oregon_Way'
            }
        ]
    }
]};

// Render the data to the webpage
var html = cardTemplate(data);
var propertyContainer = document.getElementById("property-display");
propertyContainer.innerHTML = html;

