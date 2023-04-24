name_of_the_student_array=[];
student_display_array=[];
function submit()
{     
    for(var i=1; i<=4; i++)
  {var name_of_the_student= document.getElementById("name_of_the_student_"+i).value;
  console.log(name_of_the_student);
  name_of_the_student_array.push(name_of_the_student);
}
document.getElementById("display_name_without_commas").innerHTML= name_of_the_student_array;

var lenght_of_student_array= name_of_the_student_array.length;

for ( var k=0; k<lenght_of_student_array; k++){
  student_display_array.push("<h4>NAME - "+ name_of_the_student_array[k]+"</h4>");
 console.log(student_display_array);
}
document.getElementById("display_name_with_commas").innerHTML= student_display_array;
var remove_commas = student_display_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_with_commas").innerHTML= remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
  name_of_the_student_array.sort();
  var display_student_array_sorting=[];
  var lenght_of_student_array= display_student_array_sorting;
  for (var k=0; k <lenght_of_student_array; k++)
  {
    display_student_array_sorting.push("<h4>NAME - "+ name_of_the_student_array[k]+"</h4>");
    console.log(display_student_array_sorting);
  }
    var remove_commas = display_student_array_sorting.join(" ");
  console.log(remove_commas);
  document.getElementById("display_name_with_commas").innerHTML= remove_commas;
  
  
  }