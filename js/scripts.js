$(document).ready(function() {
  const thunder = new Audio('https://freesound.org/data/previews/195/195439_3634316-lq.mp3')
  const woosh = new Audio('https://freesound.org/data/previews/489/489895_10418401-lq.mp3')
  const pip = new Audio('https://freesound.org/data/previews/218/218043_1676145-lq.mp3')
  $('button').click(function() {
    pip.play()
  })
  $('#start').click(function() {
    pip.pause()
    thunder.play()
    $('#start').addClass('explode')
    setTimeout(function() {
      $('#start').addClass('no-show')
      $('.transition').removeClass('no-show')
    }, 5000)
  })
  //attach cycling event listeners
  for (let i = 2; i <= 5; i++) {
    $(`#toQ${i}`).click(function(event) {
      event.preventDefault()
      $(`#q${i - 1}`).addClass('no-show')
      $(`#q${i}`).removeClass('no-show')
    })
  }
  $('#reload').click(function() {
    $('.transition').html(``)
    $('.transition').addClass('animate')
    woosh.play()
    setTimeout(function() {
      location.reload()
    }, 7000)
  })
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
      message = "If you don't really like programing then the order won't matter!"
    } else {
      if (generation === 'boom') {
        binary.score += 10
      } else if (generation === 'mill') {
        python.score += 10
        cs.score += 5
      } else if (generation === 'genZ') {
        js.score += 10
        python.score += 5
        cs.score += 5
      } else if (design === 'like') {
        binary.score += -10
        scss.score += 10
        css.score += 5
        js.score += 2
      } else if (design === 'indiferent') {
        scss.score += 5
        css.score += 10
      } else if (design === 'dlike') {
        scss.score += -2
        css.score += -2
        binary.score += 5
      } else if (logic === 'like') {
        js.score += -2
        cs.score += 5
        binary.score += 10
      } else if (logic === 'indiferent') {
        js.score += 5
        cs.score += -2
        binary.score += -5
      } else if (logic === 'dlike') {
        js.score += 10
        cs.score += -5
        binary.score += -10
      } else if (games === 'like') {
        js.score += 5
        cs.score += 10
        python.score += -2
        binary.score += -10
      } else if (games === 'indiferent') {
        js.score += 10
        cs.score += 5
        python.score += 5
        binary.score += -5
      } else if (games === 'dlike') {
        js.score += 5
        cs.score += -2
        python.score += 10
        binary.score += 2
      }
    }
    langArr.sort((a, b) => b.score - a.score)
    $('#message').text(message)
    langArr.forEach(language => {
      $('#results-list').append(`<li class="result-item">${language.name}</li>`)
    })

    $('#q5').addClass('no-show')
    $('#quiz-form').addClass('no-show')
    $('#results').removeClass('no-show')
  })
})
