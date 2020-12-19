
function create(name, ele, clas, id) {
  var name = document.createElement(ele);
  name.setAttribute('class', clas);
  name.id = id
  return name

}

var diffmilli, yearval, montval, secondval, minuteval, hoursval, daysval, weeks = '';

var container = create(container, 'div', 'cont', 'contt')

var title = create(title, 'div')
title.innerHTML = "<h1>Age calculator</h1>"
container.append(title);

var datelable = create(datelable, 'label', 'lab')
datelable.setAttribute('for', 'datent');
datelable.innerHTML = "Enter the date"

var dateentry = create(dateentry, 'input', 'dateent', 'givendate');
dateentry.type = "date";



var submit = create(submit, 'button', 'btn', 'sub')
submit.type = "button"
submit.innerHTML = "calculate"

var form = create(form, 'form', 'form')

var table = create(table, 'table')

var tr = create(tr, 'tr', 'tr1');

var td1 = create(td1, "td", "td");
td1.append(datelable)

var td2 = create(td2, "td", "td");
td2.append(dateentry)





table.append(tr);
tr.append(td1, td2);
form.append(table);

form.append(submit);
container.append(form);

document.body.append(container);


let presentDateMilliSeconds = Date.now();
console.log(presentDateMilliSeconds)


function getdate() {

  let inputdate = document.getElementById('givendate').value
  console.log(inputdate)


  let millisecOfInputdate = Date.parse(inputdate);
  console.log(millisecOfInputdate);

  diffmilli = presentDateMilliSeconds - millisecOfInputdate
  console.log(diffmilli)

  var minutes = 1000 * 60;
  var hours = minutes * 60;
  var days = hours * 24
  var years = days * 365

  yearval = Math.round(diffmilli / years);
  console.log('year', yearval)

  montval = Math.round(diffmilli / (days * 31));


  console.log('months', montval)

  weeks = Math.round(diffmilli / (days * 7));
  console.log('weeks', weeks)

  daysval = Math.round(diffmilli / (days));
  console.log('days', daysval)

   hoursval = Math.round(diffmilli / (minutes * 60))
  console.log('hours', hoursval)

  minuteval = Math.round(diffmilli / (minutes));
  console.log('minutes', minuteval)

  secondval = Math.round(diffmilli / 1000);
  console.log('seconds', secondval)

  console.log('milliseconds', diffmilli)


  var table1 = create(table1, 'table')


  var tr1 = create(tr1, 'tr', 'tr1');
  var td11 = create(td11, "td", "td");
  var td21 = create(td21, "td", "td");

  var yearlabel = create(yearlabel, 'label', 'year')
  yearlabel.setAttribute('for', 'yearsdata')
  yearlabel.innerHTML = "Diffrence in years is"

  var yearentry = create(yearentry, 'input', 'yearsdata')
  yearentry.value = yearval

  td21.append(yearentry)
  td11.append(yearlabel)



  var tr2 = create(tr2, 'tr', 'tr1');
  var td12 = create(td12, "td", "td");
  var td22 = create(td22, "td", "td");

  var monthlabel = create(monthlabel, 'label', 'year')
  monthlabel.setAttribute('for', 'monthdata')
  monthlabel.innerHTML = "Diffrence in month is"

  var monthentry = create(monthentry, 'input', 'monthdata')
  monthentry.value = montval

  td22.append(monthentry)
  td12.append(monthlabel)


  var tr3 = create(tr3, 'tr', 'tr1');
  var td13 = create(td13, "td", "td");
  var td23 = create(td23, "td", "td");

  var weeklabel = create(weeklabel, 'label', 'year')
  weeklabel.setAttribute('for', 'weekdata')
  weeklabel.innerHTML = "Diffrence in week is"

  var weekentry = create(weekentry, 'input', 'weekdata')
  weekentry.value =weeks

  td23.append(weekentry)
  td13.append(weeklabel)


  var tr4 = create(tr4, 'tr', 'tr1');
  var td14 = create(td14, "td", "td");
  var td24 = create(td24, "td", "td");

  var dayslabel = create(dayslabel, 'label', 'year')
  dayslabel.setAttribute('for', 'daysdata')
  dayslabel.innerHTML = "Diffrence in days is"

  var daysentry = create(daysentry, 'input', 'daysdata')
  daysentry.value =daysval

  td24.append(daysentry)
  td14.append(dayslabel)


  var tr5 = create(tr5, 'tr', 'tr1');
  var td15= create(td15, "td", "td");
  var td25 = create(td25, "td", "td");

  var minlabel = create(minlabel, 'label', 'year')
  minlabel.setAttribute('for', 'mindata')
  minlabel.innerHTML = "Diffrence in minutes is"

  var minentry = create(minentry, 'input', 'mindata')
  minentry.value = minuteval

  td25.append(minentry)
  td15.append(minlabel)



  
  var tr6 = create(tr6, 'tr', 'tr1');
  var td16= create(td16, "td", "td");
  var td26 = create(td26, "td", "td");

  var seclabel = create(seclabel, 'label', 'year')
  seclabel.setAttribute('for', 'secdata')
  seclabel.innerHTML = "Diffrence in seconds is"

  var secentry = create(secentry, 'input', 'secdata')
  secentry.value = secondval

  td26.append(secentry)
  td16.append(seclabel)

  var tr7 = create(tr7, 'tr', 'tr1');
  var td17= create(td17, "td", "td");
  var td27 = create(td27, "td", "td");

  var millilabel = create(millilabel, 'label', 'year')
  millilabel.setAttribute('for', 'millidata')
  millilabel.innerHTML = "Diffrence in milliseconds is"

  var millientry = create(millientry, 'input', 'millidata')
  millientry.value = diffmilli

  td27.append(millientry)
  td17.append(millilabel)



  table1.append(tr1,tr2,tr3,tr4,tr5,tr6,tr7)
  tr2.append(td12,td22)
  tr1.append(td11, td21)
  tr3.append(td13,td23)
  tr4.append(td14,td24)
  tr5.append(td15,td25)
  tr6.append(td16,td26)
  tr7.append(td17,td27)
  container.append(table1)
}

// let now = new Date();
// console.log(now);

document.getElementById("sub").addEventListener('click', getdate)



