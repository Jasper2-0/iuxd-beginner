$(document).ready(function(){
    setBindings();
});

function setBindings() {
    $("li a").click(function(e){
        e.preventDefault();
        let sectionID = e.currentTarget.id + "Section";

        $("html, body").animate({
             scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
}