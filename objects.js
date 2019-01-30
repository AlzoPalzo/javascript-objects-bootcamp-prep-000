var playlist = {tempahT: "next hype"}

function updatePlaylist(playlist, artist, song)
{
  return Object.assign(playlist, {[artistName]: songTitle})
}
function removeFromPlaylist(playlist, artist)
{
  delete playlist.artist
  return playlist
}
