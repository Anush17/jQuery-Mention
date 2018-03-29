'use strict';
(function () {
    //function detected the changes using .bind method
    function bindEvents() {
        let bindKeyUp = bindTextAreaKeyUp.bind(this);
        let choose = chooseUser.bind(this);
        $(this.textArea).on('keyup click', bindKeyUp);
       $(this.showUsers).on('click', '.selected', choose);
    }

    function bindTextAreaKeyUp(e) {
        this.position = getPosition.call(this);
        if (e.key === '@') {
            showUsers.call(this);
        }
    }

    function getPosition() {
        return this.textArea.prop("selectionStart");
    }

    function showUsers() {
        let usersElem = this.showUsers,
            users = this.users;
        users = users.length > 10 ? users.slice(0, 10) : users;
        for (let i = 0, len = users.length; i < len; i++) {
            usersElem.append('<div class="selected">' + users[i]['name'] + '</div>');
        }
    }

    function chooseUser(e) {
        let getText = $(e.target).text();
        this.textArea.val(this.textArea.val() + getText + ' ');
    }


    function init() {
        let defaults = {
            users: [
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
            textArea: $('.mention-box'),
            showUsers: $('.showUsers')
        };

        if (defaults.textArea) {
            bindEvents.call(defaults);
        }
    }

    init();
})();
// function selectOne(e) {
//   switch (e.keyCode) {
//     case 13:
//       console.log('enter');
//       e.preventDefault();
//       break;
//     case 38:
//       console.log('up');
//       e.preventDefault();
//       break;
//     case 40:
//       console.log('down');
//       e.preventDefault();
//       break;
//     default:
//   }
// }

// $(this.textArea).on('keydown',  selectOne);
