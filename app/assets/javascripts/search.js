jQuery(document).ready(function() {

  $('#searchform').submit(function(e){ 
    e.preventDefault()
    window.location = '/search/'+$('#searchform_input').val()
  })

  $('#searchform_input').typeahead({
    items: 15,
    minLength: 3,
    source: function (query, process) {
      return $.post('/search/typeahead/'+query, {}, function (data) {
        return process(data)
      })
    },
    updater: function(item) {
      var url = $(item)[0].attributes['data-url'].value
      window.location = url
    }
  })

})
