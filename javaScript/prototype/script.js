var Track = function(params) {
  this.name = params.name;
  this.url = params.url;

  this.playTrack = function() {
    console.log("We started playing", this.name);
  };

  Track.prototype.playTrack = function() {
    console.log("We started playing", this.name);
  };
};

var YoutubeTrack = function(params) {};

var youtubeTrack01 = new YoutubeTrack({
  name: "youtubeTrack01",
  url: "youtubeTrack01.mp3"
});

var youtubeTrack02 = new YoutubeTrack({
  name: "youtubeTrack02",
  url: "youtubeTrack02.mp3"
});

var track01 = new Track({
  name: "track01",
  url: "track01.mp3"
});

var track02 = new Track({
  name: "track02",
  url: "track02.mp3"
});

console.log(track01);
console.log(track02);

track01.playTrack();
track02.playTrack();

var youtubeTrack01 = new YoutubeTrack({
  name: "youtubeTrack01",
  url: "youtubeTrack01.mp3"
});

var youtubeTrack02 = new YoutubeTrack({
  name: "youtubeTrack02",
  url: "youtubeTrack02.mp3"
});
