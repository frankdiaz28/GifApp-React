import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifts } from '../hooks/useFetchGifts';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

     const { data:images, loading } = useFetchGifts( category );

    return (
        <>
        <h3 className='animate__fadeIn'>{ category }</h3>

        {loading && <p>Loading</p>}

        <div className='card-grid'>
            {
                images.map( img =>(
                    <GifGridItem 
                      key={img.id}
                      {...img}
                    />
                       
                ))
            }
        </div>
        </>
    )
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;
