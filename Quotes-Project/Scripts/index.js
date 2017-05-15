var arr = [];
$(document).ready(function(){
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=desc&filter[posts_per_page]=40", function(json) {

        

        json.forEach(function(val) {
          arr.push(val);
            

        });
        getQuote();
    });
    
});

function getQuote(){
        var col = getBackgroundColor();
         var tempElem = arr[Math.floor((Math.random() * 38) + 1)];
         var html = "";
         html += tempElem.content;
         html += "<p class='author'>"+tempElem.title+"</p>";
         $(".mainContent").html(html);
         $("p").css('color', col);
         document.body.style.backgroundColor = col;//getBackgroundColor()+" "+"!important";
         

}

function getBackgroundColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}