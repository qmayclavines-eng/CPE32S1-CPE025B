const prompt = require("readline-sync").question;

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let running = true;

while (running) {
    let choice = prompt("What do you want to do?\n(show / all / add / search / quit): ");

    if (!choice) {
        console.log("No input detected. Returning to main menu...");
        continue;
    }

    choice = choice.trim().toLowerCase();

    if (choice === "quit") {
        console.log("Goodbye!");
        running = false;

    } else if (choice === "show") {
        let input = prompt(`Enter an index number (0 to ${contacts.length - 1}): `);

        if (input === "") {
            console.log("Cancelled. Returning to main menu...");
            continue;
        }

        let index = Number(input);

        if (!Number.isInteger(index) || index < 0 || index >= contacts.length) {
            console.log(`Invalid index. Please enter a number between 0 and ${contacts.length - 1}.`);
        } else {
            let c = contacts[index];
            console.log(`[${index}] Name: ${c.name}, Phone: ${c.phone}, Email: ${c.email}`);
        }

    } else if (choice === "all") {
        if (contacts.length === 0) {
            console.log("No contacts available.");
        } else {
            for (let i = 0; i < contacts.length; i++) {
                let c = contacts[i];
                console.log(`[${i}] Name: ${c.name}, Phone: ${c.phone}, Email: ${c.email}`);
            }
        }

    } else if (choice === "add") {
        let name  = prompt("Enter name: ");
        let phone = prompt("Enter phone: ");
        let email = prompt("Enter email: ");

        if (name === "" || phone === "" || email === "") {
            console.log("All fields are required. Contact was not added.");
        } else {
            contacts.push({
                name:  name.trim(),
                phone: phone.trim(),
                email: email.trim()
            });
            console.log(`Contact "${name.trim()}" added successfully!`);
        }

    } else if (choice === "search") {
        let searchName = prompt("Enter the name to search for: ");

        if (searchName === "") {
            console.log("No name entered. Returning to main menu...");
            continue;
        }

        let found = false;

        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name.toLowerCase() === searchName.trim().toLowerCase()) {
                console.log(`Found! Phone: ${contacts[i].phone}, Email: ${contacts[i].email}`);
                found = true;
                break;
            }
        }

        if (!found) {
            console.log(`Contact "${searchName.trim()}" not found.`);
        }

    } else {
        console.log(`"${choice}" is not a valid option. Please choose: show, all, add, search, or quit.`);
    }
}