const fs = require('fs');
const writeToFile = (holdHTML) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', holdHTML, err => {
            if (err) {
                reject(err);
                return;
            };

            resolve({
                ok: true,
                message: "File create!"
            });
        });
    });
};

generateHTMLPage = (teamProfiles) => {
    let htmlHeaderAndTitle = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    
    <body>
        <header>
            <div class="container text-center card bg-image-header">
                <div class="row">
                    <div class="col-md-12 col-sm-12 text">
                        <h1> My Team</h1>
                    </div>
                </div>
            </div>
        </header>
        <main class="container">
            <div class="container principal">
                <div class="row">
                    <div class="col-lg-12 text-left">
    `;

    let holdHTMLfooterPage = `
</div>
</div>
</div>
</main>
<footer class="container text-center py-3">
<h3 class="text-dark">&copy; 2021-2022</h3>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
crossorigin="anonymous"></script>
</body>

</html>
    `;
    let teamMemberHtmlEngineer = ``;
    let teamMemberHtmlIntern = ``;
    let TeamMemberEngineer = 0;
    let TeamMemberIntern = 0;
    let engineerHTML = ``;
    let interHTML = ``;
    let openTagEngineer = `
    <!-- Engineer -->
    <div class="row mb-3">
        <div class="col-lg-12 text-left mb-3">
            <div class="row justify-content-center">
    `;

    let closeTagEngineer = `
    </div>
    </div>
</div>
    `;
    let openTagInter =`
    <!-- intern -->
<div class="row">
    <div class="col-lg-12 text-left">
        <div class="row justify-content-center">
    `;
    
    let closeTagIntern =`
    </div>
    </div>
</div>
    `;

    // holdHTMLPages.push(htmlHeaderAndTitle);

    // generate to display with appropriate to teams' role.
    for (let i = 0; i < teamProfiles.length; i++) {
        if (teamProfiles[i].role === "Manager") {
            htmlHeaderAndTitle += `
            <!--Manager-->
            <div class="row mb-3 justify-content-center">
                <div class="col-lg-3 col-md-12 mb-4">
                    <div class="card-section border rounded p-3">
                        <div class="card-header-first rounded pb-5">
                            <h2 class="card-header-title text-white pt-2">${teamProfiles[i].name}</h2>
                            <h4 class="card-header-title text-white"><span><i
                                        class="fa fa-coffee rounded-circle text-whitesmoke"
                                        aria-hidden="true"></i> ${teamProfiles[i].role}</span></h4>
                        </div>
                        <div class="card-body text-left">
                            <h5 class="card-text">ID: <span>${teamProfiles[i].id}</span></h5>
                            <p class="card-text">Office number: <span>${teamProfiles[i].officeNumber}</span></p>
                                <div class="card-footer card-section-first rounded text-center">
                                <span><a href="mailto:${teamProfiles[i].email}"><i class="fas fa-envelope rounded-circle"
                                            aria-hidden="true"></i></a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        else if (teamProfiles[i].role === "Engineer") {
            TeamMemberEngineer = 1;
            teamMemberHtmlEngineer += `
                        <div class="col-lg-3 col-md-12 mb-2">
                            <div class="card-section card-section-second border rounded ml-4 mr-4">
                                <div class="card-header card-header-second rounded">
                                    <h2 class="card-header-title pt-2 text-white">${teamProfiles[i].name}</h2>
                                    <h4 class="card-header-title text-white"><i
                                            class="fa fa-glasses rounded-circle text-whitesmoke"
                                            aria-hidden="true"></i> ${teamProfiles[i].role}</h4>
                                </div>
                                <div class="card-body text-left">
                                    <h5 class="card-text">ID: <span>${teamProfiles[i].id}</span></h5>
                                    <div class="card-footer rounded text-center">
                                        <span><a href="https://github.com/${teamProfiles[i].githubUsername}"><i class="fab fa-github rounded-circle"
                                                    aria-hidden="true"></i></a></span>
                                        <span><a href="mailto:${teamProfiles[i].email}"><i class="fas fa-envelope rounded-circle"
                                                    aria-hidden="true"></i></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
            `;
        }
        else if (teamProfiles[i].role === "Intern") {
            TeamMemberIntern = 1;
            teamMemberHtmlIntern += `
                                <div class="col-lg-3 col-md-12 mb-4">
                                    <div class="card-section card-section-third border rounded">
                                        <div class="card-header card-header-third rounded">
                                            <h2 class="card-header-title mb-3 text-white">${teamProfiles[i].name}</h2>
                                            <h4 class="card-header-title text-white"><i
                                                    class="fas fa-user-graduate rounded-circle text-whitesmoke"
                                                    aria-hidden="true"></i> ${teamProfiles[i].role}</h4>
                                        </div>
                                        <div class="card-body text-left mb-2">
                                            <h5 class="card-text">ID: ${teamProfiles[i].id}</h5>
                                            <p class="card-text">School: <span>${teamProfiles[i].school}</span></p>

                                            <div class="card-footer rounded text-center">
                                                <span><a href="mailto:${teamProfiles[i].email}"><i class="fas fa-envelope rounded-circle"
                                                            aria-hidden="true"></i></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            `;
        };
    };
   
    if (TeamMemberEngineer > 0) engineerHTML = `${openTagEngineer}` + `${teamMemberHtmlEngineer}` + `${closeTagEngineer}`;

    if (TeamMemberIntern > 0) interHTML = `${openTagInter}` + `${teamMemberHtmlIntern}` + `${closeTagIntern}`;
 
    return (htmlHeaderAndTitle + engineerHTML + interHTML + holdHTMLfooterPage);
};

module.exports =
{
    writeToFile,
    generateHTMLPage
};