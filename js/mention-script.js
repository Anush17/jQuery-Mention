'use strict';
(function () {
    //fucntion detected the changes using .bind method
    function bindEvents() {
        $(this.textArea).on('keyup', function (e) {
            if(e.key === '@'){
                console.log('onevent');
                }
        });
    }

    function init() {
        let users = [
                {
                    name: 'Jewel',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '1'
                },
                {
                    name: 'Ren',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '2'
                },
                {
                    name: 'Sonny',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '3'
                },
                {
                    name: 'Lillian',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '4'
                },
                {
                    name: 'Alinta',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '5'
                },
                {
                    name: 'Athalie',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '6'
                },
                {
                    name: 'Ederne',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '7'
                },
                {
                    name: 'Eduardo',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '8'
                },
                {
                    name: 'Jessica',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '9'
                },
                {
                    name: 'Medea',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '10'
                },
                {
                    name: 'Svetlana',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '11'
                },
                {
                    name: 'Erick',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '12'
                },
                {
                    name: 'Laura',
                    image: 'https://icons8.com/icon/23242/circled-user-male-skin-type-1-2',
                    id: '13'
                }
            ],
            elements = {
            textArea: $('.mention-box')
             };

            if(elements.textArea){
                bindEvents.call(elements);
            }
    }

    init();
})();
