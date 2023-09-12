document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('api-form');
    const curlCommandArea = document.getElementById('curl-command');

    document.getElementById('generate-curl').addEventListener('click', function() {
        let selectedActions = Array.from(form['repo-actions']).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
        
        // Generate cURL commands based on selected actions
        let curlCommands = selectedActions.map(action => {
            switch(action) {
                case "GET /repos/:owner/:repo":
                    return `curl -H "Authorization: token YOUR_TOKEN" "https://api.github.com/repos/:owner/:repo"`;
                case "GET /user/repos":
                    return `curl -H "Authorization: token YOUR_TOKEN" "https://api.github.com/user/repos"`;
                // Add more cases based on the options
                default:
                    return '';
            }
        });
        
        curlCommandArea.value = curlCommands.join('\n');
    });
});
