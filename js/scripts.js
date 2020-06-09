$(document).ready(function() {
  $("form#count").submit(function(event) {
    const countto = parseInt($("input#countto").val());
    const countby = parseInt($("input#countby").val());

    let arrayExample = [];
    
    for (let index = 0; index <= countto; index += countby) {
        arrayExample.push(index);
        $("#output").text(arrayExample);
      }
      
      
  
    event.preventDefault();
  });
});

