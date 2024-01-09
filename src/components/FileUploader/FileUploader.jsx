import { useState, useEffect } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const FileUploader = () => {

    const [imageUrl, setImageUrl] = useState(null);

    const storage = getStorage()

    const handleFileUpload = async (event) => {
        const file = event.target.files[0]; // Obtiene el archivo seleccionado

        if (file) {
            try {
                const storageRef = ref(storage, 'files_folder/' + file.name); // Crea una referencia al archivo en el Storage
                await uploadBytes(storageRef, file); // Sube el archivo al Storage

                console.log('Archivo subido con éxito.');
            } catch (error) {
                console.error('Error al subir el archivo:', error);
            }
        } else {
            console.error('No se ha seleccionado ningún archivo.');
        }
    };

    useEffect(() => {
        const storage = getStorage();
        const fileRef = ref(storage, 'files_folder/theHunter_Screenshot_2023-07-04_01_31_06.bmp'); // Reemplaza 'ruta/al/archivo' con la ubicación de tu archivo en el Storage.
    
        getDownloadURL(fileRef)
          .then((url) => {
            setImageUrl(url);
          })
          .catch((error) => {
            // Manejo de errores
            console.error('Error al obtener la URL de descarga:', error);
          });
      }, []);

    return (
        <div>
            <h2>Subir Archivo</h2>
            <input type="file" onChange={handleFileUpload} />
            <h1>Imagen desde Cloud Storage</h1>
            {imageUrl && <img src={imageUrl} alt="Imagen desde Cloud Storage" />}
        </div>
    );
}
export default FileUploader