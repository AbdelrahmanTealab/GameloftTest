//
//  MusicKitModule.swift
//  GameloftTest
//
//  Created by Abdelrahman  Tealab on 2021-09-20.
//

import Foundation
import MusicKit
import MediaPlayer

@available(iOS 15.0, *)
@objc(MusicKitModule)
class MusicKitModule: NSObject{
  
//  var playlist: Playlist
//  var tracks: MusicItemCollection<Track>?

//  private let player = ApplicationMusicPlayer.shared
//  private var playerState = ApplicationMusicPlayer.shared.state
//  private var isPlaying: Bool {
//      return (playerState.playbackStatus == .playing)
//  }
//  private var isPlaybackQueueSet = false
//  private var musicSubscription: MusicSubscription?
  
  //  private func loadTracks() async throws {
  //      let detailedAlbum = try await album.with([.artists, .tracks])
  //      let artist = try await detailedAlbum.artists?.first?.with([.albums])
  //      update(tracks: detailedAlbum.tracks, relatedAlbums: artist?.albums)
  //  }
  
//  @objc
//  init(from playlist: AnyObject) {
//    self.playlist = playlist as? Playlist ?? Playlist.init(from: <#T##Decoder#>)
//    self.tracks = (playlist as? Playlist).tracks! ?? nil
//  }
  
//  @objc
//  private func beginPlaying() {
//      Task {
//          do {
//              try await player.play()
//          } catch {
//              print("Failed to prepare to play with error: \(error).")
//          }
//      }
//  }
//  
//  @objc
//  private func handleTrackSelected(_ track: AnyObject, loadedTracks: Any) {
//    let myTrack = track as! Track
//    let myLoadedTracks = loadedTracks as! MusicItemCollection<Track>
//    
//      player.queue = ApplicationMusicPlayer.Queue(for: myLoadedTracks, startingAt: myTrack)
//      isPlaybackQueueSet = true
//      beginPlaying()
//  }
  
}


