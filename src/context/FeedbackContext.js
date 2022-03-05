import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [ feedback, setFeedback ] = useState([
		{
			id: 1,
			text: 'this item is from context',
			rating: 10
		}
	]);

	const [ feedbackEdit, setFeedbackEdit ] = useState({
		item: {},
		edit: false
	});

	useEffect(() => {
		console.log(213);
	}, []);

	// //fetch
	// const fetchFeedback = async () => {
	// 	const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
	// 	const data = await response.json();
	// };

	//add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		console.log(newFeedback);
		setFeedback([ newFeedback, ...feedback ]);
	};

	//delete feedback
	const deleteFeedback = (id) => {
		// console.log('App', id)
		if (window.confirm('Are u sure about this?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	//update feedabck item
	const updateFeedback = (id, updItem) => {
		console.log(id, updItem);
		setFeedback(
			feedback.map(
				(item) =>
					item.id === id
						? {
								...item,
								...updItem
							}
						: item
			)
		);
	};

	//set  item to be edited
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true
		});
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
