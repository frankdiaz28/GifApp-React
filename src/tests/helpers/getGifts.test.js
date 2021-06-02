import { getGifts } from "../../helpers/getGifts"

describe('Pruebas en getGifts ', () => {

    test('Debe de traer 10 elementos', async() => {

        const gifs = await getGifts('Mr Robot');
        expect( gifs.length ).toBe( 10 );
    });

    test('Debe de traer 10 elementos', async() => {

        const gifs = await getGifts('');
        expect( gifs.length ).toBe( 0 );
    });
    

});
