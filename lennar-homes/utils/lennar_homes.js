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
var data = {neighborhood: 
    [{
        name: "Ashford Place",
        property: [
            {
                imageSrc: "imgs/ashford-place/18753-mcfall-drive.jpeg",
                address: "18753 McFall Drive",
                city: "Westfield",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Westfield/18753_McFall_Drive",
                price: "309,995",
                sold: false
            },
            {
                imageSrc: "imgs/ashford-place/4515-andover-parkway.jpeg",
                address: "4515 Andover Parkway",
                city: "Westfield",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Westfield/4515_Andover_Parkway",
                price: "289,995",
                sold: false
            },
            {
                imageSrc: "imgs/ashford-place/4515-boyd-place.jpeg",
                address: "4515 Boyd Place",
                city: "Westfield",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Westfield/4515_Boyd_Place",
                price: "319,995",
                sold: false
            }
        ]
    },
    {
        name: "Ashmoor",
        property: [
            {
                imageSrc: "imgs/ashmoor/3531-moorland-lane.jpeg",
                address: "3531 Moorland Lane",
                city: "Carmel",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Carmel/3531_Moorland_Lane",
                price: "669,995",
                sold: false
            }
        ]
    },
    {
        name: "Bridger Pines",
        property: [
            {
                imageSrc: "imgs/bridger-pines/16252-sedalio-drive.jpeg",
                address: "16252 Sedalio Drive",
                city: "Fishers",
                zip: "46040",
                propertyLink: "https://www.century21scheetz.com/property/IN/46040/Fishers/16252_Sedalia_Drive",
                price: "339,995",
                sold: false
            }
        ]
    },
    {
        name: "Clay Corner",
        property: [
            {
                imageSrc: "imgs/clay-corner/1522-jensen-drive.jpeg",
                address: "1522 Jensen Drive",
                city: "Carmel",
                zip: "46032",
                propertyLink: "https://www.century21scheetz.com/property/IN/46032/Carmel/1522_Jensen_Drive",
                price: "497,995",
                sold: false
            }
        ]
    },
    {
        name: "Conner Crossing",
        property: [
            {
                imageSrc: "imgs/conner-crossing/5415-lake-station-lane.jpeg",
                address: "5415 Lake Station Lane",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/5415_Lake_Station_Lane",
                price: "449,995",
                sold: false
            },
            {
                imageSrc: "imgs/conner-crossing/5423-lake-station-lane.jpeg",
                address: "5423 Lake Station Lane",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/5423_Lake_Station_Lane",
                price: "426,995",
                sold: false
            },
            {
                imageSrc: "imgs/conner-crossing/5427-lake-station-lane.jpeg",
                address: "5427 Lake Station Lane",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/5427_Lake_Station_Lane",
                price: "429,995",
                sold: false
            },
            {
                imageSrc: "imgs/conner-crossing/18775-brookston-lane.jpeg",
                address: "18775 Brookston Lane",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/18775_Brookston_Lane",
                price: "355,995",
                sold: false
            },
            {
                imageSrc: "imgs/conner-crossing/18970-stones-crossing-lane.jpeg",
                address: "18970 Stones Crossing Lane",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/18970_Stones_Crossing_Lane",
                price: "349,995",
                sold: false
            }
        ]
    },
    {
        name: "Fox Hollow",
        property: [
            {
                imageSrc: "imgs/fox-hollow/10038-goose-rock-lane.jpeg",
                address: "10038 Goose Rock Lane",
                city: "Indianapolis",
                zip: "46239",
                propertyLink: "https://www.century21scheetz.com/property/IN/46239/Indianapolis/10038_Goose_Rock_Lane",
                price: "319,995",
                sold: false
            }
        ]
    },
    {
        name: "Hunters Crossing",
        property: [
            {
                imageSrc: "imgs/hunters-crossing/4404-wild-turkey-drive.jpeg",
                address: "4404 Wild Turkey Drive",
                city: "Indianapolis",
                zip: "46239",
                propertyLink: "https://www.century21scheetz.com/property/IN/46239/Indianapolis/4404_Wild_Turkey_Drive",
                price: "219,995",
                sold: false
            },
            {
                imageSrc: "imgs/hunters-crossing/10406-deercrest-lane.jpeg",
                address: "10406 Deercrest Lane",
                city: "Indianapolis",
                zip: "46239",
                propertyLink: "https://www.century21scheetz.com/property/IN/46239/Indianapolis/10406_Deercrest_Lane",
                price: "229,995",
                sold: false
            },
            {
                imageSrc: "imgs/hunters-crossing/10414-deercrest-lane.jpeg",
                address: "10414 Deercrest Lane",
                city: "Indianapolis",
                zip: "46239",
                propertyLink: "https://www.century21scheetz.com/property/IN/46239/Indianapolis/10414_Deercrest_Lane",
                price: "219,995",
                sold: false
            }
        ]
    },
    {
        name: "Legacy Prairie",
        property: [
            {
                imageSrc: "imgs/legacy-prairie/14237-frostburg-road.jpeg",
                address: "14237 Frostburg Road",
                city: "Carmel",
                zip: "46033",
                propertyLink: "https://www.century21scheetz.com/property/IN/46033/Carmel/14237_Frostburg_Road",
                price: "252,995",
                sold: false
            }
        ]
    },
    {
        name: "Legacy Ridge",
        property: [
            {
                imageSrc: "imgs/legacy-ridge/14098-larson-drive.jpeg",
                address: "14098 Larson Drive",
                city: "Carmel",
                zip: "46033",
                propertyLink: "https://www.century21scheetz.com/property/IN/46033/Carmel/14098_Larson_Drive",
                price: "549,995",
                sold: false
            },
            {
                imageSrc: "imgs/legacy-ridge/14104-larson-drive.jpeg",
                address: "14104 Larson Drive",
                city: "Carmel",
                zip: "46033",
                propertyLink: "https://www.century21scheetz.com/property/IN/46033/Carmel/14104_Larson_Drive",
                price: "569,995",
                sold: false
            }
        ]
    },
    {
        name: "Liberty Ridge",
        property: [
            {
                imageSrc: "imgs/liberty-ridge/2020-mobley-drive.jpeg",
                address: "2020 Mobley Drive",
                city: "Westfield",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Westfield/2020_Mobley_Drive",
                price: "396,995",
                sold: false
            },
            {
                imageSrc: "imgs/liberty-ridge/2053-mobley-drive.jpeg",
                address: "2053 Mobley Drive",
                city: "Westfield",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Westfield/2053_Mobley_Drive",
                price: "409,995",
                sold: false
            },
            {
                imageSrc: "imgs/liberty-ridge/15058-sullivan-lane.jpeg",
                address: "15058 Sullivan Lane",
                city: "Westfield",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Westfield/15058_Sullivan_Lane",
                price: "445,995",
                sold: false
            },
            {
                imageSrc: "imgs/liberty-ridge/15070-sullivan-lane.jpeg",
                address: "15070 Sullivan Lane",
                city: "Westfield",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Westfield/15070_Sullivan_Lane",
                price: "435,995",
                sold: false
            },{
                imageSrc: "imgs/liberty-ridge/15082-sullivan-lane.jpeg",
                address: "15082 Sullivan Lane",
                city: "Westfield",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Westfield/15082_Sullivan_Lane",
                price: "415,995",
                sold: false
            }
        ]
    },
    {
        name: "Maple Villas",
        property: [
            {
                imageSrc: "imgs/maple-villas/17343-northam-drive.jpeg",
                address: "17343 Northam Drive",
                city: "Westfield",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Westfield/17343_Northam_Drive",
                price: "249,995",
                sold: false
            },
            {
                imageSrc: "imgs/maple-villas/17345-northam-drive.jpeg",
                address: "17345 Northam Drive",
                city: "Westfield",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Westfield/17345_Northam_Drive",
                price: "239,995",
                sold: false
            }
        ]
    },
    {
        name: "Pebble Brook Villas",
        property: [
            {
                imageSrc: "imgs/pebble-brook-villas/4857-amesbury-place.jpeg",
                address: "4857 East Amesbury Place",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/4857_E_Amesbury_Place",
                price: "259,995",
                sold: false
            }
        ]
    },
    {
        name: "Slater Woods",
        property: [
            {
                imageSrc: "imgs/slater-woods/5182-rangewood-drive.jpeg",
                address: "5182 Rangewood Drive",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/5182_Rangewood_Drive",
                price: "439,995",
                sold: false
            },
            {
                imageSrc: "imgs/slater-woods/16411-maines-valley-drive.jpeg",
                address: "16411 Maines Valley Drive",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/16411_Maines_Valley_Drive",
                price: "459,995",
                sold: false
            },
            {
                imageSrc: "imgs/slater-woods/16427-maines-valley-drive.jpeg",
                address: "16427 Maines Valley Drive",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/16427_Maines_Valley_Drive",
                price: "479,995",
                sold: false
            },
            {
                imageSrc: "imgs/slater-woods/16519-maines-valley-drive.jpeg",
                address: "16519 Maines Valley Drive",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/16519_Maines_Valley_Drive",
                price: "469,995",
                sold: false
            },
            {
                imageSrc: "imgs/slater-woods/16533-maines-valley-drive.jpeg",
                address: "16533 Maines Valley Drive",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/16533_Maines_Valley_Drive",
                price: "439,995",
                sold: false
            },
            {
                imageSrc: "imgs/slater-woods/16618-meadow-wood-drive.jpeg",
                address: "16618 Meadow Wood Drive",
                city: "Noblesville",
                zip: "46062",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/16618_Meadow_Wood_Drive",
                price: "459,995",
                sold: false
            }
        ]
    },
    {
        name: "South Lake",
        property: [
            {
                imageSrc: "imgs/south-lake/2662-cormorant-drive.jpeg",
                address: "2662 Cormorant Drive",
                city: "Greenwood",
                zip: "46143",
                propertyLink: "https://www.century21scheetz.com/property/IN/46143/Greenwood/2662_Cormorant_Drive",
                price: "269,995",
                sold: false
            },
            {
                imageSrc: "imgs/south-lake/2680-cormorant-drive.jpeg",
                address: "2680 Cormorant Drive",
                city: "Greenwood",
                zip: "46143",
                propertyLink: "https://www.century21scheetz.com/property/IN/46143/Greenwood/2680_Cormorant_Drive",
                price: "259,995",
                sold: false
            }
        ]
    },
    {
        name: "Springmill Park",
        property: [
            {
                imageSrc: "imgs/springmill-park/16715-onward-drive.jpeg",
                address: "16715 Onward Drive",
                city: "Westfield",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Westfield/16715_Onward_Drive",
                price: "509,995",
                sold: false
            },
            {
                imageSrc: "imgs/springmill-park/16733-oxbow-drive.jpeg",
                address: "16733 Oxbow Drive",
                city: "Westfield",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Westfield/16733_Oxbow_Drive",
                price: "496,995",
                sold: false
            },
            {
                imageSrc: "imgs/springmill-park/16780-onward-drive.jpeg",
                address: "16780 Onward Drive",
                city: "Westfield",
                zip: "46074",
                propertyLink: "https://www.century21scheetz.com/property/IN/46074/Westfield/16780_Onward_Drive",
                price: "479,995",
                sold: false
            }
        ]
    },
    {
        name: "Steeplechase",
        property: [
            {
                imageSrc: "imgs/steeplechase/10214-frieda-lane.jpeg",
                address: "10214 Frieda Lane",
                city: "Fishers",
                zip: "46040",
                propertyLink: "https://www.century21scheetz.com/property/IN/46040/Fishers/10214_Frieda_Lane",
                price: "419,995",
                sold: false
            },
            {
                imageSrc: "imgs/steeplechase/10228-frieda-lane.jpeg",
                address: "10228 Frieda Lane",
                city: "Fishers",
                zip: "46040",
                propertyLink: "https://www.century21scheetz.com/property/IN/46040/Fishers/10228_Frieda_Lane",
                price: "459,995",
                sold: false
            },{
                imageSrc: "imgs/steeplechase/10242-frieda-lane.jpeg",
                address: "10242 Frieda Lane",
                city: "Fishers",
                zip: "46040",
                propertyLink: "https://www.century21scheetz.com/property/IN/46040/Fishers/10242_Frieda_Lane",
                price: "459,995",
                sold: false
            }
        ]
    },
    {
        name: "Turnberry",
        property: [
            {
                imageSrc: "imgs/turnberry/11869-piney-glade-road.jpeg",
                address: "11869 Piney Glade Road",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/11869_Piney_Glade_Road",
                price: "294,995",
                sold: false
            },
            {
                imageSrc: "imgs/turnberry/11967-piney-glade-road.jpeg",
                address: "11967 Piney Glade Road",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/11967_Piney_Glade_Road",
                price: "349,995",
                sold: false
            },
            {
                imageSrc: "imgs/turnberry/11981-piney-glade-road.jpeg",
                address: "11981 Piney Glade Road",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/11981_Piney_Glade_Road",
                price: "389,995",
                sold: false
            },
            {
                imageSrc: "imgs/turnberry/11995-piney-glade-road.jpeg",
                address: "11995 Piney Glade Road",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/11995_Piney_Glade_Road",
                price: "379,995",
                sold: false
            },
            {
                imageSrc: "imgs/turnberry/12030-piney-glade-road.jpeg",
                address: "12030 Piney Glade Road",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/12030_Piney_Glade_Road",
                price: "379,995",
                sold: false
            },
            {
                imageSrc: "imgs/turnberry/11976-northface-drive.jpeg",
                address: "11976 Northface Drive",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/11976_Northface_Drive",
                price: "409,995",
                sold: false
            },
            {
                imageSrc: "imgs/turnberry/15850-foothill-drive.jpeg",
                address: "15850 Foothill Drive",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/15850_Foothill_Drive",
                price: "389,995",
                sold: false
            }
        ]
    },
    {
        name: "Twin Oaks",
        property: [
            {
                imageSrc: "imgs/twin-oaks/5852-selis-square-court.jpeg",
                address: "5852 Selis Square Court",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/5852_Selis_Square_Court",
                price: "399,995",
                sold: false
            },
            {
                imageSrc: "imgs/twin-oaks/15660-monson-drive.jpeg",
                address: "15660 Monson Drive",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/15660_Monson_Drive",
                price: "389,995",
                sold: false
            },
            {
                imageSrc: "imgs/twin-oaks/15747-barnard-drive.jpeg",
                address: "15747 Barnard Drive",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/15747_Barnard_Drive",
                price: "389,995",
                sold: false
            },
            {
                imageSrc: "imgs/twin-oaks/15784-barnard-drive.jpeg",
                address: "15784 Barnard Drive",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46062/Noblesville/15784_Barnard_Drive",
                price: "319,995",
                sold: false
            }
        ]
    },
    {
        name: "Union Crossing",
        property: [
            {
                imageSrc: "imgs/union-crossing/10892-liberation-trace.jpeg",
                address: "10892 Liberation Trace",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/10892_Liberation_Trace",
                price: "297,995",
                sold: false
            },
            {
                imageSrc: "imgs/union-crossing/10902-liberation-trace.jpeg",
                address: "10902 Liberation Trace",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/10902_Liberation_Trace",
                price: "375,995",
                sold: false
            },
            {
                imageSrc: "imgs/union-crossing/10910-liberation-trace.jpeg",
                address: "10910 Liberation Trace",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/10910_Liberation_Trace",
                price: "297,995",
                sold: false
            },
            {
                imageSrc: "imgs/union-crossing/10917-liberation-trace.jpeg",
                address: "10917 Liberation Trace",
                city: "Noblesville",
                zip: "46060",
                propertyLink: "https://www.century21scheetz.com/property/IN/46060/Noblesville/10917_Liberation_Trace",
                price: "319,995",
                sold: false
            }
        ]
    },
    {
        name: "Vermillion",
        property: [
            {
                imageSrc: "imgs/vermillion/16391-newberry-way.jpeg",
                address: "16391 Newberry Way",
                city: "Fishers",
                zip: "46040",
                propertyLink: "https://www.century21scheetz.com/property/IN/46040/Fishers/16391_Newberry_Way",
                price: "409,995",
                sold: false
            }
        ]
    },
    {
        name: "Vonterra",
        property: [
            {
                imageSrc: "imgs/vonterra/5793-arbois-circle.jpeg",
                address: "5793 Arbois Circle",
                city: "Zionsville",
                zip: "46077",
                propertyLink: "https://www.century21scheetz.com/property/IN/46077/Zionsville/5793_Arbois_Circle",
                price: "529,995",
                sold: false
            },
            {
                imageSrc: "imgs/vonterra/5898-muscadine-way.jpeg",
                address: "5898 Muscadine Way",
                city: "Zionsville",
                zip: "46077",
                propertyLink: "https://www.century21scheetz.com/property/IN/46077/Zionsville/5898_Muscadine_Way",
                price: "459,995",
                sold: false
            },
            {
                imageSrc: "imgs/vonterra/10318-pigato-drive.jpeg",
                address: "10318 Pigato Drive",
                city: "Zionsville",
                zip: "46077",
                propertyLink: "https://www.century21scheetz.com/property/IN/46077/Zionsville/10318_Pigato_Drive",
                price: "559,995",
                sold: false
            }
        ]
    },
    {
        name: "Whelchel Springs",
        property: [
            {
                imageSrc: "imgs/whelchel-springs/12329-alberta-street.jpeg",
                address: "12329 Alberta Street",
                city: "McCordsville",
                zip: "46037",
                propertyLink: "https://www.century21scheetz.com/property/IN/46037/McCordsville/12329_Alberta_Street",
                price: "309,995",
                sold: false
            },
            {
                imageSrc: "imgs/whelchel-springs/12345-alberta-street.jpeg",
                address: "12345 Alberta Street",
                city: "Fishers",
                zip: "46040",
                propertyLink: "https://www.century21scheetz.com/property/IN/46040/Fishers/12345_Alberta_Street",
                price: "309,995",
                sold: false
            },
            {
                imageSrc: "imgs/whelchel-springs/15590-whelchel-drive.jpeg",
                address: "15590 Whelchel Drive",
                city: "Fishers",
                zip: "46037",
                propertyLink: "https://www.century21scheetz.com/property/IN/46037/Fishers/15590_Whelchel_Drive",
                price: "359,995",
                sold: false
            }
        ]
    }
]};

// Render the data to the webpage
var html = cardTemplate(data);
var propertyContainer = document.getElementById("property-display");
propertyContainer.innerHTML = html;

