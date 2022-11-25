

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'VdChkqaybp1i2KdQj8Ih6X20V1awJCpn';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No existe';
    }
    
    
}
// }

// const apiKey = 'VdChkqaybp1i2KdQj8Ih6X20V1awJCpn';
//         export const getGif = async() => {
//             const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
//             const {data} = await resp.json()
//             const { url } = data.images.original;
//             const img = document.createElement('img');
//             img.src = url;
//             return img
//             // document.body.append( img );
//         }





