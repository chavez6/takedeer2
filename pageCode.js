function print(){
    console.log('pressed')
}

function submitForm() {
    // Get the first form with the name, 
    // Hopefully there is only one, 
    // but there are more, select the correct index
    var frm = document.getElementsByName('formbro')[0];
    frm.submit(); // Submit
    frm.reset();  // Reset
    return false; // Prevent page refresh
 }
