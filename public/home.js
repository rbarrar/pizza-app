// $(document).on("page:change", function(){
//   $('.dropdown-toggle').dropdown();
// });

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
  if($(".mySlides").length > 0){
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
    // ^^  nice use of recursion
}

$(document).ready(function() {
  $("a").click(function(event){
    event.preventDefault();
    console.log(this.href);
    $('#content-container').html("<img src='/images/loader.gif' class='loader' /> <br/> Loading toppings...");
    $.ajax({
      url: this.href,
      success: function(){
        var jsonObject = arguments[0];
        // console.log(jsonObject);
        var response = $.parseJSON(jsonObject);
        var toppingsHTML = "";
        $.each(response.Toppings, function(i, topping){
          toppingsHTML += "<p>"+Object.keys(topping)[0]+"</p>"; // this is just one way to do this...
        });
        $("#content-container").html(toppingsHTML);
        // loop through toppings and create an LI for
      }
    })
  });
});
