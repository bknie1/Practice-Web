var listItems = $('li');
console.log(listItems);

$('h1').css({
  fontSize: "72px",
  border: "3px dashed purple",
  background: "rgba(89, 45, 20, 0.5)"
});

/* Instead of a for loop, we apply these two anon Functions
to every item in our list. */
listItems.hover(function() {
  $(this).css("color", "green");
  },
  function() {
    $(this).css("color", "black");
});

/* Alternatively, separate mouse enter and leave events
accomplishes the same.

$(listItems).mouseenter(function () {
    $(this).css("color", "#ffffff");
});
$(listItems).mouseleave(function () {
    $(this).css("color", "#000000");
});

*/
