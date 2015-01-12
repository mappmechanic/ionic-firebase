angular.module('mychat.services', [])

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        time: '05/01/2015 04:05 PM'
  }, {
        id: 1,
        name: 'Max Lynx',
        lastText: 'Hey, it\'s me',
        time: '06/01/2015 01:22 AM'
  }, {
        id: 2,
        name: 'Andrew Jostlin',
        lastText: 'Did you get the ice cream?',
        time: '15 hours ago'
  }, {
        id: 3,
        name: 'Adam Bradleyson',
        lastText: 'I should buy a boat',
        time: '55 mins ago'
  }, {
        id: 4,
        name: 'Perry Governor',
        lastText: 'Look at my mukluks!',
        time: '2 mins ago'
  }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    }
})

/**
 * A simple example service that returns some data.
 */
.factory('Rooms', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var rooms = [{
            id: 0,
            name: 'Academics',
            notes: 'Discuss about education, colleges & degrees',
            icon: 'ion-university'
                },
        {
            id: 1,
            name: 'Photography',
            notes: 'Discuss about photography, cameras, picture modes',
            icon: 'ion-camera'
                },
        {
            id: 2,
            name: 'Music',
            notes: 'Talk to fellow music lovers about latest songs & albums',
            icon: 'ion-music-note'
                },
        {
            id: 3,
            name: 'Fashion',
            notes: 'Talk about latest fashion, clothes & accessories',
            icon: 'ion-woman'
        },
        {
            id: 4,
            name: 'Travel',
            notes: 'Discuss about holidays, vacations & travel deals',
            icon: 'ion-plane'
                }
                ];

    return {
        all: function () {
            return rooms;
        },
        get: function (roomId) {
            // Simple index lookup
            return rooms[roomId];
        }
    }
});