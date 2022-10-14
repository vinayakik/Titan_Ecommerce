// Function to close the coupon
function closeCoupon() {
    document.querySelector(".coupon").style.visibility = "hidden";
    document.querySelector(".home").style.opacity = "1";
}

// Dark mode function on dark/light mode button click

function myDark() {  //function is called when we click on darkmode button
    document.body.classList.toggle("dark");  //adding dark class to body tag alternatively
    document.querySelector("#darkLight").classList.toggle("lightMode"); // adding lightMode class to mode change button alternatively
    document.querySelector(".our-collections-head").classList.toggle("darkOurCollectionHead"); // adding darkOurCollectionHead class to our collection header alternatively. In order to change the color to white
    // $(".our-collections li a").toggleClass("darkOurCollection");----------------------
    $(".watch-name").toggleClass("darkWatchName"); //adding darkWatchName class to collection watch names alternatively to change text color to white
    $(".delivery-container").toggleClass("darkDeliveryContainer"); //adding darkDeliveryContainer class to delivery container alternatively
    $(".info h5").toggleClass("darkInfo"); //adding darkInfo class to info section header
    $(".info p").toggleClass("darkInfoPara"); //adding darkInfo class to info section paragraph

}

//To change the text in the Dark mode/Light mode button and to change css properties of other elements. Based on the text written in the button***********************

// document.querySelector("#darkLight").addEventListener("click", toggleText); // calling toggleText function on button click. Using JS
$("#darkLight").click(toggleText);  // calling toggleText function on button click. Using JQuery


function toggleText() { //toggleText function declaration

    var currentText = document.querySelector("#darkLight"); //Storing the current text present in the darkmode button
    
    if (currentText.innerText === "Dark mode") { //checking if Dark mode is written in the button
        currentText.innerText = "Light mode";  //after clicking on button change the text to Light mode
        $(".wrapper").css("background-color", "black"); //to change the background color of the navbar using JQuery
        $(".fa, .fas").css("color", "white"); //to change the color of the search icon in the navbar using JQuery
        $(".fa-long-arrow-alt-right").css("color", "black"); //to change the color of the go icon beside search bar in the navbar using JQuery

        $(".carousel-indicators li").css("border-color","black"); //to make carousal controls black
        



        $(".content .links ul").css("background-color", "black"); //to change the background color of sub-menu of navbar li's
        // Below code is to change the color of side navbar when screen is less than 900px
        // if ($(window).width() < 900) { //if you want to add js code for perticular range of screen width
        $(".mobileMenu").css("background-color", "black"); // to change background color of all the li's in navbar
        $(".content .links li a").css("color", "white"); // to change color of all the li's in navbar
        $(".content .links li label").css("color", "white"); // to change color of all the li's in Side navbar
        // }

        $("#logo").html("<img src='images/homepage/logo_dark.png' >"); // to change the logo image in dark mode

        $(".shop-container").css("background-color", "black"); //to change background color of shop for section
        $(".shop-container").css("color", "white");//to change color of shop for section header

        $(".card-content>a").css("color", "white"); //to change color of shop for section item names
        $(".our-collections li a").css("color", "white"); //to change color of our collection section headers

        $(".delivery-container").css("border-top","1px solid white"); //to change color of top border for delivery section
    }
    else {
        currentText.innerText = "Dark mode"; //if light mode is selcted then, button text should show Dark Mode to select
        $(".wrapper").css("background-color", "white");//to change the background color of the navbar using JQuery
        $(".fa, .fas").css("color", "black"); //to change the color of the search icon in the navbar using JQuery
        $(".content .links ul").css("background-color", "white");//to change the background color of sub-menu of navbar li's
        
        $(".mobileMenu").css("background-color", "white");// to change background color of all the li's in navbar
        $(".content .links li a").css("color", "black");// to change color of all the li's in navbar
        $(".content .links li label").css("color", "black");// to change color of all the li's in Side navbar

        $(".carousel-indicators li").css("background-color","transparent"); //to make carousal controls white
        $(".carousel-indicators li").css("border-color","white"); //to make carousal controls white

        $("#logo").html("<img src='images/homepage/logo.png' >");// to change the logo image in dark mode

        $(".shop-container").css("background-color", "white");//to change background color of shop for section
        $(".shop-container").css("color", "black"); //to change color of shop for section header
        $(".card-content>a").css("color", "black"); //to change color of shop for section item names
        $(".our-collections li a").css("color", "black");//to change color of our collection section headers

        $(".delivery-container").css("border-top","1px solid black"); //to change color of top border for delivery section

    }
}

// OUR COLLECTIONS- Below code is to highlight selected section heading(men,women,luxury)

var collectionTabs = $(".our-collections li a"); //all the headers will be stored as array

function selectedCollection(selection) {  //function will get what is selected on the page from "selection" parameter

    var currentText = document.querySelector("#darkLight");

    if (currentText.innerText === "Dark mode") { //to check whether we are in dark mode. IF yes below code runs

        if (selection === "WOMEN") {
            collectionTabs[1].style.color = "black"; //highlighting the selected section with black color
            collectionTabs[0].style.color = "grey"; // not highting the other options
            collectionTabs[2].style.color = "grey";
        }
        else if (selection === "LUXURY") {
            collectionTabs[1].style.color = "grey";
            collectionTabs[0].style.color = "grey";
            collectionTabs[2].style.color = "black";
        }
        else {
            console.log("Men selected");
            collectionTabs[1].style.color = "grey";
            collectionTabs[0].style.color = "black";
            collectionTabs[2].style.color = "grey";
        }
    }
    else {                                      //to check whether we are in light mode. IF yes below code runs
        if (selection === "WOMEN") {
            collectionTabs[1].style.color = "white";
            collectionTabs[0].style.color = "grey";
            collectionTabs[2].style.color = "grey";
        }
        else if (selection === "LUXURY") {
            collectionTabs[1].style.color = "grey";
            collectionTabs[0].style.color = "grey";
            collectionTabs[2].style.color = "white";
        }
        else {
            console.log("Men selected");
            collectionTabs[1].style.color = "grey";
            collectionTabs[0].style.color = "white";
            collectionTabs[2].style.color = "grey";
        }
    }
}

// to be on top of the page after refreshing the page

$(document).ready(function(){
    $(this).scrollTop(0);
});
