class AuthService {
    login(user: string, password: string) { console.log("User logged in"); }
}

class VideoService {
    loadVideo(videoId: string) { console.log("Loading video:", videoId); }
}

class StreamingService {
    play(videoId: string) { console.log("Playing video:", videoId); }
}

// Client Code (Too Many Dependencies)
const auth = new AuthService();
auth.login("user", "pass");

const video = new VideoService();
video.loadVideo("abc123");

const streaming = new StreamingService();
streaming.play("abc123");
