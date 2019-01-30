var playlist = {tempahT: "next hype"}

function updatePlaylist(playlist, artistName, songTitle)
{
  return Object.assign(playlist, {[artistName]: songTitle})
}
funtion removeFromPlaylist(playlist, artist)
{
  delete playlist.artist
}