'use strict';
(function () {

    function bindEvents() {
        let bindKeyUp = bindTextAreaKeyUp.bind(this);
        let choose = chooseUser.bind(this);
        $(this.textArea).on('keyup click', bindKeyUp);
        $(this.showUsers).on('click', '.selected', choose);
        selectOne.bind(this);
    }

    function bindTextAreaKeyUp(e) {
        if (e.keyCode === 13 || e.keyCode === 38 || e.keyCode === 40) {
            return selectOne.call(this, e);
        }
        let text = this.text = this.textArea.val(),
            cursorPosition = this.cursorPosition = getPosition.call(this),
            startPosition = getStartCursorPosition(text, cursorPosition - 1);
        if (startPosition) {
            this.resultText = text.substring(startPosition, cursorPosition);
            return fillUsersData.call(this);
        }
        return removeUsers.call(this);
    }

    function getPosition() {
        return this.textArea.prop('selectionStart');
    }

    function getStartCursorPosition(string, position) {
        if (!string.substring(position, (position + 1)).match(/[A-Za-z0-9]/)) {
            if (string.substring(position, (position + 1)) === '@') {
                return (position + 1);
            } else {
                return null;
            }
        }
        return getStartCursorPosition(string, position - 1)
    }

    function fillUsersData() {
        let usersElem = this.showUsers,
            users = this.users,
            text = this.resultText;
        removeUsers.call(this);
        users = users.length > 8 ? users.slice(0, 8) : users;
        for (let i = 0; i < users.length; i++) {
            let name = users[i]['name'];
            if (name.toLowerCase().indexOf(text) > -1) {
                usersElem.append('<div class="selected">' + name + '</div>');
            }
        }
        if (usersElem.children().length > 0) {
            usersElem.addClass('isShow');
        }
    }

    function removeUsers() {
        return this.showUsers.removeClass('isShow').empty();
    }

    function chooseUser(e) {
        let getText = $(e.target).text(),
            pos = this.cursorPosition,
            value = this.textArea.val();
        this.textArea.val(value.substring(0, pos) + getText + ' ' + value.substring(pos));
        removeUsers.call(this);
    }

    function selectOne(e) {
        let findActive = this.showUsers.find('.active'),
            currentLen = $(findActive.length),
            current = $(findActive);
        e.preventDefault();
        switch (e.keyCode) {
            case 38:
                if (currentLen && current.prev().length) {
                    current.removeClass('active');
                    current.prev().addClass('active');
                } else {
                    findActive.removeClass('active');
                    $('.showUsers .selected:last-child').addClass('active');
                }
                break;
            case 40:
                if (currentLen && current.next().length) {
                    current.removeClass('active');
                    current.next().addClass('active');
                } else {
                    findActive.removeClass('active');
                    $('.showUsers .selected:first-child').addClass('active');
                }
                break;
            case 13:
                let enterUser = current.text(),
                    pos = this.cursorPosition,
                    value = this.textArea.val();
                this.textArea.val(value.substring(0, pos) + enterUser + ' ' + value.substring(pos));
                removeUsers.call(this);
                break;
            default:
                break;
        }
    }

    function init() {
        let defaults = {
            users: [
                {
                    name: 'mariam13',
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
            showUsers: $('.showUsers'),
            selectedUser: $('.selected')
        };


        if (defaults.textArea) {
            bindEvents.call(defaults);
        }
    }

    init();
})();

