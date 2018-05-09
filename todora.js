/**
 * Created by Kim on 10/11/2017.
 */
$(document).ready(function() {

    intro = document.createElement('h3');
    intro.textContent = ' Willkommen bei Todora! Sie haben noch keine ToDo-Zettel.';
    introText = document.getElementById('introText');
    introText.appendChild(intro);
    introVisible = true;
    id=0;
    note_id=100;
    i;
    item_id=1000;



    if(localStorage.length>0){

    }
});

function createNote() {

    if (introVisible){
        introText.removeChild(intro);
        introVisible = false;
    };
    id++;
    note = document.createElement('div');
    noteClass = 'List' + Math.ceil(Math.random() * 5);
    note.className = noteClass;
    note.addEventListener('click',function () {
        note.className = 'List' + Math.ceil(Math.random() * 5);
    });

    var noteTitle = document.createElement('h2');
    noteTitle.className = 'List';
    noteTitle.id = note_id;
    noteTitle.textContent = 'New List';

    noteTitle.setAttribute('contenteditable','true');
    var list = document.createElement('ul');
    list.className = 'ulClass';
    list.id=id;

    var divBtn = document.createElement('div');
    divBtn.className ='listBtn';
    var idd = id;



    var addBtn = document.createElement('INPUT');
    addBtn.setAttribute('type','button');
    addBtn.setAttribute('value','Add');
    addBtn.setAttribute('class','add');
    addBtn.addEventListener('click',function () {

        var list = document.getElementById(idd);

        item = document.createElement('li');



        var checkbx = document.createElement('INPUT');
        checkbx.setAttribute('type','checkbox');
        checkbx.setAttribute('value','Milch');
        var description = document.createElement('label');
        description.setAttribute('contenteditable','true');
        description.textContent = 'New Item';
        var x = document.createElement('a');
        x.className = 'deleteItem';
        x.textContent='x';
        x.addEventListener('click',function () {
            $(this).parent().fadeOut(100,function () {
                $(this).remove();
            });
        });

        checkbx.addEventListener('click',function () {
            item.textDecoration='line-through';
        });

        item.appendChild(checkbx);
        item.appendChild(description);
        item.appendChild(x);
        list.appendChild(item);

    })




    var delBtn = document.createElement('INPUT');
    delBtn.setAttribute('type','button');
    delBtn.setAttribute('value','Del');

    delBtn.setAttribute('class','del');


    note.appendChild(noteTitle);
    localStorage.setItem(note_id,noteTitle.textContent);
    note.appendChild(list);
    note.appendChild(divBtn);
    divBtn.appendChild(addBtn);
    divBtn.appendChild(delBtn);




    inGrid = document.getElementById('noteGrid');
    inGrid.addEventListener('DOMNodeInserted',function () {

    },false);
    inGrid.addEventListener('DOMCharacterDataModified',function () {

        for(i=100;i<note_id;i++){
            localStorage.setItem(i,document.getElementById(i).textContent);
        }

        for(j=1000;j<item_id;j++){
            localStorage.setItem(j,document.getElementById(j).textContent);
        }


        },false);
    inGrid.addEventListener('DOMNodeRemoved',function () {
        },false);


    inGrid.appendChild(note);

    note_id++;








}


