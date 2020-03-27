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
    let css = { name: 'CSS', score: 0 }
    let scss = { name: 'SCSS', score: 0 }
    let js = { name: 'JavaScript', score: 0 }
    let cs = { name: 'C#', score: 0 }
    let python = { name: 'Python', score: 0 }
    let binary = { name: 'Binary', score: 0 }
    let langArr = [css, scss, js, cs, python, binary]
    let message = 'Based on your answers this is your list from Most recomended to Least recommended'

    const generation = $("input[name='generation']:checked").val()
    const design = $("input[name='design']:checked").val()
    const logic = $("input[name='logic']:checked").val()
    const games = $("input[name='games']:checked").val()
    const programming = $("input[name='programming']:checked").val()

    if (programming === 'no') {
      message = "If you dont really like proggraming then the order won't matter!"
    } else {
      console.log('you shouldnt be here')
    }

    langArr.sort((a, b) => b.score - a.score)
    $('#message').text(message)
    langArr.forEach(language => {
      $('#results-list').append(`<ol>${language.name}</ol>`)
    })

    $('#q5').addClass('no-show')
    $('#quiz-form').addClass('no-show')
    $('#results').removeClass('no-show')
  })
})
