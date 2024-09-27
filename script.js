function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};


function Library() {
    this.collection = [];
}


Library.prototype.addBook = function(book) {
    this.collection.push(book);
};


Library.prototype.searchByTitle = function(title) {
    return this.collection.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
};


Library.prototype.searchByAuthor = function(author) {
    return this.collection.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
};


Library.prototype.displayAllBooks = function() {
    return this.collection.map(book => book.displayInfo()).join("\n");
};


let myLibrary = new Library();


let book1 = new Book('48 Laws of Power', 'Robert Greene', 176);
let book2 = new Book('The Lightning Thief', 'Rick Riordan', 450);


myLibrary.addBook(book1);
myLibrary.addBook(book2);


console.log(myLibrary.displayAllBooks());

console.log(myLibrary.searchByTitle('48 Laws of Power'));

console.log(myLibrary.searchByAuthor('Robert Greene'));

//----------------------------------------------------------------------------------------------------------//


function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}

Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    } else {
        console.log('Deposit amount must be positive.');
    }
};


Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
    } else if (amount > this.balance) {
        console.log('Insufficient funds.');
    } else {
        console.log('Withdrawal amount must be positive.');
    }
};


Account.prototype.calculateInterest = function(years, rate) {
    let P = this.balance;
    let r = rate / 100;
    let n = 1;  
    let A = P * Math.pow((1 + r / n), n * years);

    A = Math.ceil(A);
    
    console.log(`After ${years} years at an interest rate of ${rate}%, the balance will be ${A}`);
    return A;
};


let account1 = new Account(12345, 'John Doe', 1000);


account1.deposit(500);

account1.withdraw(200);

account1.calculateInterest(5, 5);
