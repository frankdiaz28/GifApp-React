import React from 'react';
import { shallow } from "enzyme";
import GifGrid from '../../components/GifGrid';
import { useFetchGifts } from '../../hooks/useFetchGifts';
jest.mock('../../hooks/useFetchGifts');

describe('Pruebas en el componente GifGrid', () => {

    const category = 'Mr Robot';
    //const wrapper = shallow( <GifGrid category = { category }/>);

    test('Debe mostar el componente correctamente', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/holamundo/mundo.jpg',
            title: 'HolaMundo'
        }]

        useFetchGifts.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        expect( wrapper ).toMatchSnapshot();
    });
    
});
