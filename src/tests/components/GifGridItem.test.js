import React from 'react';
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas en GifGridItem', () => {

    const title = 'Un Titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( 
        <GifGridItem 
            title = { title }
            url = { url }
        />)

    test('Debe mostrar el componente correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();       
    });

    test('Debe de tener un parrafo con el title', () => {

       const p = wrapper.find('p');
       expect( p.text().trim() ).toBe( title );       
    });

    test('Debe tener la imagen igual a url y alt de los props', () => {

       const img = wrapper.find('img');
       expect( img.prop('src') ).toBe(url);
       expect( img.prop('alt') ).toBe(title);

    });

    test('Debe de tener animate__fadeIn', () => {

      const div = wrapper.find('div');
      expect( div.hasClass('animate__fadeIn')).toBe( true )

    });
    
    
    

    
    
    
});

