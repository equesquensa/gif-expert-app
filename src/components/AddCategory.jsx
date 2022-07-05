import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim().length <= 2) return;

		// setCategories((cat) => [inputValue, ...cat]);

		setInputValue('');
		onNewCategory(inputValue.trim());
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Search Gifs'
					value={inputValue}
					onChange={onChange}
				/>
			</form>
		</>
	);
};
