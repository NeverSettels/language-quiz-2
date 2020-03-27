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
    let cssScore = 0
    let scssScore = 0
    let jsScore = 0
    let csScore = 0
    let pythoScore = 0
    const generation = $("input[name='generation']:checked").val()
    const design = $("input[name='design']:checked").val()
    const logic = $("input[name='logic']:checked").val()
    const games = $("input[name='games']:checked").val()
    const programming = $("input[name='programming']:checked").val()
  })
})
