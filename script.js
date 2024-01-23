var ReadKey = ['firstName', 'lastName', 'VideoAnswer','option_Save','option_NewDoc','option_Highlight','option_Undo','Nr differences','MissingNr','Score chart','Oldest employe','MissingLetter','SelectedNR','WordsPerMinute',"WordsTyped",'Accuracy','CorrectWords'];
var storedData = {};
ReadKey.forEach(function(key) {
    storedData[key] = localStorage.getItem(key);
});
var dataBox = document.getElementById('dataBox');
for (var key in storedData) {
    var data = storedData[key];
    var dataElement = document.createElement('p');
    if (key === 'Nr differences') {
        if (data === '1') {
            dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
        } else {
            dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
        }
    } else if (key === 'MissingNr') {
        if (data === '4') {
            dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
        } else {
            dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
        }

    } else if (key === 'Score chart') {
        if (data === '60') {
            dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
        } else {
            dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
        }

    } else if (key === 'MissingLetter') {
        if (data === 'Q') {
            dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
        } else {
            dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
        }

    } else if (key === 'Oldest employe') {
        if (data === 'Christoph') {
            dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
        } else {
            dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
        }

    } else if (key === 'MissingLetter') {
        if (data === 'Q') {
            dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
        } else {
            dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
        }

    } else if (key === 'option_Save') {
        if (data === 'Ctrl + S') {
            dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
        } else {
            dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
        }

    } else if (key === 'option_Undo') {
        if (data === 'Ctrl + Z') {
            dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
        } else {
            dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
        }

    } else if (key === 'option_NewDoc') {
        if (data === 'Ctrl + N') {
            dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
        } else {
            dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
        }

    } else if (key === 'option_Highlight') {
        if (data === 'Shift + arrow keys') {
            dataElement.innerHTML = '<span class="highlight-green">' + key + ': ' + data + '</span>';
        } else {
            dataElement.innerHTML = '<span class="highlight-red">' + key + ': ' + data + '</span>';
        }

    } else if (key === 'SelectedNR') {
        if (data === '30') {
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
    sendMail('Results', 'dinu.topala@katoennatie.com');
});

var sendFeedbackButton = document.getElementById('sendFeedbackButton');
sendFeedbackButton.addEventListener('click', function() {
    var feedbackSubject = 'IST feedback';
    var feedbackBody = 'What should be changed:\n\nIdeas for other exercises:';
    feedbackBody = encodeURIComponent(feedbackBody);
    var feedbackMailtoLink = 'mailto:dinu.topala@katoennatie.com?subject=' + feedbackSubject + '&body=' + feedbackBody;
    window.location.href = feedbackMailtoLink;
});

function sendMail(subject, email) {
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
}
