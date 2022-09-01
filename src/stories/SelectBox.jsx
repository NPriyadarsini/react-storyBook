import React from 'react';
import PropTypes from 'prop-types';
import './selectBox.css';

/**
 * Primary UI component for user interaction
 */
export const SelectBox
= ({ primary, backgroundColor, size, options, ...props }) => {
	const mode = primary
		? 'storybook-selectBox--primary'
		: 'storybook-selectBox--secondary';

	return (
		<select
			className={ ['storybook-selectBox', `storybook-selectBox--${ size }`, mode].join(' ') }
			style={ backgroundColor && { backgroundColor } }
			{ ...props }
		>{
				options.map((option) =>
					<option key={ option } value={ option }>
						{option}</option>)
			}
		</select>
	);
};

SelectBox.propTypes = {

	/**
   * Is this the principal call to action on the page?
   */
	primary: PropTypes.bool,

	/**
   * What background color to use
   */
	backgroundColor: PropTypes.string,

	/**
   * How large should the button be?
   */
	size: PropTypes.oneOf(['small', 'medium', 'large']),

	/**
   * Button contents
   */
	label: PropTypes.string.isRequired,

	/**
   * Select Options
   */
	options: PropTypes.array,

	/**
   * Optional click handler
   */
	onClick: PropTypes.func,
};

SelectBox.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: 'medium',
	onClick: undefined,
	options: [],
};
