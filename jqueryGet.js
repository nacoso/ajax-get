// console.log('jQueryGet loaded');

$(function(){
  //on document load
  $('#github').click(function(evt){
    //on github click

    //disable default behavior
    evt.preventDefault();

    // const url = 'https://api.github.com/users/nacoso'
    const url = 'https://www.amazon.com/EcoSmart-ECO-27-Modulating-Technology/dp/B002635ODW'

    //get data from url
    $.get(url, function(result){
      $('#output').append(getData(result));
    });
  });
})

function getData(result) {
  // console.log('getData invoked');
  // console.dir(result);
  let output = "";
  output += "<ul>";
  for(const key in result) {
    output += "<li>";
    output += key + " - " + result[key];
    output += "</li>";
  }
  output += "</ul>";
  return output;
}
