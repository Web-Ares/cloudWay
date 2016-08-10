(function(){
    'use strict';

    $(function(){

        $.each( $( '.site__header-search' ), function(){
            new Autocomplete( $( this ) );
        } );

    });

    var Autocomplete  = function (obj) {
        this.obj = obj;
        this.input = obj.find('input');

        this.init();
    };
    Autocomplete.prototype = {
        init: function () {
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function () {
            var self = this;

            return {
                addEvents: function () {
                    self.input.on({
                        'keyup': function(I){
                            switch(I.keyCode) {
                                case 13:
                                    self.obj.submit();
                                    self.input.val('');
                                    $('.autocomplite-result').remove();
                                    break;
                                case 32:
                                case 27:
                                case 38:
                                case 40:
                                    break;
                                default:

                                    self.valueInput = $(this).val();
                                    var count = 0;
                                    if(self.valueInput.length>0){
                                        self.core.ajaxRequest($(this),self.valueInput.length);
                                    }else{
                                        if($(this).val()==''){
                                            $('.autocomplite-result').remove();
                                            self.suggestSelected = 0;
                                        }
                                    }
                                    break;
                            }

                        },
                        'keydown': function(I){
                            switch(I.keyCode) {
                                case 27:
                                    $('.autocomplite-result').remove();
                                    self.suggestSelected = 0;
                                    return false;
                                    break;
                                case 38:
                                case 40:
                                    I.preventDefault();
                                    if(self.countItems>0){
                                        self.core.keyActivate(I.keyCode);
                                        if(self.suggestSelected == self.countItems){
                                            self.suggestSelected = 0
                                        }
                                    }
                                    break;
                            }
                        }
                    });
                    $('html').click(function(){
                        $('.autocomplite-result').remove();
                        self.suggestSelected = 0;
                    });

                    $(document).on(
                        "click",
                        "body",
                        function( event ){
                            event = event || window.event;

                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else {
                                event.cancelBubble = true;
                            }
                        }
                    );
                    $(document).on(
                        "click",
                        ".autocomplite-result__item",
                        function(){
                            var curItem = $(this),
                                curText = curItem.text();
                            self.input.val(curText);
                            $('.autocomplite-result').remove();
                            self.suggestSelected = 0;
                            self.obj.submit();
                            self.input.val('');
                        }
                    );
                    $(document).on(
                        "keydown",
                        ".autocomplite-result__item",
                        function(I){
                            switch(I.keyCode) {
                                case 13:

                                    $(this).trigger('click');
                                    break;
                            }
                        }
                    );
                },
                declareVariables: function(){
                    self.request = new XMLHttpRequest();
                    self.suggestSelected = 0;
                },
                ajaxRequest: function(input,n){
                    var path = self.obj.attr('data-autocomplite');
                    path =  $('body').data('action');
                    self.request.abort();
                    self.request = $.ajax({
                        url: path,
                        data: 'action=myprefix_autocompletesearch&value='+ input.val(),
                        dataType: 'json',
                        timeout: 20000,
                        type: "GET",
                        success: function (msg) {
                            var $new_arr = [],
                                count=0;
                            for (var key = 0; key < msg.length; key++) {
                                var val = msg[key];

                                if (input[0].value.length>0) {
                                    $new_arr.push(val) ;
                                }
                            }

                            $('.autocomplite-result').remove();

                            if($new_arr.length){

                                count=$new_arr.length;

                                var resultStr='<div class="autocomplite-result">';
                                for(var i=0;i<=count-1;i++){

                                    resultStr += '<div  class="autocomplite-result__item">'+$new_arr[i].caption+'</div>';
                                }
                                resultStr+='</div>';
                                if(!self.obj.find('.autocomplite-result').length==1){
                                    self.obj.append(resultStr);
                                }
                                self.countItems = $('.autocomplite-result__item').length;
                            }

                        },
                        error: function (XMLHttpRequest) {
                            if (XMLHttpRequest.statusText != "abort") {
                                alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                            }
                        }
                    });

                    return false;
                },
                keyActivate: function(n){
                    $('.autocomplite-result__item').eq(self.suggestSelected-1).removeClass('active');

                    if(n == 40 && self.suggestSelected < self.countItems){
                        self.suggestSelected++;

                    }else if(n == 38 && self.suggestSelected > 0){
                        self.suggestSelected--;
                    }

                    if( self.suggestSelected > 0){
                        $('.autocomplite-result__item').eq(self.suggestSelected-1).addClass('active');
                        self.input.val( $('.autocomplite-result__item').eq(self.suggestSelected-1).text() );
                    } else {
                        self.input.val(self.valueInput);
                    }
                },
                build: function () {
                    self.core.declareVariables();
                    self.core.addEvents();
                }
            };
        }
    };

})();

