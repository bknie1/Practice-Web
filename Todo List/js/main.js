var inputKeyCode = 13;
assignListeners();
//------------------------------------------------------------------------------
function assignListeners() {
  // In Progress/Completed
  $('li').click(toggleCompleted);

  // Remove List items
  // On X click, remove parent list element and children (this span).
  /* Note: On, click, and remove-X mean that this will fire for every current
  and future remove-X that lives under a ul. Below, we have to assign toggle again,
  but we don't have to assign remove again beacuse of this. */
  $('ul').on('click', '.remove-X', removeItem);

  // I did this with jQuery but preferred manually handling the CSS. Smoother.
  $('.fa-plus').on('click', function(event) {
    $('.todo-input').toggleClass('toggle-input-off');
  });
}
//------------------------------------------------------------------------------
function toggleCompleted(event) {
  console.log('Assigning toggle completed.');
  $(this).toggleClass('completed-task');
}
//------------------------------------------------------------------------------
function removeItem(event) {
  $(this).parent().fadeOut('400', function() {
    $(this).remove(); // this == parent.
  });
}
//------------------------------------------------------------------------------
// Adding list items
$("input[type='text']").keypress(function(event) {
  // Enter Key
  if(event.which == inputKeyCode) {
    // Capture Input text
    var todoText = $('#todo-input').val();
    // Generate new li.
    $('ul').append('<li><span class="remove-X"><i class="fa fa-trash"></i></span>\n' + todoText + '</li>');
    // Add listeners to last/newest list item.
    $('li:last').click(toggleCompleted); // We need this because we used click.
    // $('.remove-X:last').click(removeItem); // We don't need this because of on.

    // Clear Input text
    $('#todo-input').val("");
  }
});
