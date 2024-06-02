import React from 'react';

const MovieCard = ({ movie, onClick, showShareButton,uuid }) => {
    const handleShareClick = (e) => {
        e.stopPropagation(); // Prevent the click event from bubbling up to the parent li
        const general_id = uuid.find(op => op.playlistName === movie)?.uuid;
        if (general_id) {
            const shareableLink = `${window.location.origin}/shared_playlist/${general_id}`;
            navigator.clipboard.writeText(shareableLink)
                .then(() => {
                    console.log("Shareable link copied to clipboard:", shareableLink);
                    alert("Shareable link copied to clipboard.");
                })
                .catch(err => {
                    console.error("Failed to copy shareable link to clipboard:", err);
                    alert("Failed to copy shareable link to clipboard. Please try again.");
                });
    };
}

    return (
        <li
            onClick={onClick}
            className='bg-gray-500 m-4 w-64 h-96 bg-cover bg-center text-white flex flex-col justify-end rounded-2xl hover:border-4 border-black hover:brightness-100 brightness-75 cursor-pointer'
        >
            <div className='bg-black rounded-b-2xl bg-opacity-70'>
                <h2 className='text-2xl p-1 h-24'>{movie}</h2>
                <div className='flex justify-between p-2'>
                    {showShareButton && (
                        <button 
                            className='text-green-400 hover:text-green-800'
                            onClick={handleShareClick}
                        >
                            SHARE
                        </button>
                    )}
                </div>
            </div>
        </li>
    );
};

export default MovieCard;
