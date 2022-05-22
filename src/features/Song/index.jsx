import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeatrue.propTypes = {

};

function AlbumFeatrue(props) {

    const albumList = [
        {
            id: 1,
            name: 'Cặp bài trùng lặp',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/d/f/3/cdf38f3a3573b0e649f8e3859359c2b5.jpg',
        },
        {
            id: 2,
            name: 'K-Pop Daebak',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/c/8/4/2c84aa313b7c90033df69192b8bf122f.jpg',
        },
        {
            id: 3,
            name: 'Tản Mạn Cùng Indie Việt',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/9/b/3/49b350b720fe74b9f623d871370c6d97.jpg',
        },
    ];

    return (
        <div>
            <h2>Có thể bạn sẽ thích </h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeatrue;