'use client';
import React, { useState } from 'react';

export default function ShareButtons({ url, title }: { url: string, title: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleLinkedInShare = () => {
        const linkedInUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url);
        window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="flex items-center gap-4">
            <span className="text-xs font-black text-text-heading uppercase tracking-widest">Share</span>
            <button 
                onClick={handleCopyLink}
                title="Copy Link"
                className={'h-10 w-10 rounded-full flex items-center justify-center transition-all ' + (copied ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600 hover:bg-primary hover:text-white')}
            >
                <span className="material-symbols-outlined text-sm">{copied ? 'check' : 'link'}</span>
            </button>
            <button 
                onClick={handleLinkedInShare}
                title="Share on LinkedIn"
                className="h-10 w-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-all shadow-md"
            >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </button>
        </div>
    );
}
