$(document).ready(function (){
  /*  $('div#Student-tally button.tallyUp').click(function (){
      var patrons = $(this).siblings('patrons');
      var patronsNum = parseInt( $(patrons).text());

      console.log(patronsNum);
      console.log(patrons);
      console.log("hi");

  });*/ /*Was going to implement, but it's too close to demo*/

    $('div.addEditButtons input.editShift').click(function (){
      let sTime = document.getElementById('startTime');
      var sTimeValue =  sTime.value;
      let eTime = document.getElementById('endTime');
      var eTimeValue =  eTime.value;
      let employee = document.getElementById('employee');
      var employeeValue =  employee.value;
      let students = document.getElementById('students');
      var studentsValue =  students.value;
      let nonStudents = document.getElementById('nonStudents');
      var nonStudentsValue =  nonStudents.value;
      let type = document.getElementById('type');
      var typeValue =  type.value;
      var errorCheck = false;
      if(sTimeValue<13 && sTimeValue>0){
        $(sTime).parent().css('color', 'black');
      }else{
        $(sTime).parent().css('color', 'red');
        errorCheck = true;
      }//makes sure the times are vaild

      if(eTimeValue<13 && eTimeValue>0){
        $(eTime).parent().css('color', 'black');
      }else{
        $(eTime).parent().css('color', 'red');
        errorCheck = true;
      }//makes sure the times are vaild

      if(employeeValue == "Jack" || employeeValue == "Bill" || employeeValue == "Zelda"
      || employeeValue == "Kaladin"){
        $(employee).parent().css('color', 'black');
      }else{
        $(employee).parent().css('color', 'red');
        errorCheck = true;
      }//makes sure the employee actually exists

      if(studentsValue>=0){
        $(students).parent().css('color', 'black');
      }else{
        $(students).parent().css('color', 'red');
        errorCheck = true;
      }//makes sure there are no negative counts

      if(nonStudentsValue>=0){
        $(nonStudents).parent().css('color', 'black');
      }else{
        $(nonStudents).parent().css('color', 'red');
        errorCheck = true;
      }//makes sure there are no negative counts

      if(typeValue === "Gallery" || typeValue === "Outreach" || typeValue === "SEEDS" || typeValue === "Watercolor"){
        $(type).parent().css('color', 'black');
      }else{
        $(type).parent().css('color', 'red');
        errorCheck = true;
      }//makes sure the type is vaild

      var errorMessage = $('<p id = "errorMessage">Items in red need to be fixed</p>')
      var commentBox = document.getElementById('commentBox');
      if(errorCheck){
        $(errorMessage).appendTo($(commentBox)).fadeOut(5000,function (){
          $(this).remove();
      });
      }
  });//form validation for save editing shift

  $('div#chatContainer button#post').click(function (){
    var commentBox = $(this).prev();
    var userInput = document.getElementById('userInput');
    var newPost = $('<p class = "newPost"> </p>')
    newPost.text(userInput.value);
    $(newPost).prependTo(commentBox);
  });//adds new posts to chat section


    checkQueryString();
    //used to make sure edits to a shift are vaild
});


function checkQueryString(){
  var queryString = window.location.search;
  console.log(queryString);
  var urlParams = new URLSearchParams(queryString);
  if (urlParams.has('searchList')){
    var keyword = urlParams.get("searchList");
    if (keyword === 'gallery'){
        window.alert("you searched for gallery");
    }else {
      window.alert("you didn't search for gallery");
    }
  }
}//search function


