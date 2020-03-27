$(document).ready(function() {
  //attach cycling event listeners
  for (let i = 2; i <= 5; i++) {
    $(`#toQ${i}`).click(function(event) {
      event.preventDefault()
      $(`#q${i - 1}`).addClass('no-show')
      $(`#q${i}`).removeClass('no-show')
    })
  }

  $('#quiz-form').submit(function(event) {
    event.preventDefault()
    console.log('Last button click only?')
  })
})
