import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addVideo, extractYouTubeId, generateThumbnailUrl, generateVideoUrl } from '../utils/videoStorage';
import { Plus, ArrowLeft, Edit, CheckCircle, AlertCircle, Youtube } from 'lucide-react';

const AdminUpload = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        youtubeUrl: '',
        description: '',
        isShort: false
    });
    const [feedback, setFeedback] = useState({ type: '', message: '' });
    const [preview, setPreview] = useState(null);

    // Check authentication
    React.useEffect(() => {
        const isAuthenticated = sessionStorage.getItem('admin_authenticated');
        if (!isAuthenticated) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: newValue
        }));

        // Update preview when YouTube URL changes
        if (name === 'youtubeUrl') {
            const videoId = extractYouTubeId(value);
            if (videoId) {
                setPreview({
                    videoId,
                    thumbnail: generateThumbnailUrl(videoId, 'maxresdefault')
                });
            } else {
                setPreview(null);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFeedback({ type: '', message: '' });

        // Validate form
        if (!formData.title || !formData.category || !formData.youtubeUrl || !formData.description) {
            setFeedback({ type: 'error', message: 'Please fill in all fields' });
            return;
        }

        // Extract YouTube ID
        const videoId = extractYouTubeId(formData.youtubeUrl);
        if (!videoId) {
            setFeedback({ type: 'error', message: 'Invalid YouTube URL. Please enter a valid YouTube video link.' });
            return;
        }

        // Prepare video object
        const video = {
            title: formData.title,
            category: formData.category,
            image: generateThumbnailUrl(videoId, formData.isShort ? 'hqdefault' : 'maxresdefault'),
            link: generateVideoUrl(videoId, formData.isShort),
            description: formData.description
        };

        // Add to storage
        const result = addVideo(video);

        if (result.success) {
            setFeedback({ type: 'success', message: 'Video added successfully!' });
            // Reset form
            setFormData({
                title: '',
                category: '',
                youtubeUrl: '',
                description: '',
                isShort: false
            });
            setPreview(null);
        } else {
            setFeedback({ type: 'error', message: result.error || 'Failed to add video' });
        }
    };

    return (
        <div className="min-h-screen bg-black py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <ArrowLeft size={20} />
                            Back to Portfolio
                        </button>
                        <span className="text-gray-600">|</span>
                        <button
                            onClick={() => navigate('/admin/edit')}
                            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                        >
                            <Edit size={20} />
                            Edit Videos
                        </button>
                    </div>
                    <h1 className="text-4xl font-bold text-white flex items-center gap-3">
                        <Plus className="text-primary" size={36} />
                        Add New Video
                    </h1>
                    <p className="text-gray-400 mt-2">Upload a new video to your portfolio by sharing a YouTube link</p>
                </div>

                {/* Feedback Message */}
                {feedback.message && (
                    <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${feedback.type === 'success'
                            ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                            : 'bg-red-500/10 border border-red-500/30 text-red-400'
                        }`}>
                        {feedback.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        {feedback.message}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Title */}
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                                    Video Title *
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="admin-input"
                                    placeholder="e.g., Podcast Hook"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                                    Category *
                                </label>
                                <input
                                    type="text"
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="admin-input"
                                    placeholder="e.g., Podcast Intro, Documentary, 3D Animation"
                                />
                            </div>

                            {/* YouTube URL */}
                            <div>
                                <label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                    <Youtube size={16} className="text-red-500" />
                                    YouTube URL *
                                </label>
                                <input
                                    type="url"
                                    id="youtubeUrl"
                                    name="youtubeUrl"
                                    value={formData.youtubeUrl}
                                    onChange={handleInputChange}
                                    className="admin-input"
                                    placeholder="https://youtube.com/watch?v=..."
                                />
                                <p className="mt-2 text-xs text-gray-500">
                                    Supports: youtube.com/watch, youtu.be, youtube.com/shorts, youtube.com/embed
                                </p>
                            </div>

                            {/* Is Short Checkbox */}
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="isShort"
                                    name="isShort"
                                    checked={formData.isShort}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 bg-white/10 border-white/20 rounded focus:ring-primary focus:ring-2 text-primary cursor-pointer"
                                />
                                <label htmlFor="isShort" className="text-sm text-gray-300 cursor-pointer">
                                    This is a YouTube Short
                                </label>
                            </div>

                            {/* Description */}
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                                    Description *
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="admin-input min-h-[100px] resize-y"
                                    placeholder="Brief description of the video..."
                                    rows={4}
                                />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="admin-button w-full">
                                <Plus size={20} />
                                Add Video to Portfolio
                            </button>
                        </form>
                    </div>

                    {/* Preview */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
                        {preview ? (
                            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                                <img
                                    src={preview.thumbnail}
                                    alt="Video thumbnail"
                                    className="w-full aspect-video object-cover"
                                    onError={(e) => {
                                        e.target.src = generateThumbnailUrl(preview.videoId, 'hqdefault');
                                    }}
                                />
                                <div className="p-4">
                                    <p className="text-primary text-sm font-medium uppercase mb-1">
                                        {formData.category || 'Category'}
                                    </p>
                                    <h4 className="text-white font-bold text-lg mb-2">
                                        {formData.title || 'Video Title'}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {formData.description || 'Video description will appear here...'}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white/5 border border-white/10 rounded-lg p-12 flex flex-col items-center justify-center text-center">
                                <Youtube size={48} className="text-gray-600 mb-4" />
                                <p className="text-gray-400">
                                    Enter a YouTube URL to see the preview
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminUpload;
