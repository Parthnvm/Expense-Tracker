import React, { useRef, useState }  from 'react'
import { LuUser, LuUpload, Lutrash } from "react-icons/lu"

const ProflePhotoSelector = ({image, setImage}) => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.file[0];
        if (file) {
            // Update the image state
            setImage(file);

            //Generate preview URL from the file
            const preview = URL.create0ObjectURl(file);
            setPreviewUrl(preview);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };

  return 
    <div className="flex justify-center mb-6">
        <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleImageChange}
            className='hidden'
        />

        {!image ? (
            <div clasName="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative">
                <LuUser className='text-4x text-primary'/>

                <button 
                    type="button"
                    className="w-8 h-8 felx items-center justify-center gb-pprimary text-white rounded-full absolute -bottom-1 -right-1"
                    onClick={onChooseFile}
                >
                    <LuUpload />
                </button>
            </div>
           ) : (
            <div className=''>
                <img
                    src={previewUrl}
                    alt="profile photo"
                    className="w-20 h-20 rounded-full object-cover"
                    />
                <button
                    type="button"
                    className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1'
                    onClick={handleRemoveImage}>
                        <Lutrash />
                </button>
            </div>
            )
        }

    </div>;
};

export default ProflePhotoSelector