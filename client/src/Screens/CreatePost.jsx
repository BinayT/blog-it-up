import { useState } from 'react';
import Helmet from '../components/Helmet';

const CreatePost = () => {
  const [fileName, setFileName] = useState('');

  const fileHandler = (e) => {
    console.log(e.target.files);
  };

  return (
    <div className='createPost mt-100'>
      <Helmet title='Create A Post | Blog It Up' />
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='card'>
              <h3 className='card__h3'>Create a new post</h3>
              <form>
                <div className='group'>
                  <label htmlFor='title'>Post Title</label>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    className='group__control'
                    placeholder='Post a title...'
                  />
                </div>
                <div className='group'>
                  <label htmlFor='image' className='image__label'>
                    Image Upload ⏏️
                  </label>
                  <input
                    type='file'
                    name='picture'
                    id='image'
                    onChange={fileHandler}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
