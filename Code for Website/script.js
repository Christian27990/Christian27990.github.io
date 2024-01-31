document.getElementById('valentineButton').addEventListener('click', function() {
    var response = confirm('Sheridan, will you be my Valentine? 💘');
    
    if (response) {
        alert('Yay! I hope you are free on Wednesday, February 14th. 😊');
    } else {
        alert('😢');
    }
});
