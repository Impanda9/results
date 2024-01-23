var ReadKey = ['firstName', 'lastName', 'VideoAnswer','option_Save','option_NewDoc','option_Highlight','option_Undo','Nr differences','MissingNr','Score chart','Oldest employe','MissingLetter','SelectedNR','WordsPerMinute',"WordsTyped",'Accuracy','CorrectWords'];
var storedData = {};
ReadKey.forEach(function(key) {
  storedData[key] = localStorage.getItem(key);
});
var dataBox = document.getElementById('dataBox');
for (var key in storedData) {
  var data = storedData[key];
  var dataElement = document.createElement('p');
  if (key === 'Nr differences' || key === 'MissingNr' || key === 'Score chart' || key === 'MissingLetter' || key === 'Oldest employe' || key === 'MissingLetter' || key === 'option_Save' || key === 'option_Undo' || key === 'option_NewDoc' || key === 'option_Highlight' || key === 'SelectedNR') {
    if (data === '1' || data === '4' || data === '60' || data === 'Q' || data === 'Christoph' || data === 'Q' || data === 'Ctrl + S' || data === 'Ctrl + Z' || data === 'Ctrl + N' || data === 'Shift + arrow keys' || data === '30') {
      dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
    } else {
      dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
    }
  } else {
    dataElement.innerText = key + ': ' + data;
  }
  dataBox.appendChild(dataElement);
}

var sendEmailButton = document.getElementById('sendEmailButton');
sendEmailButton.addEventListener('click', function() {
  var subject = 'Results';
  var email = 'dinu.topala@katoennatie.com';
  var body = '';
  for (var key in storedData) {
    var data = storedData[key];
    if (key === 'WordsPerMinute' || key === 'WordsTyped' || key === 'Accuracy' || key === 'CorrectWords') {
      body += key + ': ' + data + '\n';
    } else {
      body += key + ': ' + data + '\n\n';
    }
  }
  body = encodeURIComponent(body);
  var mailtoLink = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
  window.location.href = mailtoLink;
});
