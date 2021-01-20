import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import Helmet from '../components/Helmet';

const CreatePost = () => {
  const [imageName, setImageName] = useState('Image Upload ⏏️');
  const [title, setTitle] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');

  const fileHandler = (e) => {
    const name = e.target.files[0].name;
    setImageName(`You uploaded - ${name}`);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const slugAndTitle = (e) => {
    setTitle(e.target.value);
    const createSlug = e.target.value.trim().split(' ').join('-');
    setSlug(createSlug);
  };

  const submitPostHandler = (e) => {
    e.preventDefault();
    alert(
      `title: ${title}\nimageName: ${imageName}\nvalue: ${value}\nslug: ${slug}`
    );
  };

  console.log(description);

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
                    onChange={(e) => slugAndTitle(e)}
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
                    placeholder="Post's body"
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
                    id='slug'
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    onBlur={() => setSlug(slug.trim().split(' ').join('-'))}
                    disabled={title.length === 0}
                    name='slug'
                    className='group__control'
                    placeholder='Post URL...'
                  />
                </div>
                <div className='groupp'>
                  <label htmlFor='description'>Meta Desription</label>
                  <textarea
                    name=''
                    id='description'
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                    cols='20'
                    rows='10'
                    className='group__control'
                    placeholder='Describe what people can expect from this post here.'
                    maxLength='150'
                  ></textarea>
                  <p>{description.length}/150</p>
                </div>
                <div className='group'>
                  <div className='imagePreview'>
                    <label htmlFor='imagePreview'>Image Preview</label>
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt={imageName}
                        id='imagePreview'
                      />
                    ) : (
                      ''
                    )}
                  </div>
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
