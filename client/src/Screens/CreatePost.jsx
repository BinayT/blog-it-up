import Helmet from '../components/Helmet';

const CreatePost = () => {
  return (
    <div className='createPost mt-100'>
      <Helmet title='Create A Post | Blog It Up' />
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='card'>
              <h3>Create a new post</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
