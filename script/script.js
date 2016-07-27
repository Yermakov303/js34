// document.getElementsById('idName') поиск по ид 
// document.getElementsByTagName('ul') поиск по тегу
// document.getElementsByClassName('menu') поиск по классу 
// document.querySelector('.menu_item') поиск по селектору цсс
// document. querySelectorAll('.') 
// element.ineerHTML = 'добавляем текст';
// element.getAttribute('href') атрибуты елемента 
// element.setAtrribute('href', 'http://new_adress');
// el.removeAtrribute('href') удалить атрибут
// el.className работа с классом 
// el.classList массив со всеми класами 
// el.classList.add('new class')

var test = { 
addElement: function(params){
    console.log(params);
    var element = document.createElement(params.tagName);
  if (params.inputType){
      element.setAttribute('type', params.inputType);
  }
  if (params.content){
      element.innerHTML = params.content;
  }    
  if (params.className){
      element.className = params.className;
  }
   
  if (params.parentElement){
      params.parentElement.appendChild(element);
    }
     if (params.Value){
      element.setAttribute('value', params.Value);
    }
    return element;
},
generationQuestion: function(questionsAmount, answerAmount){
   
    for (var i=0; i<questionsAmount; i++){
        this.addElement({
        tagName: 'h2',
        content: (i+1) + '.  ' + 'Вопрос №' + (i+ 1),
        parentElement: form 
        });
        for (var j=0; j<answerAmount; j++ ){
            var label = this.addElement({
                tagName: 'label',
                content: 'Вариант ответа №' + (j+1),
                 className: 'checkbox',
                parentElement: form
            });
            
            var checkbox = this.addElement({
                tagName: 'input',
                inputType: 'checkbox'
            });
            
            label.insertAdjacentElement('afterBegin', checkbox);
        }
    };
}

} 

var body = document.querySelector('body');
 test.addElement({
     tagName: 'h1',
     content: 'Тест по программированию',
     className: 'text-center',
     parentElement: body
 });

var form = test.addElement({
    tagName: 'form',
    className: 'text-center',
    parentElement: body
});

test.generationQuestion(3,3);

test.addElement({
    tagName: 'input',
    inputType: 'submit',
    content: 'ololo',
    className: 'btn btn-default, text-center',
    Value: 'Проверить мои результаты',
    parentElement: form
});

