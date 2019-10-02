//HTML interaction
'use strict';

//Event listener
document.getElementById('img1').addEventListener('click', clickhandler);

//Event Funcitons
function clickhandler() {
    //Update content
    document.getElementById('main-heading').innerhtml = 'AWESOME HEADING!';
}