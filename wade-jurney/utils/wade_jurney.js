// Initialize my carousel
$(document).ready(function(){
    $('.carousel').slick({
        dots: true
    });
});

// Add event tracking
function linkEvent(eventLabel) {
    ga('send', 'event', {
        eventCategory: 'Outbound Link',
        eventAction: 'click',
        eventLabel: eventLabel,
        transport: 'beacon'
    })
}

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
                price: '114,990',
                link: 'https://www.century21.com/property/342-W-300-N-Kokomo-IN-46901/94637631/detail'
            },
            {
                address: '432 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '121,990',
                link: 'https://www.century21.com/property/432-W-300-N-Kokomo-IN-46901/94867907/detail'
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
                price: '115,990',
                link: 'https://www.century21.com/property/366-W-300-N-Kokomo-IN-46901/94637619/detail'
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
                price: '124,990',
                link: 'https://www.century21.com/property/320-W-300-N-Kokomo-IN-46901/94636817/detail'
            },
            {
                address: '116 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '131,990',
                link: 'https://www.century21.com/property/116-W-300-N-Kokomo-IN-46901/94867191/detail'
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
                price: '124,990',
                link: 'https://www.century21.com/property/378-W-300-N-Kokomo-IN-46901/94637607/detail'
            },
            {
                address: '452 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '133,990',
                link: 'https://www.century21.com/property/452-W-300-N-Kokomo-IN-46901/94869073/detail'
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
                price: '132,490',
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
                link: 'https://www.century21.com/property/1106-Oregon-Way-Anderson-IN-46012/94641207/detail'
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
                price: '133,490',
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
                link: 'https://www.century21.com/property/1307-Oregon-Way-Anderson-IN-46012/94641211/detail'
            },
            {
                address: '1001 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '139,490',
                link: 'https://www.century21.com/property/1001-Oregon-Way-Anderson-IN-46012/94641209/detail'
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
                price: '137,490',
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
                price: '137,490',
                link: 'https://www.century21.com/property/387-Ariel-Dr-Kokomo-IN-46901/94637629/detail'
            },
            {
                address: '1118 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '147,490',
                link: 'https://www.century21.com/property/1118-Oregon-Way-Anderson-IN-46012/94644309/detail'
            },
            {
                address: '3314 Nevada Dr',
                city: 'Anderson',
                zip: '46011',
                price: '147,490',
                link: 'https://www.century21.com/property/3314-Nevada-Drive-Anderson-IN-46011/M-21603834-IN_MIBOR/detail'
            },
            {
                address: '1226 S Rangeline Rd',
                city: 'Anderson',
                zip: '46011',
                price: '149,990',
                link: 'https://www.century21.com/property/1226-South-Rangeline-Road-Anderson-IN-46011/M-21603827-IN_MIBOR/detail'
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
                price: '147,990',
                link: 'https://www.century21.com/property/1105-Oregon-Way-Anderson-IN-46012/94644315/detail'
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
                price: '152,490',
                link: 'https://www.century21.com/property/1123-Oregon-Way-Anderson-IN-46012/94649751/detail'
            },
            {
                address: '1007 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '154,490',
                link: 'https://www.century21.com/property/1007-Oregon-Way-Anderson-IN-46012/94644317/detail'
            },
            {
                address: '1301 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '153,490',
                link: 'https://www.century21.com/property/1301-Oregon-Way-Anderson-IN-46012/94872853/detail'
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
                link: 'https://www.century21.com/property/1112-Oregon-Way-Anderson-IN-46012/94649753/detail'
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
                price: '143,990',
                link: 'https://www.century21.com/property/274-W-300-N-Kokomo-IN-46901/94636815/detail'
            },
            {
                address: '354 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '143,990',
                link: 'https://www.century21.com/property/354-W-300-N-Kokomo-IN-46901/94637679/detail'
            },
            {
                address: '386 W 300 N',
                city: 'Kokomo',
                zip: '46901',
                price: '$152,990',
                link: 'https://www.century21.com/property/386-W-300-N-Kokomo-IN-46901/94867903/detail'
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
                link: 'https://www.century21.com/property/440-W-300-N-Kokomo-IN-46901/94869019/detail'
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
                price: '155,490',
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
                price: '155,490',
                link: 'https://www.century21.com/property/363-Ariel-Dr-Kokomo-IN-46901/94638217/detail'
            },
            {
                address: '1204 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '159,490',
                link: 'https://www.century21.com/property/1204-Oregon-Way-Anderson-IN-46012/94649757/detail'
            },
            {
                address: '1002 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '161,490',
                link: 'https://www.century21.com/property/1002-Oregon-Way-Anderson-IN-46012/94649755/detail'
            },
            {
                address: '1302 S Rangeline Rd',
                city: 'Anderson',
                zip: '46011',
                price: '159,990',
                link: 'https://www.century21.com/property/1302-South-Rangeline-Road-Anderson-IN-46011/M-21603201-IN_MIBOR/detail'
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
                link: 'https://www.century21.com/property/1111-Oregon-Way-Anderson-IN-46012/94649763/detail'
            },
            {
                address: '1313 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '163,990',
                link: 'https://www.century21.com/property/1313-Oregon-Way-Anderson-IN-46012/94649759/detail'
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
                link: 'https://www.century21.com/property/460-W-300-N-Kokomo-IN-46901/94967341/detail'
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
                link: 'https://www.century21.com/property/126-W-300-N-Kokomo-IN-46901/94967349/detail'
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
                price: '159,490',
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
                price: '166,490',
                link: 'https://www.century21.com/property/1302-Oregon-Way-Anderson-IN-46012/94872867/detail'
            },
            {
                address: '1008 Oregon Way',
                city: 'Anderson',
                zip: '46011',
                price: '168,490',
                link: 'https://www.century21.com/property/1008-Oregon-Way-Anderson-IN-46012/94649765/detail'
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
                link: 'https://www.century21.com/property/1117-Oregon-Way-Anderson-IN-46012/94649761/detail'
            }
        ]
    }
]};

// Render the data to the webpage
var html = cardTemplate(data);
var propertyContainer = document.getElementById("property-display");
propertyContainer.innerHTML = html;

