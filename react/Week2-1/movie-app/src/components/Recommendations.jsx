import React, {useState, useEffect} from "react";
import axios from 'axios';

const Recommendations = ({selectedMovie}) => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {

            const response = await axios.get(`http://www.omdbapi.com/recommendations?movieId=${selectedMovie}`);

            setRecommendations(response.data);
        };
        fetchRecommendations();
    },[selectedMovie]);

    return (
        <div className="p-4">
            <h3 className="text-xl">Recommended movies</h3>
            <ul>
                {recommendations.map((rec) => (
                    <li key={rec.id}>{rec.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;