//
//  MusicKitModule.swift
//  GameloftTest
//
//  Created by Abdelrahman  Tealab on 2021-09-20.
//

import Foundation
import MusicKit
import MediaPlayer
//The below code is my attempt to
//solve the struct problem by
//creating work-arounds to use
//Swift structs in Objective-C

//please note that the use of force unwrapping
//was ONLY for debugging just to make
//sure things were working until
//i provide a stable solution

@available(iOS 15.0, *)
@objc(MusicKitModule)
class MusicKitModule: NSObject{
  

//  var playlist: Playlist
//
//
//  var tracks: MusicItemCollection<Track>?
//
//  private let player = ApplicationMusicPlayer.shared
//  private var playerState = ApplicationMusicPlayer.shared.state
//  private var isPlaying: Bool {
//      return (playerState.playbackStatus == .playing)
//  }
//  private var isPlaybackQueueSet = false
//  private var musicSubscription: MusicSubscription?
//
////    private func loadTracks() async throws {
////        let detailedPlaylist = try await playlist.with([.tracks])
////        update(tracks: detailedPlaylist.tracks)
////    }
//
//  @objc
//  init(from playlist: AnyObject) {
//    self.playlist = playlist as! Playlist
//    self.tracks = (playlist as! Playlist).tracks!
//  }
//
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


