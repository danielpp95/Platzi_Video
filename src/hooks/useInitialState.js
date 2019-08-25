import { useEffect, useState } from 'react';

const useInitialState = (API) => {
    const [Videos, SetVideos] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => SetVideos(data));
    }, []);
    return Videos;
};

export default useInitialState;
