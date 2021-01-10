const person = {
  firstname: 'John',
  lastname: 'Doe',
  getFullName: function () {
    const fullname = this.firstname + '' + this.lastname
    return fullname
  }
}

const logName = function (lang1, lang2) {
  console.log('Logged:' + this.getFullName())
  console.log('Arguments:' + lang1 + lang2)
  console.log('--------------')
}

const logPersonName = logName.bind(person)

logPersonName('John', 'lee')
