import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
 
inquirer
    .prompt([
        {
            message: "Type your URL: ",
            name: "URL"
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        let qr_png = qr.image(url);
        qr_png.pipe(fs.createWriteStream("qr_img.png"));

        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })
    .catch((error) => {
        if(error.isTtyError){
            console.log("Error on the first if");
        } else{
            console.log("Error on the first else");
        }
    });
