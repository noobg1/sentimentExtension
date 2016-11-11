window.messager = "";

chrome.runtime.onMessage.addListener(function(msg,request, sender) {
    
    window.messager = msg.source;
    console.log(window.messager);

    axios.get(  window.messager)
  .then(function(response){
    var res = document.getElementById('message');
    var emoji ;
    if(response.data['result'] == 'pos')
        res.className = "em em-grinning";

    else if (response.data['result'] == 'neg')
      res.className = "em em-neutral_face";

    else if (response.data['result'] == 'neutral')
        res.className = "em em-no_mouth";

    else   res.className = "em em-mask";


    
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  }); 
  
});

console.log(window.messager);

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}
window.onload = onWindowLoad;