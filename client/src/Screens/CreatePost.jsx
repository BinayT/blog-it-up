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
        <form onSubmit={submitPostHandler}>
          <div className='row mr-minus-15 ml-minus-15'>
            <div className='col-6 p-15'>
              <div className='card'>
                <h3 className='card__h3'>Create a new post</h3>
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
                  <label htmlFor='body'>Post Body</label>
                  <ReactQuill
                    theme='snow'
                    value={value}
                    onChange={setValue}
                    id='body'
                  />
                </div>
                <div className='group'>
                  <input
                    type='submit'
                    className='btn btn-default btn-block'
                    value='Create Post'
                  />
                </div>
              </div>
            </div>
            <div className='col-6 p-15'>
              <div className='card'>
                <div className='group'>
                  <label htmlFor='slug'>Post's URL...</label>
                  <input
                    type='text'
                    name='slug'
                    id='slug'
                    className='group__control'
                    placeholder='Post URL...'
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
