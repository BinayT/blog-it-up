import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Helmet from '../components/Helmet';

const CreatePost = () => {
  const [imageName, setImageName] = useState('Image Upload ⏏️');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  const fileHandler = (e) => {
    const name = e.target.files[0].name;
    setImageName(`You uploaded - ${name}`);
  };

  const submitPostHandler = (e) => {
    e.preventDefault();
    alert(`title: ${title}\nimageName: ${imageName}\nvalue: ${value}\n`);
  };

  return (
    <div className='createPost mt-100'>
      <Helmet title='Create A Post | Blog It Up' />
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='card'>
              <h3 className='card__h3'>Create a new post</h3>
              <form onSubmit={submitPostHandler}>
                <div className='group'>
                  <label htmlFor='title'>Post Title</label>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='group__control'
                    placeholder='Post a title...'
                  />
                </div>
                <div className='group'>
                  <label htmlFor='image' className='image__label'>
                    {imageName}
                  </label>
                  <input
                    type='file'
                    name='picture'
                    id='image'
                    onChange={fileHandler}
                  />
                </div>
                <div className='group'>
                  <label htmlFor='body'>
                    <ReactQuill
                      theme='snow'
                      value={value}
                      onChange={setValue}
                    />
                  </label>
                </div>
                <div className='group'>
                  <input
                    type='submit'
                    className='btn btn-default btn-block'
                    value='Create Post'
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
