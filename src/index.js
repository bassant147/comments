import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'; 

const App = () => {
	return (
		<div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="today at 5:04AM"
          content="Nice!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
			
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="today at 1:34PM"
          content="why wont u answer ur phone"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
			
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="today at 4:04PM"
          content="same"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>			
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
