import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkPassword } from '../utils/videoStorage';
import { Lock, Eye, EyeOff } from 'lucide-react';

const AdminAuth = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkPassword(password)) {
            // Store authentication in sessionStorage
            sessionStorage.setItem('admin_authenticated', 'true');
            navigate('/admin');
        } else {
            setError('Incorrect password');
            setPassword('');
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
            <div className="max-w-md w-full">
                {/* Logo/Title */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <Lock className="text-primary" size={32} />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Admin Access</h1>
                    <p className="text-gray-400">Enter password to manage videos</p>
                </div>

                {/* Password Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError('');
                                }}
                                className="admin-input pr-12"
                                placeholder="Enter admin password"
                                autoFocus
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        {error && (
                            <p className="mt-2 text-sm text-red-500 flex items-center gap-2">
                                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                                {error}
                            </p>
                        )}
                    </div>

                    <button type="submit" className="admin-button w-full">
                        Access Admin Panel
                    </button>
                </form>

                {/* Back to Portfolio */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        ← Back to Portfolio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminAuth;
