var ReadKey = ['firstName', 'lastName', 'VideoAnswer', 'option_Save', 'option_NewDoc', 'option_Highlight', 'option_Undo', 'Nr differences', 'wordsPerMinute', 'accuracy', 'errorCount', 'wordsPerMinute', 'accuracy', 'errorCount'];
var storedData = {};
ReadKey.forEach(function (key) {
  storedData[key] = localStorage.getItem(key);
});

function sendEmail() {
  var email = 'dinu.topala@katoennatie.com';
  var subject = 'Results';
  var body = '';

  // Group 1: userID
  body += 'UserID:\n';
  body += 'First Name: ' + storedData['firstName'] + '\n';
  body += 'Last Name: ' + storedData['lastName'] + '\n\n';

  // Group 2: Vid Answer
  body += 'Vid Answer:\n';
  body += 'Video Answer: ' + storedData['VideoAnswer'] + '\n\n';

  // Group 3: SctKnowledge
  body += 'SctKnowledge:\n';
  body += 'New Document: ' + storedData['option_NewDoc'] + '\n';
  body += 'Highlight: ' + storedData['option_Highlight'] + '\n';
  body += 'Undo: ' + storedData['option_Undo'] + '\n\n';

  // Group 4: Picture differences
  body += 'Picture differences:\n';
  body += 'Number of Differences: ' + storedData['Nr differences'] + '\n\n';

  // Group 5: Type test
  body += 'Type test:\n';
  body += 'Words Per Minute: ' + storedData['wordsPerMinute'] + '\n';
  body += 'Accuracy: ' + storedData['accuracy'] + '\n';
  body += 'Error Count: ' + storedData['errorCount'] + '\n';

  var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  window.location.href = mailtoLink;
}
