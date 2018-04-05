var playlist = {ChrisTomlin: 'Jesus He Loves Me'};
function updatePlaylist(obj,artist,song) {
  obj[artist] = song
  return obj
}

function removeFromPlaylist(playlist,artist) {
  playlist = delete playlist.artist
  return playlist
}