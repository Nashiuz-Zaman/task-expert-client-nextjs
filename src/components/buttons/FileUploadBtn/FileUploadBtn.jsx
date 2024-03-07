// react
import PropTypes from 'prop-types';
import { useState } from 'react';

const FileUploadBtn = ({
   children = null,
   colorTheme = 'primary',
   modifyClasses = '',
}) => {
   const [selected, setSelected] = useState(false);

   const colorThemeClass = `${colorTheme}Classes`

   return (
      <div
         className={`rounded-defaultLg border transition-all duration-default px-4 py-3 cursor-pointer ${colorThemeClass} ${modifyClasses}`}
      >
         <label
            style={{ fontSize: 'inherit' }}
            className='cursor-pointer'
         >
            <span
               style={{ fontSize: 'inherit' }}
               className='flex w-full items-center justify-center gap-2'
            >
               {!selected && !children && 'Upload File'}
               {!selected && children && children}
               {selected && 'Selected'}
            </span>
            <input
               onChange={() => {
                  setSelected(true);
               }}
               className='hidden'
               type='file'
               name='file'
            />
         </label>
      </div>
   );
};

FileUploadBtn.propTypes = {
   children: PropTypes.any,
   colorTheme: PropTypes.string,
   modifyClasses: PropTypes.string,
};

export default FileUploadBtn;
