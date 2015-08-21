// $(function() {
//   var people = [{ fname: "Tom", lname: "Lee"}, {frame: "Jordan", lname: "Kamin"}]

//   function UpdatedList(people) {
//     var theHtmlListOfPersons = ""
//     people.forEach(function(person) {
//       theHtmlListOfPersons += '<li class="person'><a href="/" + person.fname + '">' + person.fname + " : " + person.lname + '</a></li>'
//     })

//     return theHtmlListOfPersons
//   }

//   $('.people').append(UpdatedList(people));

// })

$(function() {
  var data = [{ fname: "Tom", lname: "Lee"}, {fname: "Jordan", lname: "Kamin"}];
  var template = $('#people').html();
  var templateScript = Handlebars.compile(template);
  $('.people').append(templateScript(data));
})

$(function(){
  var moneyData = [{ money: "USD"}, ]
})