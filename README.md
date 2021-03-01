# TEST SyncManager and createMyGroupChannelListQuery
Test for Issue with createMyGroupChannelListQuery and SyncManager 

## Install 
1) Run ```npm i``` to install Sendbird
2) Go inside ```index.js``` and change lines 2 and 3 with your Sendbird information.
3) Drag and drop ```index.html``` to any Chrome or Firefox.
4) Check results in console.

### Tests
1) Go to line ```42``` inside ```index.js```
2) Use ```channelListQuery.order = 'chronological';``` or ```channelListQuery.order = 'latest_last_message';``` to see the results changing in the console.


