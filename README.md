# TEST SyncManager and createMyGroupChannelListQuery
Test for Issue with createMyGroupChannelListQuery and SyncManager 

## Install 
1) Run ```npm i``` to install Sendbird
2) Drag and drop ```index.html``` to any Chrome or Firefox.
3) Check results in console.

### Tests
1) Go to line ```42``` inside ```index.js```
2) Use ```channelListQuery.order = 'chronological';``` or ```channelListQuery.order = 'latest_last_message';``` to see the results changing in the console.


