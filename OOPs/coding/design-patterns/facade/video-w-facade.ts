class AuthService {
    login(user: string, password: string) { console.log("User logged in"); }
}

class VideoService {
    loadVideo(videoId: string) { console.log("Loading video:", videoId); }
}

class StreamingService {
    play(videoId: string) { console.log("Playing video:", videoId); }
}



class VideoFacade {
    private auth = new AuthService();
    private video = new VideoService();
    private streaming = new StreamingService();

    playVideo(user: string, password: string, videoId: string) {
        this.auth.login(user, password);
        this.video.loadVideo(videoId);
        this.streaming.play(videoId);
    }
}

// Client Code (Simplified)
const facade = new VideoFacade();
facade.playVideo("user", "pass", "abc123"); // Single Call
