// $("p").hide();


// ---------- syntax and selectors ------------ //
// ---------- 1 ------------ //
// how to find an element on the page.
// first, lets create 3 different paragraphs on our page, with id, class and without any attribute.

// $ is the primary sign for accesing or addressing the elements on the page. and we are using css selectors with $ sign.


// for accessing all the paragraphs on the page:
// document.querySelectorAll("p").forEach( (item) => item.hidden = true );
// $("p").hide();


// for accessing an element with its id:
// document.querySelector("#p1").hidden = true;
// $("#p1").hide();


// for accessing an element with its id:
// document.querySelector(".paraf").hidden = true;
// $(".paraf").hide();



// ---------- 2 ------------ //
// let's add some unordered lists to our html page then find the second list's elements.

// $(".list li").hide();

// for finding all the elements on the page:
// $("*").hide();
// let's find the paragraph(s) which have a class named paraf:
// $("p.paraf").hide();
// for finding the first paragraph:
// $("p:first").hide();
// first ul's first element
// $("ul li:first").hide();
// all ul's first element
// $("ul li:first-child").hide();

// find elements which have href attribute.
// $("[href]").hide();
// find links, which target attribute is blank:
// $("a[target='_blank']").hide();
// find all lis and hide the evenths.
// $("li:even").hide();
// $("li:odd").hide();



// ---------- events ------------ //

// $("#p1").click(function() {
//     alert("p1 element has been clicked!");
// });


// $("#p1").on("click", function() {
//     $("#p1").hide();
// });
// however, instead of using "$("#p1")" we can use "this" keyword.
// $("#p1").on("click", function() {
//     $(this).hide();
// });


// find all p elements on the page and add click event for all of them:
// $("p").on("click", function() {
//     $(this).hide();
// });


// for attaching multiple event handlers to a <p> element:
// $("#p1").on({
//     mouseenter: function(){
//         $(this).css("background-color", "lightgray");
//       },
//       mouseleave: function(){
//         $(this).css("background-color", "blue");
//       },
//       click: function(){
//         $(this).css("background-color", "yellow");
//       }
// });


// $("li").dblclick( function() {
//     $(this).fadeOut();
// });


// $("li").on("dblclick mouseleave", function() {
//     $(this).fadeOut();
// });



// ---------- OnReady ------------ //





