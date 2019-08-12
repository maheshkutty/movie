$('document').ready(function(){
    $("#movie_img").change(function(event){
        
        fileName = event.target.files[0].type;
        fileExtension = fileName.replace(/^.*\./, '');
        alert(fileExtension);
        if (fileExtension === "image/jpeg" || fileExtension === "image/jpg")
        {    $('#img_error').text('');
            return true
        }
        else
        {
            $('#img_error').text('Invalid file type');
            $("#movie_img").focus();
            return false;
        }
    })
});
