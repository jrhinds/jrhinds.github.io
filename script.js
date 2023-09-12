document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('api-form');
    const curlCommandArea = document.getElementById('curl-command');

    document.getElementById('generate-curl').addEventListener('click', function() {
        let selectedActions = Array.from(form['repo-actions']).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

        let curlCommands = selectedActions.map(action => {
            switch(action) {
                case "GET /repos/:owner/:repo":
                    const owner = document.getElementById('owner').value;
                    const repo = document.getElementById('repo').value;
                    return `curl -H "Authorization: token YOUR_TOKEN" "https://api.github.com/repos/${owner}/${repo}"`;
                
                case "GET /user/repos":
                    return `curl -H "Authorization: token YOUR_TOKEN" "https://api.github.com/user/repos"`;

                case "GET /repos/:owner/:repo/branches":
                    const ownerBranches = document.getElementById('owner-branches').value;
                    const repoBranches = document.getElementById('repo-branches').value;
                    return `curl -H "Authorization: token YOUR_TOKEN" "https://api.github.com/repos/${ownerBranches}/${repoBranches}/branches"`;
                
                // Add more cases based on the options
                default:
                    return '';
            }
        });

        curlCommandArea.value = curlCommands.join('\n');
    });
});
