var messArr ;
function start(document) {

        
        var message = window.getSelection().toString();

        

            var xmlhttp = new XMLHttpRequest();
            //var url = "http://127.0.0.1:5000/q/"+message;
            var url = "http://noobg1.pythonanywhere.com/q/" + message;


        return url;
        
}



chrome.runtime.sendMessage({
    action: "getSource",
    source: start(document)
});