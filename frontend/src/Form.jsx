import React from 'react';

const Blog = () => {
  return (
    <div style={{ width: '300px', margin: '0 auto', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <form>
        <input
          type="text"
          name="bname"
          id="bid"
          placeholder="Enter Blog Name"
          style={{ width: '100%', marginBottom: '10px', padding: '8px', boxSizing: 'border-box' }}
        />
        <input
          type="text"
          placeholder="Author Name"
          style={{ width: '100%', marginBottom: '10px', padding: '8px', boxSizing: 'border-box' }}
        />
        <textarea
          placeholder="Description"
          style={{ width: '100%', height: '80px', marginBottom: '10px', padding: '8px', boxSizing: 'border-box' }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '8px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Blog;

