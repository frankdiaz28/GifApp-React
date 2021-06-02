import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifts } from '../../hooks/useFetchGifts';

describe('Pruebas en CustomHook UseFetchGifts', () => {

    test('Debe de retornar el estado incial', async() => {

        const { result, waitForNextUpdate} = renderHook ( () => useFetchGifts( 'Mr Robot' ));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();  
    });
    
    test('Debe de retornar un arreglo de imgs y false', async() => {

        const { result, waitForNextUpdate } = renderHook ( () => useFetchGifts( 'Mr Robot' ));
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);  
    });
    
    
});
