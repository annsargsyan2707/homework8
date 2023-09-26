const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
class Account {
  #balance;
  constructor(name, balance) {
    this.id = uid();
    this.name = name;
    this.#balance = balance;
  }
  set balance(money) {
    this.#balance = money;
  }
  get balance() {
    return this.#balance;
  }
  credit(money) {
    this.#balance += money;
  }
  debit(money) {
    if (this.#balance >= money) {
      this.#balance -= money;
    } else {
      return "write valide number";
    }
  }
  transferTo(target, money) {
    if (target.balance >= money) {
      target.credit(money);
      this.debit(money);
    }
  }
  static identifyAccounts(...accountes) {
    return accountes.map((accounte) => accounte.id);
  }
}
const saving = new Account("Joe", 1000);
const current = new Account("Michael", 8000);
saving.credit(5000);
console.log(saving.balance);
saving.debit(1000);
console.log(saving.balance);
saving.debit(2000);
console.log(saving.balance);
saving.transferTo(current, 1000);
console.log(saving.balance);
console.log(Account.identifyAccounts(saving, current));
