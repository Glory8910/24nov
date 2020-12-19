
function create(name, ele, clas, id) {
    var name = document.createElement(ele);
    name.setAttribute('class', clas);
    name.id = id
    return name

}



var container = create(container, 'div', 'cont', 'contt')

var randbtn = create(randbtn, 'button', 'btn', 'gen')
randbtn.type = "button"
randbtn.innerHTML = "Generate Random number"


var title1 = create(title1, 'div')
title1.innerHTML = "<h1>Ramdom number calculator</h1>"
container.append(title1);

let v = [];
var numbarray = [];
let last = [];

function randval() {

    let vals = rand();

    function rand() {
        let is = 8;
        var as = [];
        while (is) {
            let randv = Math.floor(Math.random() * 8);
            

            if (as.length !== 8 && as.length <= 8) {
                if (as.indexOf(randv) === -1) {

                    is--;
                    as.push(randv);
                   
                }
            }
            else if (as.indexOf(randv) !== -1) {
                rand()
            }

        }
      
        return as
    }

    let eightdighitval = vals.join('');
   
   document.getElementById('entryval').value = eightdighitval;
}

var formm = create(formm, 'form', 'forms')
var lable1 = create(lable1, 'label', 'lab')
lable1.setAttribute('for', 'ent');
lable1.innerHTML = "Random number is"

var entry = create(entry, 'input', 'ent','entryval');
formm.append(lable1, entry)
container.append(randbtn, formm)
document.body.append(container)

document.getElementById('gen').addEventListener('click', randval)