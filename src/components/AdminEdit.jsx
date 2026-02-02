import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getVideos, updateVideo, deleteVideo, extractYouTubeId, generateThumbnailUrl } from '../utils/videoStorage';
import { ArrowLeft, Plus, Edit2, Trash2, Save, X, Youtube } from 'lucide-react';

const AdminEdit = () => {
    const navigate = useNavigate();
    const [videos, setVideos] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({});
    const [deleteConfirm, setDeleteConfirm] = useState(null);

    // Check authentication
    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem('admin_authenticated');
        if (!isAuthenticated) {
            navigate('/admin/login');
        } else {
            loadVideos();
        }
    }, [navigate]);

    const loadVideos = () => {
        const allVideos = getVideos();
        setVideos(allVideos);
    };

    const handleEdit = (video) => {
        setEditingId(video.id);
        setEditForm({
            title: video.title,
            category: video.category,
            description: video.description,
            link: video.link
        });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditForm({});
    };

    const handleSaveEdit = (id) => {
        // Extract video ID from the link if it was changed
        const videoId = extractYouTubeId(editForm.link);
        if (!videoId) {
            alert('Invalid YouTube URL');
            return;
        }

        const isShort = editForm.link.includes('/shorts/');
        const updatedData = {
            title: editForm.title,
            category: editForm.category,
            description: editForm.description,
            link: editForm.link,
            image: generateThumbnailUrl(videoId, isShort ? 'hqdefault' : 'maxresdefault')
        };

        const result = updateVideo(id, updatedData);
        if (result.success) {
            loadVideos();
            setEditingId(null);
            setEditForm({});
        } else {
            alert('Failed to update video: ' + result.error);
        }
    };

    const handleDelete = (id) => {
        const result = deleteVideo(id);
        if (result.success) {
            loadVideos();
            setDeleteConfirm(null);
        } else {
            alert('Failed to delete video: ' + result.error);
        }
    };

    return (
        <div className="min-h-screen bg-black py-20 px-6">
            <div className="container mx-auto max-w-7xl">
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
                            onClick={() => navigate('/admin')}
                            className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                        >
                            <Plus size={20} />
                            Add New Video
                        </button>
                    </div>
                    <h1 className="text-4xl font-bold text-white flex items-center gap-3">
                        <Edit2 className="text-primary" size={36} />
                        Manage Videos
                    </h1>
                    <p className="text-gray-400 mt-2">Edit or delete your portfolio videos</p>
                </div>

                {/* Videos Count */}
                <div className="mb-6">
                    <p className="text-gray-400">
                        Total Videos: <span className="text-primary font-semibold">{videos.length}</span>
                    </p>
                </div>

                {/* Videos Grid */}
                {videos.length === 0 ? (
                    <div className="text-center py-20">
                        <Youtube size={64} className="text-gray-600 mx-auto mb-4" />
                        <p className="text-gray-400 text-lg mb-6">No videos yet. Add your first video!</p>
                        <button
                            onClick={() => navigate('/admin')}
                            className="admin-button inline-flex"
                        >
                            <Plus size={20} />
                            Add New Video
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                            >
                                {/* Thumbnail */}
                                <div className="aspect-video relative">
                                    <img
                                        src={video.image}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                                        ID: {video.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    {editingId === video.id ? (
                                        /* Edit Mode */
                                        <div className="space-y-3">
                                            <input
                                                type="text"
                                                value={editForm.title}
                                                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                                                className="admin-input text-sm"
                                                placeholder="Title"
                                            />
                                            <input
                                                type="text"
                                                value={editForm.category}
                                                onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                                                className="admin-input text-sm"
                                                placeholder="Category"
                                            />
                                            <input
                                                type="text"
                                                value={editForm.link}
                                                onChange={(e) => setEditForm({ ...editForm, link: e.target.value })}
                                                className="admin-input text-sm"
                                                placeholder="YouTube URL"
                                            />
                                            <textarea
                                                value={editForm.description}
                                                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                                                className="admin-input text-sm min-h-[80px] resize-y"
                                                placeholder="Description"
                                            />
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleSaveEdit(video.id)}
                                                    className="flex-1 bg-primary hover:bg-primary/90 text-black font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                                >
                                                    <Save size={16} />
                                                    Save
                                                </button>
                                                <button
                                                    onClick={handleCancelEdit}
                                                    className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                                >
                                                    <X size={16} />
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        /* View Mode */
                                        <>
                                            <p className="text-primary text-xs font-medium uppercase mb-1">
                                                {video.category}
                                            </p>
                                            <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                                                {video.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                {video.description}
                                            </p>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleEdit(video)}
                                                    className="flex-1 bg-white/10 hover:bg-primary hover:text-black text-white font-medium py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                                                >
                                                    <Edit2 size={16} />
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => setDeleteConfirm(video.id)}
                                                    className="flex-1 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white font-medium py-2 px-3 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
                                                >
                                                    <Trash2 size={16} />
                                                    Delete
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-6">
                    <div className="bg-zinc-900 border border-white/20 rounded-lg p-6 max-w-md w-full">
                        <h3 className="text-xl font-bold text-white mb-2">Confirm Delete</h3>
                        <p className="text-gray-400 mb-6">
                            Are you sure you want to delete this video? This action cannot be undone.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => handleDelete(deleteConfirm)}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => setDeleteConfirm(null)}
                                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminEdit;
