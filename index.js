
var APP_ID = 'YOUR APP ID';
var USER_ID = 'ANY USER ID';

var ACCESS_TOKEN = null;


var sb = new SendBird({ appId: APP_ID });

sb.connect(USER_ID, ACCESS_TOKEN, (user, error) => {
    if (error) {
        console.dir(error);
    } else {
        console.dir(user);
        initSyncManager(success => {
            if (success) {
                test();
            }
        });
    }
});

function initSyncManager(callback) {
    const options = new SendBirdSyncManager.Options();
    options.messageCollectionCapacity = 2000;
    options.messageResendPolicy = 'manual';
    options.maxFailedMessageCountPerChannel = 5;
    SendBirdSyncManager.sendBird = sb;
    SendBirdSyncManager.setup(USER_ID, options).then(() => {
        // At this point, the database is ready.
        // You may not assume that a connection is established here.
        callback(true);
    }).catch(err => {
        // Failed to initialize.
        callback(false);
    });
}

function test() {
    const channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
    channelListQuery.limit = 20;
    channelListQuery.order = 'chronological'; // "latest_last_message" or "chronological"
    channelListQuery.includeEmpty = false;

    const channelCollection = new SendBirdSyncManager.ChannelCollection(
        channelListQuery,
    );

    const channelHandler = new SendBirdSyncManager.ChannelCollection.CollectionHandler();
    channelHandler.onChannelEvent = (action, conversations) => {
        console.log('action: ' + action);
        console.dir(conversations);
    };
    channelCollection.setCollectionHandler(channelHandler);
    channelCollection.fetch((err) => {
        console.dir(err);
    });
}

