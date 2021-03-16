
chrome.contextMenus.create({
    title: "BSMDB",
    id: "parent",
    contexts:["selection"]
});

chrome.contextMenus.create({
  title: "Lookup Quartet",
  parentId: "parent",
  id: "quartet",
  contexts:["selection"]
});

chrome.contextMenus.create({
  title: "Lookup Song",
  parentId: "parent",
  id: "song",
  contexts:["selection"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    // console.log(info);

    titleWithPluses = info.selectionText.replace(/ /g, "+");

    if( info.menuItemId == "quartet" ) {
        url = "http://www.bsmdb.net/Quartet/SearchList?selection=" + titleWithPluses
    } else {
        titleWithPluses = info.selectionText.replace(/ /g, "+");
        url = "http://www.bsmdb.net/Song/SearchList?selection=" + titleWithPluses;
    }

    openInNewTab(url);
});


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}