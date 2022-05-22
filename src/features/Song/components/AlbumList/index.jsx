import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.object.isRequired,
};

function AlbumList({ albumList }) {
    return (
        <ul className='album-list'>
            {albumList.map(ablum => (
                <li key={ablum.id}>
                    <Album album={ablum} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;