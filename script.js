$(document).ready(function() {
    var youtubeUrlRegex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w-]{11})(?:\S+)?/;
        $("#right").click(function() {
            let message = $("#message").val();
            let  matches = message.match(youtubeUrlRegex);
            if(matches){
                message = message.replace(youtubeUrlRegex, `<div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/${matches[1]}' allowfullscreen></iframe></div>`);
                }
            if(message.length > 0){
                $(".messages").append(`<div class='row justify-content-center'><div class='col-9 col-lg-4  alert alert-primary' role='alert' style='word-wrap: break-word;'>${message}</div></div>`);
            }
        });

        $("#left").click(function() {
            let message = $("#message").val();
            let  matches = message.match(youtubeUrlRegex);
            if(matches){
                message = message.replace(youtubeUrlRegex, `<div class='embed-responsive embed-responsive-16by9'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/${matches[1]}' allowfullscreen></iframe></div>`);
                }
            if(message.length > 0){
                $(".messages").append(`<div class='row justify-content-center'><div class='col-9 col-lg-4  alert alert-success' role='alert' style='word-wrap: break-word;'>${message}</div></div>`);
            }
        });
    
})                
