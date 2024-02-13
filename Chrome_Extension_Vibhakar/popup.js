import { getActiveTabURL } from "./utils.js";

const addNewBookmark = (bookmarks, bookmark) => {
    // bookmark

    const newBookmarkElement = document.createElement("div");
    newBookmarkElement.id = "bookmark-" + bookmark.time;
    newBookmarkElement.className = "bookmark";
    newBookmarkElement.setAttribute("timestamp", bookmark.time);


    // cntrol bookmark


    const controlsElement = document.createElement("div");
    controlsElement.className = "bookmark-controls";
    setBookmarkAttributes("play", onPlay, controlsElement);
    setBookmarkAttributes("delete", onDelete, controlsElement);

    newBookmarkElement.appendChild(controlsElement);

    // prompt details

    const promptDetails = document.createElement("div");
    promptDetails.className="prompt_details_css"
    promptDetails.textContent = bookmark.dels;
    newBookmarkElement.appendChild(promptDetails);

    /// titles
    const bookmarkTitleElement = document.createElement("div");
    bookmarkTitleElement.textContent = bookmark.desc;
    bookmarkTitleElement.className = "bookmark-title";
    newBookmarkElement.appendChild(bookmarkTitleElement);

    
    


    bookmarks.appendChild(newBookmarkElement);
}


// attributes 

const setBookmarkAttributes = (src, eventListener, controlParentElement) => {
    const controlElement = document.createElement("img");
  
    controlElement.src = "./ASsets/" + src + ".png";
    controlElement.title = src;
    controlElement.classList.add(src)
    controlElement.addEventListener("click", eventListener);
    controlParentElement.appendChild(controlElement);
};

// play button
const onPlay = async (e) => {
    const bookmarkTime = e.target.parentNode.parentNode.getAttribute("timestamp");
    const activeTab = await getActiveTabURL();
  
    chrome.tabs.sendMessage(activeTab.id, {
      type: "PLAY",
      value: bookmarkTime,
    });
};
  
// delete button
const onDelete = async (event) => {
    const activeTab = await getActiveTabURL();
    const bookmarkTime = event.target.parentNode.parentNode.getAttribute("timestamp");
    const bookmarkElementToDelete =

    document.getElementById("bookmark-" + bookmarkTime);
  
    bookmarkElementToDelete.parentNode.removeChild(bookmarkElementToDelete);
  
    chrome.tabs.sendMessage(
      activeTab.id,
      {
        type: "DELETE",
        value: bookmarkTime,
      },
      viewBookmarks
    );


};

// dlt all bookmark

const onDeleteAll  = async(e) =>{

  const ersall = document.querySelector("#bookmarks");
    const activeTab = await getActiveTabURL();
    

  
    chrome.tabs.sendMessage(
      activeTab.id,
      {
        type: "DELETEALL",
        
      },
      viewBookmarks
    );
}

// show bookmark

const viewBookmarks = (currentBookmarks = []) => {
    const bookmarksElement = document.getElementById("bookmarks");
    bookmarksElement.innerHTML = "";
  
    if (currentBookmarks.length > 0) {
      for (let i = 0; i < currentBookmarks.length; i++) {
        const bookmark = currentBookmarks[i];
        addNewBookmark(bookmarksElement, bookmark);
      }
    } else {
      bookmarksElement.innerHTML =
      `<i class="row">Please Add Bookmark</i>
      <img src="./ASsets/giphy.gif" alt="" class="binod">`;
    }
    return;
};

// shows

document.addEventListener("DOMContentLoaded", async () => {
  
    const activeTab = await getActiveTabURL();
    const queryParameters = activeTab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
  
    const currentVideo = urlParameters.get("v");
  
    if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
      chrome.storage.sync.get([currentVideo], (data) => {
        const currentVideoBookmarks = data[currentVideo] ? JSON.parse(data[currentVideo]) : [];
  
        viewBookmarks(currentVideoBookmarks);
      });
    } else {
      const container = document.getElementsByClassName("container")[0];
  
      container.innerHTML = 
      `<div class="title">This is not a youtube video page.
      <img src="./ASsets/tum se.gif"  class="tumse"></div>`;

    }
  });
  
  const OUTER = document.querySelector(".outerrr>img");

OUTER.addEventListener('click', onDeleteAll)