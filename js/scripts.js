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
    $("ul#initial-deposit").append("<li><span class='initialDeposit'>" +
     newAccount.initialDeposit +
     "</span></li>");

    $("input#name").val("");
    $("input#initial-deposit").val("");

    $(".name").last().click(function() {
      $("#show-name").show();
      $("#show-initial-deposit h2").text(newAccount.name + " " + newAccount.initialDeposit);
      $(".initial-deposit").text(newAccount.initialDeposit);
    });
  });
});
