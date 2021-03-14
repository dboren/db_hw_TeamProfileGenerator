function generateChart(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1 class="bg-primary text-center">My Team</h1>
        </header>
        <main class="container">
            <div class="card border">
                <h3>${data.name}</h3>
                <h4>Manager</h4>
                <p>ID: ${data.id}</id>
                <p>email: ${data.email}</p>
                <p>Office number: ${data.officeNum}</p>
            </div>
        </main>
    </body>
    </html>
    `
}

module.exports = generateChart;