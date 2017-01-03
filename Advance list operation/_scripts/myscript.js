 
//dynamically generate the list items.
 $(document).ready(function(){

  var newListItem;
  var newList = true;
  var theList = document.getElementById('theList');

  $('#addToDo').on('click', function(e){

    e.preventDefault(); //avoid to submit the form.

    if(newList == true){

      var theValue = $("#toDoItem").val();
      newListItem = '<li><span class="handle"> :: </span> <input class="listItem" value="' +theValue+'"><a class="removeListItem" style="display: none;" href="#"> X </a></li>';
       newList = false;

    }else{

      var theValue = $("#toDoItem").val();
      newListItem = $('#theList li:last').clone(); // cloning the last element of the list.
      newListItem.find('input').attr('value', theValue);
    }

    var theCount = $('#theList li').length +1;
    if(theCount > 1){

      $('#doClearAll').css('display', 'block');
    }

    $('#theList').append(newListItem);

    $("#toDoItem").val('');
    $("#toDoItem").focus();

    //for sorting using jquery.sortable.js (Html 5 sortable libarary )
    $('.sortable').sortable('destroy'); //if there is any instance of sortable, remove it.
    $('.sortable').sortable({

      handle: '.handle'
    });

    //for saving the list.

    localStorage.setItem('todoListplus',theList.innerHTML);

  });

    $('input[type="text"]').on('keydown', function(e){

      var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
      if(key == 13){ //13 is the value of return key

        e.preventDefault();
          //this is pointing to text box.
        var inputs = $(this).closest('form').find(':input:visible');
        inputs.eq(inputs.index(this) + 1).focus(); //button will be focus.
      }

    });

      $('#theList').on('change','.listItem', function(e){

          currentValue = $(this).val();
          $(this).attr('value', currentValue);

          localStorage.setItem('todoListplus',theList.innerHTML);
      });

      $('.sortable').sortable().bind('sortupdate', function(){

          localStorage.setItem('todoListplus',theList.innerHTML);
      });

      $('#theList').on('mouseover','li', function(e){ //li the item we are targeting

          var $thisA = $(this).find('a'); 
          $thisA.css('display', 'block');
      });

       $('#theList').on('mouseout','li', function(e){ //li the item we are targeting

          var $thisA = $(this).find('a'); // here this is li element
          $thisA.css('display', 'none');
      });

       //remove the list item.
       $('#theList').on('click','.removeListItem', function(e){


            e.preventDefault();
            $(this).parent().remove();  // this = a.removeListItem
 
            localStorage.setItem('todoListplus',theList.innerHTML);
       });

       $('#doClearAll').on('click', '#clearAll', function(e){

            e.preventDefault();
            $('#theList').children().remove();
            newList = true;
            $('#toDoItem').val('');
            $('#doClearAll').css('display','none');
            $('#toDoItem').focus();

            localStorage.setItem('todoListplus',theList.innerHTML);

       });  

       loadToDo();

       function loadToDo(){

        if(localStorage.getItem('todoListplus')){

            theList.innerHTML = localStorage.getItem('todoListplus');

             $('.sortable').sortable('destroy'); //if there is any instance of sortable, remove it.
              $('.sortable').sortable({

                   handle: '.handle'
            });


              var theCount = $('#theList li').length +1;
             if(theCount > 1){

              $('#doClearAll').css('display', 'block');
            }


        }
       }

   }); 