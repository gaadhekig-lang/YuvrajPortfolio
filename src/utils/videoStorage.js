// Video Storage Utility Functions
// Manages video data in localStorage

const STORAGE_KEY = 'portfolio_videos';
const ADMIN_PASSWORD_KEY = 'admin_password';

// Default videos to initialize with
const defaultVideos = [
    {
        id: 1,
        title: "Podcast Hook",
        category: "Podcast Intro",
        image: "https://img.youtube.com/vi/oIahW8yBIUo/maxresdefault.jpg",
        link: "https://youtu.be/oIahW8yBIUo",
        description: "Podcast hook created to give best introduction of the podcast to the audience of 'Ranveer Allahbadia'"
    },
    {
        id: 2,
        title: "Growth of Esports in India",
        category: "Vox Styled Explainer",
        image: "https://img.youtube.com/vi/dyHzYdNhBdg/maxresdefault.jpg",
        link: "https://youtu.be/dyHzYdNhBdg",
        description: "An explainer video showing growth of esports in india using 2D assets and animations"
    },
    {
        id: 3,
        title: "US - China Trade War",
        category: "Documentary Style",
        image: "https://img.youtube.com/vi/_5GS1eBI1os/maxresdefault.jpg",
        link: "https://youtu.be/_5GS1eBI1os",
        description: "In-depth analysis of the trade war dynamics."
    },
    {
        id: 4,
        title: "0x100x Custom 3D Assets",
        category: "3D Animation",
        image: "https://img.youtube.com/vi/8X7Q9bgf9rQ/hqdefault.jpg",
        link: "https://www.youtube.com/shorts/8X7Q9bgf9rQ",
        description: "Showcasing custom 3D assets and animations done in After Effects"
    },
    {
        id: 5,
        title: "Bymaximize Styled Captions",
        category: "Social Media Reel",
        image: "https://img.youtube.com/vi/CQpAR17JN9k/hqdefault.jpg",
        link: "https://www.youtube.com/shorts/CQpAR17JN9k",
        description: "Highlighting special styled captions inspired from Bymaximize"
    },
    {
        id: 6,
        title: "Diary of a CEO Hook",
        category: "Podcast Intro",
        image: "https://img.youtube.com/vi/-cOUvyCFar0/hqdefault.jpg",
        link: "https://www.youtube.com/shorts/-cOUvyCFar0",
        description: "Podcast hook created to give best introduction of the podcast to the audience of 'The Diary of a CEO'"
    },
    {
        id: 7,
        title: "Neuro Marketing",
        category: "Educational Reel",
        image: "https://img.youtube.com/vi/0h_cXWiTU74/hqdefault.jpg",
        link: "https://www.youtube.com/shorts/0h_cXWiTU74",
        description: "A reel that shows how the neuro marketing works"
    },
    {
        id: 8,
        title: "Talking Head Versatility",
        category: "Talking Head",
        image: "https://img.youtube.com/vi/RwJvD0qifRw/hqdefault.jpg",
        link: "https://www.youtube.com/shorts/RwJvD0qifRw",
        description: "A reel that shows how the talking head video can be used in multiple types"
    },
    {
        id: 9,
        title: "Artistic Typography Style",
        category: "Typography",
        image: "https://img.youtube.com/vi/LN-vS3HlsJ8/hqdefault.jpg",
        link: "https://youtube.com/shorts/LN-vS3HlsJ8",
        description: "This reel showcases artistic style of captions"
    }
];

// Initialize storage with default videos if empty
export const initializeStorage = () => {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultVideos));
    }
    
    // Set default admin password if not set (you can change this)
    const existingPassword = localStorage.getItem(ADMIN_PASSWORD_KEY);
    if (!existingPassword) {
        localStorage.setItem(ADMIN_PASSWORD_KEY, 'admin123');
    }
};

// Get all videos
export const getVideos = () => {
    try {
        const videos = localStorage.getItem(STORAGE_KEY);
        return videos ? JSON.parse(videos) : defaultVideos;
    } catch (error) {
        console.error('Error reading videos:', error);
        return defaultVideos;
    }
};

// Add a new video
export const addVideo = (video) => {
    try {
        const videos = getVideos();
        const newId = videos.length > 0 ? Math.max(...videos.map(v => v.id)) + 1 : 1;
        const newVideo = { ...video, id: newId };
        videos.push(newVideo);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
        return { success: true, video: newVideo };
    } catch (error) {
        console.error('Error adding video:', error);
        return { success: false, error: error.message };
    }
};

// Update an existing video
export const updateVideo = (id, updatedVideo) => {
    try {
        const videos = getVideos();
        const index = videos.findIndex(v => v.id === id);
        if (index === -1) {
            return { success: false, error: 'Video not found' };
        }
        videos[index] = { ...videos[index], ...updatedVideo };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
        return { success: true, video: videos[index] };
    } catch (error) {
        console.error('Error updating video:', error);
        return { success: false, error: error.message };
    }
};

// Delete a video
export const deleteVideo = (id) => {
    try {
        const videos = getVideos();
        const filtered = videos.filter(v => v.id !== id);
        if (filtered.length === videos.length) {
            return { success: false, error: 'Video not found' };
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
        return { success: true };
    } catch (error) {
        console.error('Error deleting video:', error);
        return { success: false, error: error.message };
    }
};

// Extract YouTube video ID from various URL formats
export const extractYouTubeId = (url) => {
    if (!url) return null;
    
    // Regular YouTube watch URLs
    const watchRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    // YouTube Shorts URLs
    const shortsRegex = /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/;
    // YouTube Embed URLs
    const embedRegex = /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/;
    
    let match = url.match(watchRegex) || url.match(shortsRegex) || url.match(embedRegex);
    
    if (match && match[1]) {
        return match[1];
    }
    
    // If it's already just the ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
        return url;
    }
    
    return null;
};

// Generate YouTube thumbnail URL from video ID
export const generateThumbnailUrl = (videoId, quality = 'maxresdefault') => {
    if (!videoId) return '';
    // Options: maxresdefault, hqdefault, mqdefault, sddefault
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

// Generate YouTube video URL from video ID
export const generateVideoUrl = (videoId, isShort = false) => {
    if (!videoId) return '';
    return isShort 
        ? `https://www.youtube.com/shorts/${videoId}`
        : `https://youtu.be/${videoId}`;
};

// Admin password functions
export const checkPassword = (password) => {
    const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY);
    return password === storedPassword;
};

export const updatePassword = (newPassword) => {
    localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
    return { success: true };
};

// Initialize storage on module load
initializeStorage();
