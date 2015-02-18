var BankAccount = {
  balance: 0,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  }

};

$(document).ready(function() {
  $("form#sign-up").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = $("input#initial-deposit").val();

    var newAccount = Object.create(BankAccount);
    newAccount.name = inputtedName;
    newAccount.initialDeposit = inputtedInitialDeposit;

    $("ul#name").append("<li><span class='name'>" + newAccount.name + "</span></li>");
    $("div#first-deposit").append(newAccount.initialDeposit);

    $("input#name").val("");
    $("input#initial-deposit").val("");

    // $(".name").last().click(function() {
    //   $("#show-name").show();
    //   $("#show-name h2").text(newAccount.name + " " + newAccount.initialDeposit);
    //   $(".initialDeposit").text(newAccount.initialDeposit);
    // });
  });
});
