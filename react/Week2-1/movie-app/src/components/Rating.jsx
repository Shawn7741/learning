import React, {useState} from "react";

const Rating = ({movieId}) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const submitRating = () => {

    };

    return (
        <div className="p-4">
            <h3 className="text-xl">Rate Movie</h3>
            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="0" max="10" className="p-2 border border-gray-300 rounded-md" />
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Comment on the movie" className="p-2 border border-gray-300 rounded-md mt-2 w-full"></textarea>
            <button onClick={submitRating} className="mt-2 p-2 bg-slate-600 text-white rounded-md">Submit</button>
        </div>
    );
};

export default Rating;