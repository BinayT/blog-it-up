import Helmet from '../components/Helmet';

const CreatePost = () => {
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
