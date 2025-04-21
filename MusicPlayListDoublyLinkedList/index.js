import DoublyLinkedList from './DoublyLinkedList.js';

const playlist = new DoublyLinkedList();

const songInput = document.getElementById('songInput');
const playlistDisplay = document.getElementById('playlist');

document.getElementById('addToHead').addEventListener('click', () => {
  if (songInput.value.trim() !== '') {
    playlist.addToHead(songInput.value.trim());
    updatePlaylist();
    songInput.value = '';
  }
});

document.getElementById('addToTail').addEventListener('click', () => {
  if (songInput.value.trim() !== '') {
    playlist.addToTail(songInput.value.trim());
    updatePlaylist();
    songInput.value = '';
  }
});

document.getElementById('removeByData').addEventListener('click', () => {
  if (songInput.value.trim() !== '') {
    playlist.removeByData(songInput.value.trim());
    updatePlaylist();
    songInput.value = '';
  }
});

document.getElementById('removeHead').addEventListener('click', () => {
    playlist.removeHead();
    updatePlaylist();
});

document.getElementById('removeTail').addEventListener('click', () => {
    playlist.removeTail();
    updatePlaylist();
});

// Function to update the playlist display
function updatePlaylist() {
    playlistDisplay.innerHTML = ''; // Clear list
    let currentNode = playlist.head;

    while (currentNode !== null) {
        const li = document.createElement('li');
        li.textContent = currentNode.data;
        playlistDisplay.appendChild(li);
        currentNode = currentNode.getNextNode();
    }
}


