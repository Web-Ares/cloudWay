$(function(){
    'use strict';

    $(function(){

        var arr = [-3,-2,1,0,8,7,1],
            m = 10;

        function find( A, M ) {
            var mod = [],
                max = 0;

            for (var i = 0; i < A.length; i++) {
                mod[mod.length] = 0;
                for (var j = 0; j < A.length; j++) {
                    var sum = Math.abs(A[j] - A[i]);

                    if ( (sum % M) == 0 ) {
                        mod[i]++
                    }

                    if ( mod[i] > max ) {
                        max = mod[i];
                    }
                }
            }

            return max;
        };

        console.log(find(arr, m))

        $('.apply').each( function() {
            new Apply( $(this) );
        } );

        $('.breadcrumbs').each( function() {
            new Breadcrumbs( $(this) );
        } );

        $('.contact').each( function() {
            new Contact( $(this) );
        } );

        $('.menu').each( function() {
            new Menu( $(this) );
        } );

        $('.site__header-search').each( function() {
            new SearchShow( $(this) );
        } );

        $('.main-slider').each( function() {
            new MainSlider( $(this) );
        } );

        $('.logos-slider').each( function() {
            new LogosSlider( $(this) );
        } );

        $('.our-products').each( function() {
            new OurProducts( $(this) );
        } );

        $('.blogs-preview_tabs').each( function() {
            new BlogsPreview( $(this) );
        } );

        $('.site__footer-right').each( function() {
            new FooterMenu( $(this) );
        } );

        $('.customers').each( function() {
            new Customers( $(this) );
        } );

        $( '.blog-posts__items' ).each( function() {
            $( this ).niceScroll({
                cursorcolor:"#f16622",
                background: "#eeeeee",
                cursoropacitymin: "1",
                cursorborderradius: "0",
                cursorborder: "none",
                cursorwidth: "5px",
                enablemousewheel: true
            } );

        } );

        $( '.nice-scroll' ).each( function() {
            $( this ).niceScroll({
                cursorcolor:"#f16622",
                background: "#eeeeee",
                cursoropacitymin: "1",
                cursorborderradius: "0",
                cursorborder: "none",
                cursorwidth: "5px",
                enablemousewheel: true
            } );

        } );

        $( '.tabs' ).each( function() {
            new Tabs( $( this ) );
        } );

        $.each( $('.upload-file'), function (i) {

            new UploadFile( $(this), i );

        } );

        $.each( $( '.more-content' ), function() {
            new AddMoreContent ( $( this ) );
        } );

        $(document).on( 'mailsent.wpcf7', function()  {

            $( '.apply, .contact__form' ).each( function() {
                var curElem = $( this );

                if( curElem.attr( 'id' ) == $( 'body' ).attr( 'data-form' ) ) {

                    if ( curElem.hasClass( 'contact__form' ) ) {
                        curElem.parents( '.contact' ).find( '.contact__thank-you' ).addClass( 'active' );
                    } else {
                        curElem.addClass( 'thank-you' );
                    }

                }


            } );

        });

    });

    var UploadFile = function ( obj, num ) {

        //private properties
        var _self = this,
            _obj = obj,
            _inputFile = obj.find( 'input[type=file]' ),
            _inputText = obj.find( '.upload-file__path' );

        //private methods
        var _onEvents = function () {

                _inputFile.on( {
                    'change': function() {

                        _inputText.text( $( this ).val() );

                    }
                } );

            },
            _init = function () {

                _obj.attr( 'for', 'upload-file' + num );
                _inputFile.attr( 'id', 'upload-file' + num );

                obj[0].obj = self;
                _onEvents();

            };

        _init();
    };

    var Apply = function(obj) {

        //private properties
        var _obj = obj,
            _path = _obj.data( 'path' ),
            _btn = _obj.find( '.apply__btn' ),
            _thx = _obj.find( '.apply__thank-you'),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                _btn.on( {
                    'click': function() {
                        if ( _obj.hasClass( 'active' ) ) {
                            _obj.removeClass( 'active' );
                        } else {
                            _obj.addClass( 'active' );
                        }

                        return false;
                    }
                } );

                _obj.on( {
                    'submit': function() {

                        //_ajaxRequest( $( this ) );

                        //$( 'body' ).attr( 'data-form', _obj.attr( 'id' ) );

                        //return false;
                    }
                } );

                _btn.on( {
                    'click': function() {

                        $( 'body' ).attr( 'data-form', _obj.attr( 'id' ) );

                    }
                } );

            },
            _ajaxRequest = function( elem ) {

                _request.abort();
                _request = $.ajax({
                    url: _path,
                    data: elem.serialize(),
                    dataType: 'html',
                    timeout: 20000,
                    type: "get",
                    success: function () {
                        _obj.addClass( 'thank-you' );
                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != "abort" ) {
                            //alert( 'Error!' );
                        }
                    }
                });

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var AddMoreContent = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _btnMore = obj.find( $( '.more-content__btn' ) ),
            _btnAction = _btnMore.data( 'action'),
            currentPages = 1,
            current_service = $( '.more-content' ).data( 'id'),
            _wrapper = obj.find( $( '.more-content__wrapper' ) ),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                _btnMore.on( {

                    click: function() {

                        _addNewBlocks();

                        return false;
                    }

                } );

            },
            _addNewContent = function( msg ) {

                var contentMsg = msg.html;

                _wrapper.append( contentMsg );

                var newItems = _wrapper.find( '.hidden' );

                setTimeout( function() {

                    _heightAnimation( newItems );

                }, 50 );

                if ( !msg.has_items ) {

                    _removeBtnMore();

                }

            },
            _heightAnimation = function( newItems ){

                newItems.each( function( i ) {

                    _showNewItems( $( this ), i );

                } );

            },
            _showNewItems = function( item, index ){

                setTimeout( function() {

                    item.removeClass( 'hidden' );

                }, index * 300 );

            },
            _removeBtnMore = function() {

                _btnMore.addClass( 'hidden' );

            },
            _addNewBlocks = function() {

                var items = _obj.find( '.more-content__item' );

                _request.abort();

                _request = $.ajax( {
                    url: _btnAction,
                    data: {
                        action : "get_services",
                        loadedCount: items.length,
                        currentPage: currentPages,
                        current_service: current_service
                    },
                    dataType: 'json',
                    timeout: 20000,
                    type: "GET",
                    success: function ( msg ) {

                        _addNewContent( msg );

                        currentPages++;

                    },
                    error: function ( XMLHttpRequest ) {

                        if( XMLHttpRequest.statusText != "abort" ) {

                            alert( "Error!" );

                        }
                    }
                } );

            },
            _init = function() {

                _addEvents();
                _obj[ 0 ].obj = _self;

            };

        _init();
    };

    var Customers = function ( obj ) {

        var _self = this,
            _obj = obj,
            _filter = _obj.find( '.filter' ),
            _filterItem = _obj.find( 'select' ),
            _canAddProjects = true,
            _worksWrap = _obj.find('.customers__content'),
            _loader = _obj.find( '.customers__loader'),
            currentPage = 1;

        var _addEvents = function () {

                _filterItem.on( {
                    'change': function() {
                        var curElem = $( this );

                        //curElem.parents( 'dd' ).find( 'input[type=hidden]').val( curElem.val() );
                        _canAddProjects = false;
                        currentPage = 0;
                        _loader.addClass('active');
                        _sendAjax( true );
                    }
                } );

            },
            _addItems = function( arr ) {

                for ( var i =0; i < arr.length; i++ ) {
                    _worksWrap.append('<div class="customers__item customers__item_added">' +
                    '<img src="' + arr[i].pic + '" alt="">' +
                    '<a href="' + arr[i].link + '" class="customers__link">' +
                    '<span>' +
                    '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 54 54" ' +
                    'style="enable-background:new 0 0 54 54;" xml:space="preserve"> ' +
                    '<g><path d="M27,53L27,53C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0c14.359,0,26,11.641,26,26v0 ' +
                    'C53,41.359,41.359,53,27,53z"/> <path d="M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,' +
                    '27S41.888,54,27,54z M27,2 C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z"/>' +
                    '</g> <path d="M39,28H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h26c0.552,0,1,0.447,1,1S39.552,28,39,28z"/>' +
                    '<polygon points="30.707,37.707 29.293,36.293 38.586,27 29.293,17.707 30.707,16.293 41.414,27 	"/>' +
                    '</svg>Read More</span></a></div>');
                }

                setTimeout( function() {

                    $( '.customers__item').removeClass( 'customers__item_added' );

                }, 50 );

            },
            _addNewItems = function( arr ) {

                for ( var i =0; i < arr.length; i++ ) {

                    _worksWrap.append('<div class="customers__item customers__item_added">' +
                    '<p>' + arr[i].text + '</p>' +
                    '<img src="' + arr[i].pic + '" alt="">' +
                    '<time datetime="' + arr[i].datetime + '">' + arr[i].time + '</time>' +
                    '<a href="' + arr[i].link + '" class="customers__link">' +
                    'Provided Services:' +
                    '<ul class="added-type"></ul>' +
                    '<span>' +
                    '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 54 54" ' +
                    'style="enable-background:new 0 0 54 54;" xml:space="preserve"> ' +
                    '<g><path d="M27,53L27,53C12.641,53,1,41.359,1,27v0C1,12.641,12.641,1,27,1h0c14.359,0,26,11.641,26,26v0 ' +
                    'C53,41.359,41.359,53,27,53z"/> <path d="M27,54C12.112,54,0,41.888,0,27S12.112,0,27,0s27,12.112,27,' +
                    '27S41.888,54,27,54z M27,2 C13.215,2,2,13.215,2,27s11.215,25,25,25s25-11.215,25-25S40.785,2,27,2z"/>' +
                    '</g> <path d="M39,28H13c-0.552,0-1-0.447-1-1s0.448-1,1-1h26c0.552,0,1,0.447,1,1S39.552,28,39,28z"/>' +
                    '<polygon points="30.707,37.707 29.293,36.293 38.586,27 29.293,17.707 30.707,16.293 41.414,27 	"/>' +
                    '</svg>Read More</span></a></div>');

                    for ( var j = 0; j < arr[i].types.length; j++ ) {

                        $( '.added-type').append('<li>' + arr[i].types[j] + '</li>');

                    }

                    $( '.added-type').removeClass( 'added-type' );
                }

                setTimeout( function() {

                    $( '.customers__item').removeClass( 'customers__item_added' );

                }, 50 );

            },
            _sendAjax = function(canRemoveProjects) {

                $.ajax({
                    url: $('body').data('action'),
                    data: {
                        action : "get_customers",
                        filterData: $( '.filter' ).serialize(),
                        currentPage: currentPage
                    },
                    dataType: 'json',
                    type: "get",
                    success: function (msg) {
                        if ( canRemoveProjects ) {
                            $('.customers__item').remove();
                        }
                        _loader.removeClass('active');

                        if ( _obj.hasClass( 'customers_new' ) ) {
                            _addNewItems(msg.items);
                        } else {
                            _addItems(msg.items);
                        }

                        currentPage++;
                        _canAddProjects = true;
                    },
                    error: function (XMLHttpRequest) {
                        if (XMLHttpRequest.statusText != "abort") {
                            //alert("ERROR!!!");
                        }
                    }
                });

            },
            _init = function () {
                _addEvents();
                //_obj.find( 'select').each( function() {
                //    var curElem = $( this );
                //
                //    curElem.parents( 'dd' ).find( 'input[type=hidden]').val( curElem.val() );
                //} );
                _obj[0].obj = _self;
            };

        _init();

    };

    var Contact = function(obj) {

        //private properties
        var _obj = obj,
            _form = _obj.find( '.contact__form'),
            _btn = _obj.find( '.contact__submit'),
            _path = _form.data( 'path' ),
            _thx = _obj.find( '.contact__thank-you'),
            _select = _obj.find( 'select' ),
            _subject = _obj.find( '.contact__subject' ),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                _form.on( {
                    'submit': function() {
                        //
                        //_ajaxRequest( $( this ) );
                        //
                        //return false;
                    }
                } );

                _btn.on( {
                    'click': function() {

                        $( 'body' ).attr( 'data-form', _form.attr( 'id' ) );

                    }
                } );

                _select.on( {
                    'change': function() {
                        _subject.val( $( this).val() );
                    }
                } );

            },
            _ajaxRequest = function( elem ) {
                _request.abort();
                _request = $.ajax({
                    url: _path,
                    data: elem.serialize(),
                    dataType: 'html',
                    timeout: 20000,
                    type: "get",
                    success: function () {
                        _thx.addClass( 'active' );
                        elem.trigger( 'reset' );
                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != "abort" ) {
                            //alert( 'Error!' );
                        }
                    }
                });

            },
            _init = function() {
                _addEvents();
                _subject.val( _select.val() );
            };

        //public properties

        //public methods

        _init();
    };

    var Breadcrumbs = function(obj) {

        //private properties
        var _obj = obj,
            _item = _obj.find( '.breadcrumbs__item' );

        //private methods
        var _addEvents = function() {

            },
            _checkItem = function() {

                if ( _item.length == 1 ) {
                    _item.eq(0).addClass( 'breadcrumbs__item_once' );
                }
            },
            _init = function() {
                _addEvents();
                _checkItem();
            };

        //public properties

        //public methods

        _init();
    };

    var BlogsPreview = function(obj) {

        //private properties
        var _obj = obj,
            _navigationItem = _obj.find( '.blogs-preview__navigation-item'),
            _activeNavigationItem = _obj.find( '.blogs-preview__navigation .active'),
            _activeIndex = _activeNavigationItem.index(),
            _contentItem = _obj.find( '.blogs-preview__content' );

        //private methods
        var _addEvents = function() {

                _navigationItem.on( {
                    'click': function() {
                        var curElem = $(this);

                        if ( !curElem.hasClass( 'active' ) ) {
                            _activeNavigationItem.removeClass( 'active' );
                            curElem.addClass( 'active' );
                            _activeNavigationItem = curElem;
                            _activeIndex = _activeNavigationItem.index();

                            _viewContent();
                        }

                        return false;
                    }
                } );

            },
            _changeActiveItem = function() {

                if ( !_activeNavigationItem.length ) {
                    _navigationItem.eq(0).addClass( 'active' );

                    _activeNavigationItem = _navigationItem.eq(0);

                    _activeIndex = _activeNavigationItem.index();
                }

                _viewContent();

            },
            _viewContent = function() {
                _contentItem.removeClass( 'active' );
                _contentItem.eq( _activeIndex).addClass( 'active' );
            },
            _init = function() {
                _addEvents();
                _changeActiveItem();
            };

        //public properties

        //public methods

        _init();
    };

    var FooterMenu = function(obj) {

        //private properties
        var _obj = obj,
            _objTitle = _obj.find( '.site__footer-menu__title' );

        //private methods
        var _addEvents = function() {

                _objTitle.on( {
                    'click': function() {
                        var curElem = $(this);

                        if ( !curElem.hasClass( 'active' ) ) {
                            curElem.addClass( 'active' );
                        } else {
                            curElem.removeClass( 'active' );
                        }
                    }
                } );

            },
            _init = function() {
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

    var LogosSlider = function(obj) {

        //private properties
        var _obj = obj,
            _window = $(window),
            _logosSlider = null,
            _perView = 1,
            _duration = _obj.data('duration');

        //private methods
        var _addEvents = function() {

                _window.on({
                    'resize': function() {
                        _changePerview();
                        _setPerview();
                        _logosSlider.stopAutoplay();
                        setTimeout( function() {
                            _logosSlider.startAutoplay();
                        }, 50 );
                    }
                });

                _obj.on({
                    'mouseenter': function() {
                        //_logosSlider.stopAutoplay();
                    },
                    'mouseleave': function() {
                        //_logosSlider.startAutoplay();
                    },
                    'mouseup': function() {
                        _logosSlider.startAutoplay();
                    },
                    'mousedown': function() {
                        _logosSlider.stopAutoplay();
                    }
                });

            },
            _addLogosSlider = function(e) {

                _changePerview();

                _logosSlider = new Swiper( _obj.find( '.swiper-container'), {
                    loop: true,
                    slidesPerView: _perView,
                    autoplay: _duration
                });

                _setPerview();
            },
            _changePerview = function() {
                _perView = 6;

                if ( _window.width() <= 640 ) {
                    _perView = 1;
                } else {
                    if ( _window.width() <= 1024 ) {
                        _perView = 2;
                    } else {
                        if ( _window.width() <= 1280 ) {
                            _perView = 4;
                        }
                    }
                }

            },
            _setPerview = function() {

                _logosSlider.params.slidesPerView = _perView;

            },
            _init = function() {
                _addEvents();
                _addLogosSlider();
            };

        //public properties

        //public methods

        _init();
    };

    var MainSlider = function(obj) {

        //private properties
        var _obj = obj,
            _window = $(window),
            _mainSlider = null,
            _slider = _obj.find( '.swiper-container'),
            _duration = _obj.data('duration'),
            _pagination = _obj.find( '.swiper-pagination' );

        //private methods
        var _addEvents = function() {

                _window.on({
                    'resize': function() {
                        _sliderHeight();
                    }
                });

            },
            _addMainSlider = function() {

                _mainSlider = new Swiper( _slider, {
                    pagination: _pagination,
                    loop: true,
                    autoplay: _duration,
                    paginationClickable: true
                });
            },
            _sliderHeight = function() {

                if ( _window.width() < 800 ) {
                    _slider.css( { height: _slider.outerHeight() } );
                }
            },
            _init = function() {
                _addEvents();
                _sliderHeight();
                _addMainSlider();
            };

        //public properties

        //public methods

        _init();
    };

    var Menu = function(obj) {

        //private properties
        var _obj = obj,
            _btn = _obj.find( '.menu__btn' ),
            _window = $(window),
            _subMenuBtn = _obj.find( '.menu__submenu .menu__item' );

        //private methods
        var _addEvents = function() {

                _window.on({
                    'resize': function() {
                        if ( _window.width() > 1000 ) {
                            _descriptionSize();
                        }
                    }
                });

                _btn.on({
                    'click': function() {

                        if ( !_obj.hasClass( 'active' ) ) {
                            _obj.addClass( 'active' );
                        } else {
                            _obj.removeClass( 'active' );
                        }
                    }
                });

                _subMenuBtn.on({
                    'click': function() {
                        var curElem = $(this);

                        if ( !curElem.hasClass( 'open' ) ) {
                            //$( '.menu__item').removeClass( 'open' );
                            curElem.addClass( 'open' );
                        } else {
                            curElem.removeClass( 'open' );
                        }
                    }
                });

            },
            _descriptionSize = function() {

                $('.menu__submenu-wrap_description').each( function() {
                    var curElem = $( this ),
                        curHeight = curElem.outerHeight(),
                        curParentHeight = curElem.parents( '.menu__submenu-wrap' ).outerHeight(),
                        tmpTop = 0;

                    if ( curHeight < curParentHeight ) { curHeight = curParentHeight; }

                    curElem.find('.menu__description').each( function() {
                        var parentElem = $(this).parent();
                        $( this ).css( {
                            top: tmpTop,
                            width: _window.width() - parentElem.width() - parentElem.offset().left,
                            height: curHeight + 'px'
                        } );
                        tmpTop = tmpTop - parentElem.outerHeight();
                    } );
                } );

            },
            _init = function() {
                _addEvents();
                _descriptionSize();
            };

        //public properties

        //public methods

        _init();
    };

    var OurProducts = function(obj) {

        //private properties
        var _obj = obj,
            _navigationItem = _obj.find( '.our-products__navigation-item'),
            _activeNavigationItem = _obj.find( '.our-products__navigation .active'),
            _activeIndex = _activeNavigationItem.index(),
            _contentItem = _obj.find( '.our-products__wrap'),
            _formWrap = _obj.find( '.our-products__form' ),
            _form = _obj.find( '.our-products__form-wrap' ),
            _path = _form.data( 'path' ),
            _formStages = _formWrap.find( '.our-products__form-stage').length,
            _stage1Btn = _formWrap.find( '.our-products__form-btn'),
            _request = new XMLHttpRequest();

        //private methods
        var _addEvents = function() {

                _navigationItem.on( {
                    'click': function() {
                        var curElem = $(this);

                        if ( !curElem.hasClass( 'active' ) ) {
                            _contentItem.eq( _activeIndex ).addClass( 'active-hide' );
                           setTimeout( function() {
                               _activeNavigationItem.removeClass( 'active' );
                               _contentItem.eq( _activeIndex ).removeClass( 'active-hide' );
                               curElem.addClass( 'active' );
                               _activeNavigationItem = curElem;
                               _activeIndex = _activeNavigationItem.index();

                               _viewContent();
                           }, 300 );
                        }

                        return false;
                    }
                } );

                _stage1Btn.on( {
                    'click': function() {
                        _formWrap.css( { 'transform': 'translate3d(-' + 100/_formStages + '%,0,0)' } );
                        return false;
                    }
                } );

                _form.on( {
                    'submit': function() {

                        _ajaxRequest( $( this ) );

                        return false;
                    }
                } );

            },
            _ajaxRequest = function( elem ) {

                _request.abort();
                _request = $.ajax({
                    url: _path,
                    data: elem.serialize(),
                    dataType: 'html',
                    timeout: 20000,
                    type: "get",
                    success: function () {
                        _formWrap.css( { 'transform': 'translate3d(-' + 100/_formStages*2 + '%,0,0)' } );
                    },
                    error: function ( XMLHttpRequest ) {
                        if( XMLHttpRequest.statusText != "abort" ) {
                            //alert( 'Error!' );
                        }
                    }
                });

            },
            _changeActiveItem = function() {

                if ( !_activeNavigationItem.length ) {
                    _navigationItem.eq(0).addClass( 'active' );

                    _activeNavigationItem = _navigationItem.eq(0);

                    _activeIndex = _activeNavigationItem.index();
                }

                _viewContent();


            },
            _viewContent = function() {
                _contentItem.removeClass( 'active' );
                _contentItem.eq( _activeIndex).addClass( 'active' );
            },
            _createForm = function() {
                _obj.addClass( 'our-products_with-form' );
                _formWrap.css( { width: _formStages*100 + '%' } );
                _formWrap.find( '.our-products__form-stage').css( { width: 100/_formStages + '%' } );
            },
            _init = function() {
                _addEvents();
                _changeActiveItem();
                if ( _formWrap.length ) {
                    _createForm();
                }
            };

        //public properties

        //public methods

        _init();
    };

    var SearchShow = function (obj) {

        var _obj = obj,
            _input = _obj.find('input');

        var _addEvents = function () {

                _obj.on({
                    'click': function(event){

                        if ( !_obj.hasClass( 'open' ) ) {
                            _obj.addClass( 'open' );
                            _input.focus();
                            event = event || window.event;
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else {
                                event.cancelBubble = true;
                            }
                        }
                    }
                });

                $( '.site' ).on({
                    'click': function(){
                        _obj.removeClass( 'open' );
                    }
                });

                _input.on({
                    'click': function(event){
                        event = event || window.event;
                        if (event.stopPropagation) {
                            event.stopPropagation();
                        } else {
                            event.cancelBubble = true;
                        }
                    }
                });
            },

            _init = function () {
                _addEvents();
            };

        _init();
    };

    var Tabs = function( obj ) {

        //private properties
        var _obj = obj,
            _tabCaption = _obj.find( '.tabs__caption' ),
            _tabContent = _obj.find( '.tabs__content' );

        //private methods
        var _addEvents = function() {

                _tabCaption.on( {
                    'click': function() {
                        var curItem = $( this ),
                            curContent = _tabContent.eq( curItem.index() );

                        if( !( curItem.hasClass( 'active' ) ) ) {
                            _tabCaption.removeClass( 'active' );
                            _tabContent.css( {
                                'display': 'none'
                            } );
                            curItem.addClass( 'active' );
                            curContent.css( {
                                'display': 'block'
                            } );
                        }

                        return false;
                    }
                } );

            },
            _startView = function() {
                _tabCaption.eq( 0 ).addClass( 'active' );
                _tabContent.eq( 0 ).css( {
                    'display': 'block'
                } );
            },
            _init = function() {
                _startView();
                _addEvents();
            };

        //public properties

        //public methods

        _init();
    };

});