
function generateSignature() {
    //Declare variables and grab the entered values
    var address, officePhone;
    var fbookURL, linkedInURL, instagramURL;
    var phoneNumberArray = [];
    var location = document.getElementById('location').value;
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var title = document.getElementById('title').value;
    var linkText = document.getElementById('webURL').value;
    var webURL = document.getElementById('webURL').value;
    var includeSocials = document.getElementById('socialSwitch').checked;

    //Combine first and last name
    var name = fName + " " + lName;

    //Get rid of all characters in phone number except for numbers
    for (var i = 0; i < phoneNumber.length; i++) {
        if (!isNaN(phoneNumber[i]) && phoneNumber[i] != ' ') {
            phoneNumberArray.push(phoneNumber[i]);
        }
    }

    //Check if phone number is a valid length
    if (phoneNumberArray.length != 10) {
        window.alert("Please enter a valid 10 digit phone number");
        return;
    }

    //Add '.'s and c 21 Scheetz to the number
    phoneNumber = "";
    for (var i = 0; i < phoneNumberArray.length; i++) {
        phoneNumber = phoneNumber + phoneNumberArray[i];
        if (i == 2 || i == 5) {
            phoneNumber = phoneNumber + '.';
        }
    }
    phoneNumber = "C " + phoneNumber

    //Check for custom title
    if (title === "customTitle") {
      title = document.getElementById("customTitle").value;
    }

    //Check for custom URL
    if (linkText === "customURL") {
      linkText = document.getElementById("previewURL").value;
      webURL = document.getElementById('customURL').value;
    } else if (linkText === "agentURL") {
      linkText = document.getElementById("agentPreviewURL").value;
      webURL = document.getElementById('agentURL').value;
    } else {
      linkText = "C21Scheetz.com"
    }

    //Get the address/phone for the given location
    switch(location) {
        case "blank":
            address = "NO OFFICE SELECTED";
            officePhone = "O 123.123.1234";
            break;
        case "bloomington":
            address = "1155 S COLLEGE MALL RD STE C | Bloomington, IN 47401";
            officePhone = "O 812.336.2100";
            break;
        case "carmel":
            address = "270 E CARMEL DR | Carmel, IN 46032";
            officePhone = "O 317.844.5111";
            break;
        case "commercial": 
            address = "256 E CARMEL DR | Carmel, IN 46032";
            officePhone = "O 317.814.2111";
            break;
        case "downtown":
            address = "643 MASSACHUSETTS AVE | Indianapolis, IN 46204";
            officePhone = "O 317.814.5500";
            break;
        case "fishers":
            address = "11504 LAKERIDGE DR | Fishers, IN 46037";
            officePhone = "O 317.595.0021";
            break;
        case "greenwood":
            address = "1533 OLIVE BRANCH PARKE STE A | Greenwood, IN 46143";
            officePhone = "O 317.881.2100";
            break;
        case "hendricks":
            address = "7994 E US 36 STE C | Avon, IN 46123";
            officePhone = "O 317.268.1800";
            break;
        case "ninetySixth": 
            address = "4929 E 96TH ST | Indianapolis, IN 46240";
            officePhone = "O 317.705.2500";
            break;
        case "zionsville":
            address = "135 E SYCAMORE ST | Zionsville, IN 46077";
            officePhone = "O 317.873.1700";
            break;
        default:
            address = "NOT A VALID LOCATION";
    }


    //Check for socials
    if (includeSocials) {
      fbookURL = document.getElementById('fbookURL').value;
      linkedInURL = document.getElementById('linkedInURL').value;
      instagramURL = document.getElementById('instagramURL').value;

      if (fbookURL.length != 0) {
        document.getElementById('socialDiv').style.display = 'block';
        document.getElementById('fbookLink').style.display = 'inline-block';
        document.getElementById('fbookLink').href = fbookURL;
      } else {
        document.getElementById('fbookLink').style.display = 'none';
      }

      if (linkedInURL.length != 0) {
        document.getElementById('socialDiv').style.display = 'block';
        document.getElementById('linkedInLink').style.display = 'inline-block';
        document.getElementById('linkedInLink').href = linkedInURL;
      } else {
        document.getElementById('linkedInLink').style.display = 'none';
      }

      if (instagramURL.length != 0) {
        document.getElementById('socialDiv').style.display = 'block';
        document.getElementById('instagramLink').style.display = 'inline-block';
        document.getElementById('instagramLink').href = instagramURL;
      } else {
        document.getElementById('instagramLink').style.display = 'none';
      }
    } else {
      document.getElementById('socialDiv').style.display = 'none';
    }

    //Update the email signature
    document.getElementById('emailSigName').innerHTML = name;
    document.getElementById('emailSigOfficePhoneNumber').innerHTML = officePhone;
    document.getElementById('emailSigPhoneNumber').innerHTML = phoneNumber;
    document.getElementById('emailSigTitle').innerHTML = title;
    document.getElementById('agentLink').innerHTML = linkText;
    document.getElementById('agentLink').href = webURL;
    
    //Display the email signature to the user
    if (document.getElementById('emailSigDiv').style.display == 'none') {
        document.getElementById('emailSigDiv').style.display = 'block';
        document.getElementById('confirmBtn').style.display = 'block';
    }
}

//Opening confirmed signature in a new window for ease of copy (ie. Ctrl+A)
function confirmSignature() {
    var myWindow = window.open("", "Signature");
    setTimeout(() => myWindow.document.title = "C21 Signature", 5);
    myWindow.document.write('<!DOCTYPE html><html lang="en"><head><link rel="stylesheet" href="styles.css"></head><body>');
    myWindow.document.write(document.getElementById('emailSigDiv').innerHTML);
    myWindow.document.write('</body></html>');
}

//Checking for custom title selection
function checkCustom() {
  if (document.getElementById("title").value === "customTitle" || document.getElementById('customTitleDiv').style.display == 'none') {
    document.getElementById('customTitleDiv').style.display = 'block';
  } else {
    document.getElementById('customTitleDiv').style.display = 'none';
  }
}

//Checking for custom URL selection
function checkCustomURL() {
  if (document.getElementById("webURL").value === "customURL" && document.getElementById('customURLDiv').style.display == 'none') {
    document.getElementById('customURLDiv').style.display = 'block';
    document.getElementById('agentURLDiv').style.display = 'none';
  } else if (document.getElementById("webURL").value === "agentURL" && document.getElementById('agentURLDiv').style.display == 'none') { 
    document.getElementById('agentURLDiv').style.display = 'block';
    document.getElementById('customURLDiv').style.display = 'none';
  } else {
    document.getElementById('customURLDiv').style.display = 'none';
    document.getElementById('agentURLDiv').style.display = 'none';
  }
}

//Toggling view of social urls
function toggleSocials() {
  if (document.getElementById("socialSwitch").checked) {
    document.getElementById('socialSection').style.display = 'block';
  } else {
    document.getElementById('socialSection').style.display = 'none';
  }
}

//Making keyup event for the last name input box to update the webURL
window.onload = function() {
    //Handling IE as well as other browsers
    function addEvent(ele, evnt, funct) {
        if (ele) {
            if (ele.addEventListener) {
                return ele.addEventListener(evnt,funct,false);
            } else if (ele.attachEvent) {
                return ele.attachEvent("on"+evnt,funct);
            }
        } else {
            console.log('ele is '+ ele);
        }
    }

    addEvent(document.getElementById('lastName'), 'keyup', function () {
        var fName = document.getElementById('firstName').value;
        var lName = document.getElementById('lastName').value;
        document.getElementById('agentURL').value = "http://www." + fName[0].toLowerCase() + lName.toLowerCase() + ".agent.c21scheetz.com";
        document.getElementById('agentPreviewURL').value = "http://www." + fName[0].toLowerCase() + lName.toLowerCase() + ".agent.c21scheetz.com";
    });
}