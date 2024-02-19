import { useState, useEffect } from 'react'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import Swal from 'sweetalert2';
import { change_signup_image } from '../../store/actions/pageActions';
import { useDispatch } from 'react-redux';

const FileUploader = () => {

    const [imageUrl, setImageUrl] = useState(null);

    const [storageRef, setStorageRef] = useState(null)

    const storage = getStorage()

    const dispatch = useDispatch()

    function verificarMaximosPixeles(imagen, maxPixels) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function () {
                const width = this.width;
                const height = this.height;
                const totalPixels = width * height;
                if (totalPixels > maxPixels) {
                    reject(`The image exceeds the maximum pixels allowed (${maxPixels}).`);
                } else {
                    resolve();
                }
            };
            if (imagen) img.src = URL.createObjectURL(imagen);
        });
    }

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
        const maxSizeInBytes = 0.2 * 1024 * 1024;
        const maxAllowedPixels = 5000000

        verificarMaximosPixeles(file, maxAllowedPixels)
            .then(async () => {
                if (!allowedTypes.includes(file.type)) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'This image type is not allowed.',
                        showConfirmButton: false,
                        timer: 5000
                    })
                    event.target.value = '';
                    return;
                }

                if (file.size > maxSizeInBytes) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: "The selected image's size exceeds the maximum allowed.",
                        text: 'Maximum size: 200 KB',
                        showConfirmButton: false,
                        timer: 5000
                    })
                    event.target.value = '';
                    return;
                }

                if (imageUrl) {
                    try {
                        await deleteObject(storageRef);
                    } catch (error) {
                        console.error('Error while trying to delete the previous image:', error);
                    }
                }

                if (file) {
                    try {
                        const storageRef = ref(storage, 'files_folder/' + crypto.randomUUID());
                        await uploadBytes(storageRef, file);
                        setStorageRef(storageRef);
                    } catch (error) {
                        console.error('Error while uploading the file:', error);
                    }
                } else {
                    console.error('No file selected.');
                }
            })
            .catch(error => {
                console.error("Error:", error);
                return;
            });
    };

    useEffect(() => {
        if (storageRef) {
            getDownloadURL(storageRef)
                .then((url) => {
                    setImageUrl(url);
                    dispatch(change_signup_image(url))
                })
                .catch((error) => {
                    console.error('Error while obtaining download URL:', error);
                });
        }
    }, [handleFileUpload]);

    return (
        <div className='flex flex-col items-center justify-center gap-4 max-w-min'>
            <h2 className='text-white text-xl rounded-lg max-md:text-xs'>Upload profile photo</h2>
            <input className='bg-gray-100 p-2 text-xl rounded-lg max-md:text-xs' type="file" onChange={handleFileUpload} />
            <p className='text-gray-400 text-xl rounded-lg max-md:text-xs'>Max. file size: 200 KB, image types allowed: image/jpeg, image/webp, image/png</p>
            {imageUrl ? <p className='text-white text-xl rounded-lg max-md:text-xs'>Image preview</p> : null}
            {imageUrl && <img className='w-12 rounded-full bg-white' src={imageUrl} alt="Imagen desde Cloud Storage" />}
            {imageUrl && <img className='w-24 rounded-full bg-white' src={imageUrl} alt="Imagen desde Cloud Storage" />}
            {imageUrl && <img className='w-36 rounded-full bg-white' src={imageUrl} alt="Imagen desde Cloud Storage" />}
        </div>
    );
}
export default FileUploader